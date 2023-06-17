import axios from 'axios';
import React, { useState } from 'react'
import { BACKEND_URI } from '../configs/constants';

export default function PopUpDetails({mTitle, mLatlong, mDescription, mTags, mIsCreating}) {
  
  const [isCreating, setIsCreating] = useState(mIsCreating);

  const [title, setTitle] = useState(null);
  const [latlong, setLatlong] = useState(mLatlong);
  const [description, setDescrption] = useState(null);
  const [user, setUser] = useState('gloonch');
  const [tag, setTag] = useState();

  const handleSubmitMarker = ()=>{
    if (title === null || latlong === null || description === null || tag === null ) {
      alert('Please fill all the information.')
    }

    axios.post(BACKEND_URI + 'marker/', {
      title, latlong: `${latlong}`, description, tags: [tag], user
    })
        .then(success => {
          alert('New marker has been dropped.')
          window.location.reload();
        })
        .catch(error => {
          alert('Something went wrong, please try again later. ' + error);
        })
  }

  return (
      !isCreating && (
        <div className='flex flex-col w-full items-center space-y-3  rounded-xl'>
          <div className='flex flex-row items-center justify-between space-x-6'>
            <p className='bg-slate-500 rounded-3xl w-10 h-10 text-white'>user</p> {/* TODO: put profile image here */}
            <input value={mLatlong} disabled type='text' placeholder='Latitude & Longitude' className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full' required />
          </div>
          {/* TODO: see if the marker's user is equal to the current user, then the inputs are not disabled */}
          <input disabled onChange={(e)=> setTitle(e.target.value)} value={mTitle} type='text' placeholder='Title' className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full' required />
          <input disabled onChange={(e)=> setDescrption(e.target.value)} value={mDescription} type='text' placeholder='Description' className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full' required />
          <input disabled onChange={(e)=> setTag(e.target.value)} value={mTags} type='text' placeholder='Tags' className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full' required />
          {/* TODO: put images[]/file[] here ( Should be an array | it can be only 5 items )*/}
          {/* <div className='flex flex-row items-center justify-between space-x-2'>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
          </div> */}
          <div className='flex flex-row items-center justify-between space-x-6'>
            {/* TODO: check if this marker belongs to the current user then they could update or delete it */}
            {/* <input type='submit' value={'Update'} className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-200 hover:border-lime-800 hover:border hover:text-lime-800' /> */}
            {/* <input type='button' value={'delete'} className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-200 hover:border-red-800 hover:border hover:text-red-800' /> */}
          </div>
        </div>
      ) ||
      isCreating && (
        <div className='flex flex-col w-300 items-center space-y-3 p-5 rounded-xl'>
          <div className='flex flex-row items-center justify-between space-x-6'>
            <p className='bg-slate-500 rounded-3xl w-10 h-10 text-white'>user</p> {/* TODO: put profile image here */}
            <input value={mLatlong} disabled type='text' placeholder='Latitude & Longitude' className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full' required />
          </div>
          <input onBlur={(e)=> setTitle(e.target.value)} type='text' placeholder='Title' className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full' />
          <textarea onBlur={(e)=> setDescrption(e.target.value)} type='text' height={20} placeholder='Description' className='text-white h-20 bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full' />
          <select onBlur={(e)=> setTag(e.target.value)} type='text' placeholder='Tags' className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full'>
            <option disabled>Select tags</option>
            <option>Historic</option>
            <option>Photogragy Place</option>
            <option>Vintage</option>
          </select>
          {/* TODO: put images[]/file[] here ( Should be an array | it can be only 5 items )*/}
          {/* <div className='flex flex-row items-center justify-between space-x-2'>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
            <p className='bg-slate-900 rounded-3xl w-10 h-10 text-white'>img</p>
          </div> */}
          <div className='flex flex-row items-center justify-between space-x-6'>
            <input type='submit' onClick={handleSubmitMarker} value={'Share'} className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-200 hover:border-lime-800 hover:border hover:text-lime-800' />
          </div>
        </div>
      )
  )
}
