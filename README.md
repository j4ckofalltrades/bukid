<div align="center">
  <br/>
  <a href="https://github.com/j4ckofalltrades/bukid">
    <img src="assets/logo.png" alt="Logo">
  </a>

  <p align="center">
    <a href="https://geojson.org">
      GeoJSON
    </a>
    and
    <a href="https://github.com/topojson/topojson">
      TopoJSON
    </a>
    data for mountains in the Philippines.
  </p>
</div>

# About

> búkid - Capiznon word for mountain.

The entire dataset is available under the [data](./data) directory, including the following subsets:

- by Island Group e.g. Luzon, Visayas, Mindanao
- by Region e.g. CAR, Region VI, etc.
- by Province e.g. Capiz, Iloilo, etc.

## Interactive Map

Check it out at [bukid.vercel.app](https://bukid.vercel.app)

<img src="assets/interactive-map.png" alt="Interactive Map" height="714px" width="542px">

## Metadata

Metadata for each mountain can be parsed from the `properties` field.

| field       | description                                                                              | required |
|-------------|------------------------------------------------------------------------------------------|----------|
| `name`      | Name of the mountain                                                                     | required |
| `elev`      | Height in meters                                                                         | required |
| `prom`      | [Topographic prominence](https://en.wikipedia.org/wiki/Topographic_prominence) in meters | required |
| `coord`     | Formatted coordinates                                                                    | required |
| `is_volc`   | If the mountain is a volcano or not                                                      | optional |
| `prov`      | One or more provinces where the mountain is located                                      | required |
| `region`    | One or more regions where the mountain is located                                        | required |
| `isl_grp`   | Island group where the mountain is located                                               | required |
| `alt_names` | Alternative names or spelling                                                            | optional |

### Style metadata

Metadata for styling GeoJSON data, see [simplestyle-spec](https://github.com/mapbox/simplestyle-spec).

| field           | value    |
|-----------------|----------|
| `marker-color`  | #259346  |
| `marker-symbol` | mountain |
| `marker-size`   | medium   |

## Sample

GeoJSON and TopoJSON data for Mount Apo.

- GeoJSON

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.270833, 6.9875]
  },
  "properties": {
    "name": "Apo",
    "elev": 2954,
    "prom": 2954,
    "coord": "6°59′14″N 125°16′15″E",
    "is_volc": true,
    "prov": ["Cotabato", "Davao del Sur"],
    "region": ["Region XI", "Region XII"],
    "isl_grp": "Mindanao",
    "alt_names": [],
    "marker-color": "#259346",
    "marker-size": "small",
    "marker-symbol": "mountain"
  }
}
```

```geojson
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.270833, 6.9875]
  },
  "properties": {
    "name": "Apo",
    "elev": 2954,
    "prom": 2954,
    "coord": "6°59′14″N 125°16′15″E",
    "is_volc": true,
    "prov": ["Cotabato", "Davao del Sur"],
    "region": ["Region XI", "Region XII"],
    "isl_grp": "Mindanao",
    "alt_names": [],
    "marker-color": "#259346",
    "marker-size": "small",
    "marker-symbol": "mountain"
  }
}
```

- TopoJSON

```json
{
  "type": "Topology",
  "objects": {
    "collection": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {
            "name": "Apo",
            "elev": 2954,
            "prom": 2954,
            "coord": "6°59′14″N 125°16′15″E",
            "is_volc": true,
            "prov":  ["Cotabato", "Davao del Sur"],
            "region": ["Region XI", "Region XII"],
            "isl_grp": "Mindanao",
            "alt_names": [],
            "marker-color": "#259346",
            "marker-size": "medium",
            "marker-symbol": "mountain"
          },
          "coordinates": [8876, 1255]
        }
      ]
    }
  },
  "arcs": [],
  "bbox": [125.227721, 6.541396, 125.409816, 7.36793]
}
```

```topojson
{
  "type": "Topology",
  "objects": {
    "collection": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {
            "name": "Apo",
            "elev": 2954,
            "prom": 2954,
            "coord": "6°59′14″N 125°16′15″E",
            "is_volc": true,
            "prov":  ["Cotabato", "Davao del Sur"],
            "region": ["Region XI", "Region XII"],
            "isl_grp": "Mindanao",
            "alt_names": [],
            "marker-color": "#259346",
            "marker-size": "medium",
            "marker-symbol": "mountain"
          },
          "coordinates": [8876, 1255]
        }
      ]
    }
  },
  "arcs": [],
  "bbox": [125.227721, 6.541396, 125.409816, 7.36793]
}
```

## TODO

- [] Add fuzzy search

- [x] Add location data (region and province) 

- [x] Interactive map
