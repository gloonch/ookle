import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import { Icon, divIcon, latLng, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import PopUpDetails from './PopUpDetails';
import axios from 'axios'
import {BACKEND_URI} from '../configs/constants'

export default function MapLayout() {

    const [markers, setMarkers] = useState([]);

    useEffect(()=>{
      axios.get(BACKEND_URI + 'marker/')
        .then(success => {
          let response = success.data;
          let data = []
          response.map(d => {            
              data.push({
                latlng: d.latlong.split(','),
                title: d.title,
                description: d.description,
                tags: d.tags,
                user: d.user
              });
          })
          setMarkers([...markers, ...data])
        })
        .catch(error=> {
          alert('Something went wrong ' + error)
        })
    }, [null])

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
                {markers.map((marker, index) =>{
                    return <Marker key={index} position={marker.latlng} icon={icon}>
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
