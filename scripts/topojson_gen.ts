import * as fs from "fs"
import { topology } from "topojson-server"
import { GEOJSON_ROOT_DIR, ISLAND_GROUPS, PROVINCES, REGIONS, TOPOJSON_ROOT_DIR } from "./constants"
import { FeatureCollection } from "geojson"

const geoJsonBase = fs.readFileSync(`${GEOJSON_ROOT_DIR}/_index.geojson`, "utf-8")
const geoJsonFeatureCollection: FeatureCollection = JSON.parse(geoJsonBase)

// generate base topojson
fs.writeFileSync(
  `${TOPOJSON_ROOT_DIR}/_index.topojson`,
  JSON.stringify(topology({ mountains: geoJsonFeatureCollection }))
)

ISLAND_GROUPS.forEach(i => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJsonFeatureCollection.features
      .filter(f => f.properties?.isl_grp === i),
  }

  fs.writeFileSync(
    `${TOPOJSON_ROOT_DIR}/island-group/${i.toLowerCase()}.topojson`,
    JSON.stringify(topology({ mountains: featureCollection }))
  )
})

REGIONS.forEach(r => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJsonFeatureCollection.features
      .filter(f => f.properties?.region.includes(r)),
  }

  fs.writeFileSync(
    `${TOPOJSON_ROOT_DIR}/region/${r.toLowerCase().replace(/ /g, "_")}.topojson`,
    JSON.stringify(topology({ mountains: featureCollection }))
  )
})

PROVINCES.forEach(p => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJsonFeatureCollection.features
      .filter(f => f.properties?.prov.includes(p)),
  }

  fs.writeFileSync(
    `${TOPOJSON_ROOT_DIR}/province/${p.toLowerCase().replace(/ /g, "_")}.topojson`,
    JSON.stringify(topology({ mountains: featureCollection }))
  )
})
