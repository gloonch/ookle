import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import PopUpDetails from './PopUpDetails';


export default function MapLayout() {

    const [markers, setMarkers] = useState([
        {
          title: 'Hello I am the pop up 1',
          latlng: [35.7519, 51.2647],
          description: 'This is the description for testing',
          tags: ['history', 'science', 'personal']
        },
        {
          title: "Hello I am the pop up 2",
          latlng: [35.3519, 51.1647],
          description: 'This is the description for testing',
          tags: ['history', 'science', 'personal']
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
        useMapEvents({
          click(e) {
            setMarkers([...markers,
              {
                latlng: [e.latlng.lat, e.latlng.lng],
                title: 'You clicked here',
                description: 'If you do not submit this marker, It will be erased after a page refresh.',
                tags: []
              }
            ])
          },
        })
      }


  return (
    <div>
      <MapContainer center={[35.7219, 51.3347]} zoom={4} >
        <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            />
            <LocationMarker />
            <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
                {markers.map(marker=>{
                    return <Marker position={marker.latlng} icon={icon}>
                        <Popup>
                          <PopUpDetails 
                                mTitle={marker.title} 
                                mLatlong={marker.latlng} 
                                mDescription={marker.description}
                                mTags={marker.tags}/>
                        </Popup>
                    </Marker>
                })}
            </MarkerClusterGroup>

      </MapContainer>
    </div>
  )
}
