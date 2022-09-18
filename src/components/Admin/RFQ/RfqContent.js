import React from 'react'

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import updown from "./rfqimg/updown.png";

import Qvotobox from './Qvotobox';
import SearchBox from '../../SearchBox';
import Header from '../../Header';

export default function RfqContent() {
  return (
    <div className='border flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen'>
    <Header/>


 
  <div className=''>
  <div className='flex gap-4 mt-16'>
  <img src={updown} alt="" className='p-3 h-[70px] bg-[#E6F3FF]' />
  <div className='flex flex-col  '>
  <p className='text-[#637F94] text-[20px] font-[400]'>Total RFQs</p>
  <h2 className='text-[48px] font-[600] -mt-3'>15000</h2>
  </div>
  </div>
    <div className="track_mid ">
    <div className="first">
        <div className="flex">
        <p className="flex-1">Preparing</p>
        <ChevronRightIcon className="mt-2 mr-4" />
        </div>

        <h3>15000</h3>
    </div>
    <div className="second">
        <div className="flex">
        <p className="flex-1">Preparing</p>
        <ChevronRightIcon className="mt-2 mr-4" />
        </div>
        <h3>15000</h3>
    </div>
    <div className="third">
        <div className="flex">
        <p className="flex-1">Preparing</p>
        <ChevronRightIcon className="mt-2 mr-4" />
        </div>
        <h3>15000</h3>
    </div>
    <div className="third">
        <div className="flex">
        <p className="flex-1">Delivered</p>
        <ChevronRightIcon className="mt-2 mr-4" />
        </div>
        <h3>15000</h3>
    </div>
    </div>
  </div>


<div className=''>
  <SearchBox/>
  </div>

<div className=' grid grid-cols-3  justify-around gap-6'>
<Qvotobox/>
<Qvotobox/>
<Qvotobox/>
<Qvotobox/>
<Qvotobox/>
<Qvotobox/>
<Qvotobox/>


</div>

    </div>
  )
}