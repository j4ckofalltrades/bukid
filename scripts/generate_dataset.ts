import * as fs from "fs"
import { FeatureCollection } from "geojson"
import { topology } from "topojson-server"

const geoJsonRootDir = "data/geojson"
const topoJsonRootDir = "data/topojson"

const json = fs.readFileSync(`${geoJsonRootDir}/index.geojson`, "utf-8")
const geoJson: FeatureCollection = JSON.parse(json)

// generate base topojson
fs.writeFileSync(
  `${topoJsonRootDir}/index.topojson`,
  JSON.stringify(topology({ mountains: geoJson }))
)

// create datasets by island group
const islandGroups = ["Luzon", "Visayas", "Mindanao"]
islandGroups.forEach(i => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJson.features
      .filter(f => f.properties?.isl_grp === i),
  }

  fs.writeFileSync(
    `${geoJsonRootDir}/island-group/${i.toLowerCase()}.geojson`,
    JSON.stringify(featureCollection)
  )
  fs.writeFileSync(
    `${topoJsonRootDir}/island-group/${i.toLowerCase()}.topojson`,
    JSON.stringify(topology({ mountains: featureCollection }))
  )
})

// create datasets by region
const regions = [
  "CAR",
  "Region I",
  "Region II",
  "Region III",
  "Region IV-A",
  "Mimaropa",
  "Region V",
  "Region VI",
  "Region VII",
  "Region VIII",
  "Region IX",
  "Region X",
  "Region XI",
  "Region XII",
  "Region XIII",
  "BARMM",
]
regions.forEach(r => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJson.features
      .filter(f => f.properties?.region.includes(r)),
  }

  fs.writeFileSync(
    `${geoJsonRootDir}/region/${r.toLowerCase().replace(/ /g, "_")}.geojson`,
    JSON.stringify(featureCollection)
  )
  fs.writeFileSync(
    `${topoJsonRootDir}/region/${r.toLowerCase().replace(/ /g, "_")}.topojson`,
    JSON.stringify(topology({ mountains: featureCollection }))
  )
})

// create datasets by province
const provinces = [
  "Abra",
  "Agusan del Norte",
  "Agusan del Sur",
  "Aklan",
  "Albay",
  "Antique",
  "Apayao",
  "Aurora",
  "Basilan",
  "Bataan",
  "Batanes",
  "Batangas",
  "Benguet",
  "Biliran",
  "Bohol",
  "Bukidnon",
  "Bulacan",
  "Cagayan",
  "Camarines Norte",
  "Camarines Sur",
  "Camiguin",
  "Capiz",
  "Catanduanes",
  "Cavite",
  "Cebu",
  "Cotabato",
  "Davao Occidental",
  "Davao Oriental",
  "Davao de Oro",
  "Davao del Norte",
  "Davao del Sur",
  "Dinagat Islands",
  "Eastern Samar",
  "Guimaras",
  "Ifugao",
  "Ilocos Norte",
  "Ilocos Sur",
  "Iloilo",
  "Isabela",
  "Kalinga",
  "La Union",
  "Laguna",
  "Lanao del Norte",
  "Lanao del Sur",
  "Leyte",
  "Maguindanao",
  "Marinduque",
  "Masbate",
  "Misamis Occidental",
  "Misamis Oriental",
  "Mountain Province",
  "Negros Occidental",
  "Negros Oriental",
  "Northern Samar",
  "Nueva Ecija",
  "Nueva Vizcaya",
  "Occidental Mindoro",
  "Oriental Mindoro",
  "Palawan",
  "Pampanga",
  "Pangasinan",
  "Quezon",
  "Quirino",
  "Rizal",
  "Romblon",
  "Samar",
  "Sarangani",
  "Siquijor",
  "Sorsogon",
  "South Cotabato",
  "Southern Leyte",
  "Sultan Kudarat",
  "Sulu",
  "Surigao Del Norte",
  "Surigao del Sur",
  "Tarlac",
  "Tawi-Tawi",
  "Zambales",
  "Zamboanga Sibugay",
  "Zamboanga del Norte",
  "Zamboanga del Sur",
]
provinces.forEach(p => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geoJson.features
      .filter(f => f.properties?.region.includes(p)),
  }

  fs.writeFileSync(
    `${geoJsonRootDir}/province/${p.toLowerCase().replace(/ /g, "_")}.geojson`,
    JSON.stringify(featureCollection)
  )
  fs.writeFileSync(
    `${topoJsonRootDir}/province/${p.toLowerCase().replace(/ /g, "_")}.topojson`,
    JSON.stringify(topology({ mountains: featureCollection }))
  )
})
