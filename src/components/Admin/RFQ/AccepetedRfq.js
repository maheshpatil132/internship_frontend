import React, { useEffect, useState } from 'react'
import updown from "./rfqimg/updown.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import { getallorders } from '../../../actions/OrderActions';


export default function Activerfq() {
  const [bids, setBids] = useState([])


  const { bid } = useSelector(state => state.bid)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getallorders)
    setBids(bid)
  }, [])

  return (
    <div className='flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen'>
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
  <div className="second">
    <div className="flex">
      <p className="flex-1">New RFQs</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>

    <h3>15000</h3>
  </div>
  <div className="second">
    <div className="flex">
      <p className="flex-1">Active RFQs</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>
    <h3>15000</h3>
  </div>
  <div className="first">
    <div className="flex">
      <p className="flex-1">Accepted RFQs</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>
    <h3>15000</h3>
  </div>
  <div className="third">
    <div className="flex">
      <p className="flex-1">RFQs History</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>
    <h3>15000</h3>
  </div>
</div>




<div className="flex  flex-col mt-7">
<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div className="py-2   sm:px-6 lg:px-8">
    <div className="overflow-hidden">
      <table className="min-w-full text-black text-1xl font-normal ">
        <thead className="">
        
        </thead>
        <tbody>

        { bids.filter(bid => bid.quote_status === 'accepted').length > 0 ?
                                        bids.filter(bid => bid.quote_status === 'accepted').map((elem, index) => {
                      return (
          <tr className="border-b h-12 hover:border-b  hover:border-blue-500">
           
            <td className="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
           {elem._id}
            </td>
            <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
            {elem.product.name}
            </td>
            <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
            24/4/2002
            </td>
            <td className="text-sm  rounded-md  font-light px-6 py-4 whitespace-nowrap">
           <p className='bg-[#1FACFB66] px-3 py-2 rounded-md text-center '> In Transit </p>
            </td>
            <td className="text-sm   font-light px-6 py-4 whitespace-nowrap">
            
            
            </td>
          
           <td className="text-sm  font-light  whitespace-nowrap">
         <ChevronRightIcon/>
          
          </td>
          </tr>

)
})

  :

  'no content'

}

        
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>


</div>
    </div>
  )
}
