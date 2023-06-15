import React, { useMemo, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { Icon, divIcon, map, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import PopUpDetails from './PopUpDetails';


export default function MapLayout() {

    const [markers, setMarkers] = useState([
        {
            geocode: [35.7519, 51.2647],
            popUp: "Hello I am the pop up 1"
        },
        {
            geocode: [35.3519, 51.1647],
            popUp: "Hello I am the pop up 2"
        }
    ]); 

    const icon = new Icon({
        iconUrl: require('../images/marker.png'),
        iconSize: [38, 38]
    })


    const createCustomClusterIcon = (cluster)=> {
        return new divIcon({
            html: `<div className='cluster-icon'>${cluster.getChildCount()}</div>`,
            className: 'bg-red-500 text-bold text-lg text-white rounded-3xl',
            iconSize: point(33, 33, true),
        });
    };

    const handleNewMarker = (e)=>{
        console.log()
        const {markers} = markers;
        markers.push({geocode: e.latlng, popUp: "Dropped marker"})
        setMarkers({markers});
    }


  return (
    <div>
      <MapContainer onClick={handleNewMarker} center={[35.7219, 51.3347]} zoom={13} >
        <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            />
            {/* <MapConsumer>
                {(map)=>{
                    map.on('click', (e)=>{
                        const {lat, lng} = e.latlng;
                        L.marker([lat, lng], {icon}).addTo(map);
                    })
                    return null;
                }}
            </MapConsumer> */}
        
            <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
                {markers.map(marker=>{
                    return <Marker position={marker.geocode} icon={icon}>
                        {/* <Popup>{marker.popUp}</Popup> */}
                        <Popup><PopUpDetails /></Popup>
                    </Marker>
                })}
            </MarkerClusterGroup>

      </MapContainer>
    </div>
  )
}
