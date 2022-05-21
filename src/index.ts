import { NavigationControl, Map, Popup, LngLatLike, GeoJSONSource } from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import dataset from "../data/geojson/_index.geojson"

const map = new Map({
  container: "map",
  style: "https://api.maptiler.com/maps/topo/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
  center: [121.652, 12.954],
  bounds: [
    [114.0952145, 4.2158064],
    [126.8072562, 21.3217806],
  ],
  zoom: 6,
})

map.on("load", () => {
  map.addSource(
    "mountains",
    {
      type: "geojson",
      data: dataset,
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
    })

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "mountains",
    filter: ["has", "point_count"],
    paint: {
      // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * 20px circles when point count is less than 10
      //   * 30px circles when point count is between 10 and 30
      //   * 40px circles when point count is greater than or equal to 30
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#c3eca6",
        10,
        "#7ada6e",
        50,
        "#0cc034",
      ],
      "circle-radius": [
        "step",
        ["get", "point_count"],
        15,
        10,
        25,
        50,
        35,
      ],
    },
  })

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "mountains",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": [
        "Open Sans Semibold",
        "Arial Unicode MS Bold",
      ],
      "text-size": 12,
    },
  })

  map.addLayer({
    id: "unclustered-point",
    type: "symbol",
    source: "mountains",
    filter: ["!", ["has", "point_count"]],
    layout: {
      "icon-image": ["image", "mountain_15"],
      "icon-overlap": "cooperative",
      // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // with three steps to show different marker sizes based on mountain elevation:
      //   * icon-size of 1 when elevation <= 500
      //   * icon-size of 1.25 when elevation >= 500 && < 1500
      //   * icon-size of 1.5 when elevation >= 1500
      "icon-size": [
        "step",
        ["get", "elev"],
        1,
        501,
        1.25,
        1500,
        1.5,
      ],
      "text-field": ["get", "name"],
      "text-size": 11,
      "text-font": [
        "Open Sans Semibold",
        "Arial Unicode MS Bold",
      ],
      "text-offset": [0, 1.25],
      "text-anchor": "top",
    },
  })

  // inspect a cluster on click
  map.on(
    "click",
    "clusters",
    (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["clusters"],
      })
      const source = map.getSource("mountains") as GeoJSONSource
      source.getClusterExpansionZoom(
        features[0].properties.cluster_id,
        (err, zoom) => {
          if (err) return

          if ("coordinates" in features[0].geometry) {
            map.easeTo({
              center: features[0].geometry.coordinates as LngLatLike,
              zoom: zoom!!,
            })
          }
        },
      )
    })

  // show mountain details on hover
  const mountainInfoPopup = new Popup({
    closeButton: false,
    closeOnClick: false,
  })

  // When a click event occurs on a feature in
  // the unclustered-point layer, open a popup at
  // the location of the feature, with
  // description HTML from its properties.
  map.on(
    "mouseenter",
    "unclustered-point",
    (e) => {
      map.getCanvas().style.cursor = "pointer"

      const feature = e.features!![0]
      if ("coordinates" in feature.geometry) {
        const coordinates: number[] = feature.geometry.coordinates.slice() as number[]

        // Ensure that if the map is zoomed out such that
        // multiple copies of the feature are visible, the
        // popup appears over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }

        const props = feature.properties
        const name = props?.name
        const elevation = props?.elev
        const prominence = props?.prom
        const provinces = JSON.parse(props?.prov)
        const regions = JSON.parse(props?.region)

        mountainInfoPopup
          .setLngLat(coordinates as LngLatLike)
          .setHTML(
            "<strong>" + name + "</strong>"
            + "<p>"
            + "Elevation: " + elevation + "m" + "<br/>"
            + "Prominence: " + prominence + "m" + "<br/>"
            + "Province: " + provinces.join(", ") + "<br/>"
            + "Region: " + regions.join(", ") + "<br/>"
            + "</p>")
          .addTo(map)
      }
    })

  map.on(
    "mouseleave",
    "unclustered-point",
    () => {
      map.getCanvas().style.cursor = ""
      mountainInfoPopup.remove()
    })

  map.on(
    "mouseenter",
    "clusters",
    () => {
      map.getCanvas().style.cursor = "pointer"
    })

  map.on(
    "mouseleave",
    "clusters",
    () => {
      map.getCanvas().style.cursor = ""
    })

  map.addControl(new NavigationControl({}))
})
