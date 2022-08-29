import React from 'react'

const SellerBidBox = () => {
    return (
        <div className=' bg-white border p-4 flex flex-col gap-4 text-sm '>
            <span className=' text-buyer-primary'><a href="/">#5234234</a></span>
            <h1 className=' font-semibold text-seller-heading text-2xl'>Apixaban</h1>
            <div className="decr_box flex gap-6">
                <div className="first">
                    <p className=' my-2  text-buyer-text-color font-medium'>Quantity</p>
                    <p className=''>3 MT</p>
                </div>
                <div className="second ">
                    <p className='my-2 text-buyer-text-color font-medium'>HS CODE</p>
                    <p className=''>29153100</p>
                </div>
                <div className="third">
                    <p className='my-2   text-buyer-text-color font-medium'>CAS NO.</p>
                    <p className=' '>503612-47-3</p>
                </div>
            </div>
            <div className="decr_box items-end justify-between flex gap-6">
                <div className="first font-medium">
                    <p className=' my-2  text-buyer-text-color '>Time Remaining</p>
                    <div className=' bg-seller-timing_color border border-seller-border_color p-1 rounded px-3 w-fit'>12:00:00</div>
                </div>
                <button className=' rounded-md text-white bg-buyer-primary py-2 px-4'>Quote Now </button>
               
            </div>
        </div>
    )
}

export default SellerBidBox