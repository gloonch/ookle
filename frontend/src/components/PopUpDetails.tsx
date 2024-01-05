import React, { useState } from "react";

export default function PopUpDetails() {
  const [isViewing, setIsViewing] = useState(false);

  const [title, setTitle] = useState("");
  const [latlong, setLatlong] = useState("");
  const [description, setDescrption] = useState("");
  const [user, setUser] = useState("");
  const [tags, setTags] = useState("");

  return (
    <div className="flex flex-col w-300 items-center space-y-3 p-5 rounded-xl">
      {!isViewing && (
        <>
          <div className="flex flex-row items-center justify-between space-x-6">
            <p className="bg-slate-500 rounded-3xl w-10 h-10 text-white">
              user
            </p>{" "}
            {/* TODO: put profile image here */}
            <input
              value={latlong}
              disabled
              type="text"
              placeholder="Latitude & Longitude"
              className="text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full"
              required
            />
          </div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full"
            required
          />
          <input
            onChange={(e) => setDescrption(e.target.value)}
            type="text"
            placeholder="Description"
            className="text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full"
            required
          />
          <input
            onChange={(e) => setTags(e.target.value)}
            type="text"
            placeholder="Tags"
            className="text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-full"
            required
          />
          <div className="flex flex-row items-center justify-between space-x-2">
            <p className="bg-slate-900 rounded-3xl w-10 h-10 text-white">img</p>{" "}
            {/* TODO: put images[]/file[] here ( Should be an array | it can be only 5 items )*/}
            <p className="bg-slate-900 rounded-3xl w-10 h-10 text-white">img</p>
            <p className="bg-slate-900 rounded-3xl w-10 h-10 text-white">img</p>
            <p className="bg-slate-900 rounded-3xl w-10 h-10 text-white">img</p>
            <p className="bg-slate-900 rounded-3xl w-10 h-10 text-white">img</p>
          </div>
          <div className="flex flex-row items-center justify-between space-x-6">
            <input
              type="submit"
              value={"Share"}
              className="text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-200 hover:border-lime-800 hover:border hover:text-lime-800"
            />
            {/* <input type='button' value={'delete'} className='text-white bg-slate-400 rounded-xl p-3 placeholder:text-white placeholder:text-md w-200 hover:border-red-800 hover:border hover:text-red-800' /> */}
          </div>
        </>
      )}
    </div>
  );
}
