# búkid :philippines: :mountain:

[GeoJSON](https://geojson.org) data for mountains in the Philippines.

## Metadata

Metadata for each mountain can be parsed from the [Feature](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2) `properties`.

| field          | description                                                                                 | required |
|----------------|---------------------------------------------------------------------------------------------|----------|
| `name`         | Name of the mountain                                                                        | required |
| `elevation`    | Height in meters                                                                            | required |
| `prominence`   | [Topographic prominence](https://en.wikipedia.org/wiki/Topographic_prominence) in meters    | optional |
| `town`         | One or more cities / municipalities where the mountain is located  (separated by semicolon) | required |
| `province`     | One or more provinces where the mountain is located (separated by semicolon)                | required |
| `region`       | One or more regions where the mountain is located                                           | required |
| `island_group` | Island group where the mountain is located                                                  | required |
| `alt_names`    | Alternative names or spelling                                                               | optional |
