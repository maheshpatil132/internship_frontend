import React from 'react'
import map from '../images/map.png'
const Map = () => {
  return (
    <div className='flex items-center px-20 py-10 justify-around bg-[#00212F] text-white'>
      <div className=" flex-1 space-y-7">
        <h1 className=' font-semibold text-3xl'>Skyrocket your Reach Across the world with Maqure! </h1>
        <p className=' text-base text-[#FBFBFB]'>Request a demo to learn how Maqure makes it easier than ever for you to market, sell and transact online.
        </p>
        <button className=' p-2 px-4 w-[345px] rounded-md bg-white'> <span className=' font-semibold text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Request A Call </span></button>
      </div>
      
      <div className=" w-[33rem]">
        <img src={map} alt="" />
      </div>
    </div>
  )
}

export default Map