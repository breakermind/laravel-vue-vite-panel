<script>
import { Loader } from "@googlemaps/js-api-loader"
import { useAuthStore } from '@/stores/auth.js'
import TopMenu from "./TopMenu.vue";

export default {
  name: "map-view",
  components: {
    TopMenu,
  },
  data() {
    return {
      api_key: '',
      map: null,
      poly: null,
      polygon: null,
      lat: 24.886,
      lng: -70.268,
      scrollwheel: true,
      zoom: 5,
      disableDefaultUI: false,
      created_polygon: '',
    }
  },
  mounted: function() {
    this.loadMap()
  },
  methods: {
    loadMap() {
      let draw = null

      const loader = new Loader({
        apiKey: this.api_key,
        version: "weekly",
        libraries: [
          'drawing',
          'geometry'
        ],
      })

      loader.load().then(() => {
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: this.lat, lng: this.lng },
          scrollwheel: this.scrollwheel,
          zoom: this.zoom,
          disableDefaultUI: false,
        })

        this.marker = new google.maps.Marker({
          position: { lat: this.lat, lng: this.lng },
          map: this.map
        });

        this.polygon = [
          { lat: 25.774, lng: -80.19 },
          { lat: 18.466, lng: -66.118 },
          { lat: 32.321, lng: -64.757 },
          { lat: 25.774, lng: -80.19 },
        ];

        this.poly = new google.maps.Polygon({
          paths: this.polygon,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        });

        this.poly.setMap(this.map);

        // Contains poly
        const isContain = (val, e) => {
          if(val) {
            alert("Wooow")
            console.log('Contain location', e.latLng)
          } else {
            alert("Pooow")
            console.log('Dont contain location', e.latLng)
          }
        }

        // Map event
        google.maps.event.addListener(this.map, "click", (e) => {
          const contain = google.maps.geometry.poly.containsLocation(e.latLng, this.poly) ? true : false;
          isContain(contain,e)
        })

        // Polygon event
        google.maps.event.addListener(this.poly, "click", (e) => {
          const contain = google.maps.geometry.poly.containsLocation(e.latLng, this.poly) ? true : false;
          isContain(contain,e)
        })

        // Draw, Edit, Delete Polygons
        draw = new google.maps.Data({map: this.map});
        draw.setControls(['Polygon'])
        draw.setDrawingMode("Polygon")
        draw.setStyle({
          editable: true,
          draggable: true,
          strokeColor: "#12bc00",
          fillColor: "#12bc00",
          strokeOpacity: 0.7,
          strokeWeight: 2,
          fillOpacity: 0.5,
          zIndex: 0
        });

        // Create
        draw.addListener('addfeature', function(e) {
          updatePolygon(e)
          updatePoly(e)
          draw.forEach((p) => {
            if(p != e.feature) {
              draw.remove(p);
            }
          })
        });

        // Drag
        draw.addListener('dragend', function(e) {
          updatePolygon(e)
        })

        // Edit
        draw.addListener('setgeometry', function(e) {
          updatePolygon(e)
        })

        // Delete
        draw.addListener('rightclick', function(e) {
          draw.remove(e.feature);
        })

        function updatePolygon(e)
        {
          let GeoJSON = {"type": "Polygon", "coordinates": []}
          let obj = e.feature.getGeometry()
          let arr = []
          obj.forEachLatLng((p) => {
            arr.push([p.lng(), p.lat()])
          })
          arr.push(arr[0])
          GeoJSON.coordinates.push(arr);
          let el = document.getElementById("poly")
          if(el) {
            el.value = JSON.stringify(GeoJSON)
          } else {
            console.log('Add <input id="poly" name="poly"> for polygon')
          }
        }

        /*

        // Drawing Polygons with manager
        draw = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.POLYGON,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.POLYGON,
            ],
          },
          markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
          polygonOptions: {
            editable: true,
            draggable: true,
            strokeColor: "#12bc00",
            fillColor: "#12bc00",
            strokeOpacity: 0.7,
            strokeWeight: 2,
            fillOpacity: 0.5,
            zIndex: 0
          }
        });
        draw.setMap(this.map);
        google.maps.event.addListener(draw, 'polygoncomplete', function(poly) {
          console.log("Created poly", poly.getPath())
          google.maps.event.addListener(poly, 'mouseup', function (event) {
              console.log('Poly changed', event.getPath());
              let coordinates = [];
              event.getPath().forEach(function(latLng) {
                coordinates.push(latLng);
              });
              console.log("Created poly len", coordinates)
              document.getElementById('poly').value = JSON.stringify({'coordinates': coordinates})
          });
        });

        google.maps.event.addListener(draw, 'overlaycomplete', function(event) {
          if (event.type == 'polygon') {
            let coordinates = [];
            event.overlay.getPath().forEach(function(latLng) {
              coordinates.push(latLng);
            });
            console.log("Created poly len", coordinates)
            document.getElementById('poly').value = JSON.stringify({'coordinates': coordinates})
            // draw.setDrawingMode(null);
          }
        });

        */

      })
    },
  }
}
</script>

<template>
  <main>
    <TopMenu />

    <div class="content">
      <h1> {{ $t('page.Map') }} </h1>
      <div id="map"></div>
      <textarea id="poly" v-model="created_polygon"></textarea>
    </div>
  </main>
</template>

<style scoped>
#map {width: 100%; height: 400px;}
#poly {margin-top: 30px;}
</style>