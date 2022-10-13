import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const Address = ({setShowModal}) => {
    return (
        <div >
            <button onClick={()=>{setShowModal('address')}} className='flex items-center gap-4 py-3 px-4 my-8 rounded font-semibold text-lg bg-[#1672DE] text-white'>
                <AiOutlinePlusCircle  size={30} />
                Add Address
            </button>
            <div className=' bg-white p-6 space-y-8 box_shadow rounded'>
                <div className=' flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Address (1)</h1>
                    <BsThreeDotsVertical size={20} className={'cursor-pointer'} />
                </div>
                <div className=' flex gap-6'>
                    <div>
                        <p className=' text-base text-[#637F94] font-semibold'>Address Type</p>
                        <h3 className=' text-[#00212F]'>Office</h3>
                    </div>
                    <div>
                        <p className='  text-base text-[#637F94] font-semibold'>Contact Number</p>
                        <h3 className=' text-[#00212F]'>9874541254</h3>
                    </div>
                    <div >
                        <p className='  text-base text-[#637F94] font-semibold'>Contact Person Name</p>
                        <h3 className=' text-[#00212F]'>Pranav</h3>
                    </div>

                </div>
                <div>
                    <p className='  text-base text-[#637F94] font-semibold'> Address</p>
                    <p className=' text-[#00212F]'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>
            </div>
        </div>
    )
}

export default Address