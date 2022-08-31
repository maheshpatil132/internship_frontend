import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
const Box = () => {
  return (
    <div>
        <div className=' text-sm flex flex-col gap-2 bg-buyer-primary box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 text-white'>
            <div className=' flex justify-between'>
                 <h1>Live</h1>
                 <MdKeyboardArrowRight/>
            </div>
            <h1 className=' text-2xl font-bold '>15,000</h1>
        </div>
    </div>
  )
}

export default Box