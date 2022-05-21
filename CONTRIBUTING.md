# Contributing

Start off by [creating an issue](https://github.com/j4ckofalltrades/bukid/issues) that describes the proposed changes,
be it adding in new data or updating the existing dataset.

Changes should only be made to the [base GeoJSON dataset](data/geojson/_index.geojson), as all other datasets are
generated from this file.

Please read the following guidelines to ensure that your changes are consistent with the conventions in this repository.

### Creating or updating metadata

A mountain is defined as a *feature*, which the following structure:

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      125.270833,
      6.9875
    ]
  },
  "properties": {
    "name": "Apo",
    "elev": 2954,
    "prom": 2954,
    "coord": "6°59′14″N 125°16′15″E",
    "is_volc": true,
    "prov": [
      "Cotabato",
      "Davao del Sur"
    ],
    "region": [
      "Region XI",
      "Region XII"
    ],
    "isl_grp": "Mindanao",
    "alt_names": [],
    "marker-color": "#259346",
    "marker-size": "large",
    "marker-symbol": "mountain"
  }
}
```

Check that all `required` fields are populated, see [Metadata](README.md#metadata).

- Mountain names should be prefixed with **Mount** (generally the case, except for ones ending in _Hill_ or _Peak_).
- Alternative names should be added to the `properties.alt_names` field.
- Elevation and prominence should be in **meters** above sea level.
- Island group, province, and region should follow the naming conventions in [constants.ts](scripts/constants.ts).
- Follow the defined conventions for [style metadata](README.md#style-metadata).

Once all the metadata has been filled out, verify the location by viewing it on a map. One quick way of doing this is
through [geojson.io](https://geojson.io) -- just copy and paste in the GeoJSON snippet or file.

### Formatting and generating datasets

Once the changes have been made to the base dataset, run the following commands to update the sub-datasets, and apply formatting:

1. Generate {Geo,Topo}JSON datasets by running `make dataset`.
2. Apply the proper formatting by running `make fmt`.

---

Thanks for taking the time to contribute.
