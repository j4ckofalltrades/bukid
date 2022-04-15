# búkid :philippines: :mountain:

[GeoJSON](https://geojson.org) and [TopoJSON](https://github.com/topojson/topojson) data for mountains in the Philippines.

Check out the interactive map at [j4ckofalltrades.github.io/bukid](https://j4ckofalltrades.github.io/bukid)

## Metadata

Metadata for each mountain can be parsed from the `properties` field.

| field       | description                                                                              | required |
|-------------|------------------------------------------------------------------------------------------|----------|
| `name`      | Name of the mountain                                                                     | required |
| `elev`      | Height in meters                                                                         | required |
| `prom`      | [Topographic prominence](https://en.wikipedia.org/wiki/Topographic_prominence) in meters | required |
| `is_volc`   | If the mountain is a volcano or not                                                      | required |
| `coord`     | Formatted coordinates                                                                    | required |
| `prov`      | One or more provinces where the mountain is located                                      | required |
| `region`    | One or more regions where the mountain is located                                        | required |
| `isl_grp`   | Island group where the mountain is located                                               | required |
| `alt_names` | Alternative names or spelling                                                            | optional |

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
    "region": ["XI", "XII"],
    "isl_grp": "Mindanao",
    "alt_names": "",
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
    "region": ["XI", "XII"],
    "isl_grp": "Mindanao",
    "alt_names": "",
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
  "transform": {
    "scale": [
      0.0009258424842484244,
      0.001568632763276328
    ],
    "translate": [
      117.053135,
      5.018302
    ]
  },
  "bbox": [
    117.053135,
    5.018302,
    126.310634,
    20.703061
  ]
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
  "transform": {
    "scale": [0.0009258424842484244, 0.001568632763276328],
    "translate": [117.053135, 5.018302]
  },
  "bbox": [117.053135, 5.018302, 126.310634, 20.703061]
}
```

## TODO

- [] Add location data (region and province) 

- [x] Interactive map
