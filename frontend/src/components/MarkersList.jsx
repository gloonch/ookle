import React from 'react'

export default function MarkersList({markers}) {
  return (
    <div style={{position: 'absolute', overflowY:'scroll', width: '22%', height: 700,top: '5%', left: 0, marginLeft: '36%', marginRight: '50%', zIndex: 10000, backgroundColor: '#f5f5f7a9'}} className='rounded-3xl flex flex-col items-center space-y-4 p-6' >
        <input type='text' className='rounded-3xl border-slate-400 border-2 p-2 w-full text-lg placeholder:text-lg' placeholder='Search your target marker here'  />
        {markers.map((marker) =>{ 
            return (
                <div className='bg-slate-300 p-4 w-full rounded-3xl items-start max-h-100'>
                    <p className='text-left text-lg'>{marker.title}</p>
                    <p className='text-left max-h-50'>{marker.description} </p>
                    <p className='text-right '>{marker.tags}</p>
                </div>  
        )})}
    </div>
  )
}
