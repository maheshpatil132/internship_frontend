import React from 'react'
import SellerBidBox from './SellerBidBox'

const SellerBid = () => {
  return (
    <div className=' flex flex-col gap-3'>
       <h1>Latest Enquries </h1>
       <div className="brid_box grid grid-cols-3 gap-6 box_shadow">
           <SellerBidBox/>
           <SellerBidBox/>
           <SellerBidBox/>
       </div>
    </div>
  )
}

export default SellerBid