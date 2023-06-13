import './App.css';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster'

const map = L.map('map').setView([35.7219, 51.3347], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:''
}).addTo(map);

// add markers
const customMarker = L.icon({
  iconUrl: 'https://img.icons8.com/?size=512&id=OBmVbH2qOGwK&format=png',
  iconSize: [30, 30]
})
// let marker = L.marker([36.7219, 50.3347], {icon: customMarker}).addTo(map)
// let marker2 = L.marker([36.4219, 50.2347], {icon: customMarker}).addTo(map)
// let marker3 = L.marker([36.5219, 50.1347], {icon: customMarker}).addTo(map)


// cluster
const cluster = window.L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<div class="cluster-div">' + cluster.getChildCount() + '</div>'
    })
  }
})

let marker = L.marker([36.7219, 50.3347], {icon: customMarker})
marker.bindPopup('<h3>I am a popup</h3>')
let marker2 = L.marker([36.4219, 50.2347], {icon: customMarker})
let marker3 = L.marker([36.5219, 50.1347], {icon: customMarker})

cluster.addLayer(marker)
cluster.addLayer(marker2)
cluster.addLayer(marker3)
map.addLayer(cluster);

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
