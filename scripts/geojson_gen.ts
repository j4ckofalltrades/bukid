import * as fs from "fs"
import { FeatureCollection } from "geojson"
import { GEOJSON_ROOT_DIR, ISLAND_GROUPS, PROVINCES, REGIONS } from "./constants"

const geoJsonBase = fs.readFileSync(`${GEOJSON_ROOT_DIR}/_index.geojson`, "utf-8")
const geoJsonFeatureCollection: FeatureCollection = JSON.parse(geoJsonBase)

ISLAND_GROUPS.forEach(i => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJsonFeatureCollection.features
      .filter(f => f.properties?.isl_grp === i),
  }

  fs.writeFileSync(
    `${GEOJSON_ROOT_DIR}/island-group/${i.toLowerCase()}.geojson`,
    JSON.stringify(featureCollection)
  )
})

REGIONS.forEach(r => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJsonFeatureCollection.features
      .filter(f => f.properties?.region.includes(r)),
  }

  fs.writeFileSync(
    `${GEOJSON_ROOT_DIR}/region/${r.toLowerCase().replace(/ /g, "_")}.geojson`,
    JSON.stringify(featureCollection)
  )
})

PROVINCES.forEach(p => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJsonFeatureCollection.features
      .filter(f => f.properties?.prov.includes(p)),
  }

  fs.writeFileSync(
    `${GEOJSON_ROOT_DIR}/province/${p.toLowerCase().replace(/ /g, "_")}.geojson`,
    JSON.stringify(featureCollection)
  )
})
