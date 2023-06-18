import React from 'react'
const myMarkers = require('../images/myMarkers.png');
const profile = require('../images/profile.png');
const markersList = require('../images/markersList.png');

export default function Navbar({onSearchClicked, onMarkersClicked, onProfileClicked}) {
  return (
    <div disabled style={{position: 'absolute', width: '240px', height: 70, top: '80%', left: 0, marginLeft: '42%', marginRight: '50%', zIndex: 10000, backgroundColor: '#f5f5f7'}}
        className='flex flex-row space-x-5 pt-2 pb-2 justify-center rounded-3xl'>
        <img src={myMarkers} alt='my markers' className='p-2 rounded-2xl text-slate-500 text-md' onClick={onSearchClicked} />
        <img src={markersList} alt='markers list' className='p-2 rounded-2xl text-slate-500 text-md' onClick={onMarkersClicked} />
        <img src={profile} alt='profile' className='p-1 rounded-2xl text-slate-500 text-md' onClick={onProfileClicked}/>
    </div>
  )
}
