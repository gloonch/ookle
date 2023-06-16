import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
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
        iconSize: [36, 38]
    })


    const createCustomClusterIcon = (cluster)=> {
        return new divIcon({
            html: `<div className='cluster-icon'>${cluster.getChildCount()}</div>`,
            className: 'bg-red-500 text-bold text-lg text-white rounded-3xl',
            iconSize: point(33, 33, true),
        });
    };

    

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click(e) {
            setMarkers([...markers, {geocode: e.latlng, popUp: 'You clicked here'}])
          },
        })
      }


  return (
    <div>
      <MapContainer center={[35.7219, 51.3347]} zoom={4} >
        <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            />
            <LocationMarker />
            <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
                {markers.map(marker=>{
                    return <Marker position={marker.geocode} icon={icon}>
                        <Popup><PopUpDetails /></Popup>
                    </Marker>
                })}
            </MarkerClusterGroup>

      </MapContainer>
    </div>
  )
}
