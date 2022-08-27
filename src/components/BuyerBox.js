import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const BuyerBox = ({color}) => {
  return (
    <div className=' border flex flex-col p-4'>
        <div className="icon_box flex justify-between">
           <h1>icon1</h1>
           <h2>icon-2</h2>
        </div>
        <div className="heading my-2">
        <h1 className=' my-2 text-3xl'>Rs 123456</h1>
        <h2 className=' text-sm font-medium text-buyer-small_heading '>Total Purchase</h2>
        </div>
        <div className={`growth ${color} flex items-center gap-2 mx-auto my-4 border px-4 py-1 rounded-md text-sm`}>
            <span className="span_1">12%</span>
            <span className="span_2">12% from last 1 week</span>
            <span className='icon'>icon</span>
        </div>
        <div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><a href="/" className=' text-buyer-know_more'>Know more</a>
         <BsFillArrowRightCircleFill size={16}/>
        </div>
    </div>
  )
}

export default BuyerBox