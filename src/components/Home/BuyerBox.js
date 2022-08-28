import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const BuyerBox = ({color,icon,icon_set}) => {
  return (
    <div className=' border flex flex-col p-4 bg-white rounded'>
        <div className="icon_box flex justify-between">
           <img  className={`${icon_set}`} src={icon} alt="" srcset="" />
           
        </div>
        <div className="heading my-2">
        <h1 className=' my-2 text-2xl'>Rs 123456</h1>
        <h2 className=' text-sm font-medium text-buyer-small_heading '>Total Purchase</h2>
        </div>
        <div className={`growth ${color} flex items-center w-full gap-2 mx-auto my-4 border px-4 py-1 rounded-md text-sm`}>
            <span className="span_1">12%</span>
            <span className="span_2">12% from last 1 week</span>
            <icon_2/>
        </div>
        <div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><a href="/" className=' text-buyer-know_more'>Know more</a>
         <BsFillArrowRightCircleFill size={16}/>
        </div>
    </div>
  )
}

export default BuyerBox