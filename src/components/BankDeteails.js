import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const BankDeteails = () => {
  return (
    <div>
        <button className='flex items-center gap-4 py-3 px-4 my-8 rounded font-semibold text-lg bg-[#1672DE] text-white'>
                <AiOutlinePlusCircle size={30} />
                Bank Details 
            </button>
        <div className=" bg-[#ffff] box_shadow rounded flex flex-col gap-5 p-4 ">
        <h1 className="font-[600] text-[24px]  ">Bank Details (1)</h1>
        <div className='flex gap-3 '>
          <div className='flex flex-col gap-2 w-[200px]' >
            <p className='font-[600px] text-[16px] text-[#637F94]'>Account Holder Name</p>
            <p className='font-[400] text-[20px]'>XYZ Chemicals ltd.</p>
          </div>
          <div className='flex flex-col gap-2 w-[200px]'>
            <p  className='font-[600px] text-[16px] text-[#637F94]'>IFSC Code</p>
            <p className='font-[400] text-[20px]'>SBIN0002913</p>
          </div>
          <div className='flex flex-col gap-2 w-[200px]'>
            <p  className='font-[600px] text-[16px] text-[#637F94]'>Account Number </p>
            <p className='font-[400] text-[20px]'>1237 6658 2986</p>
          </div>
        </div>
        <div className='flex gap-3 '>
        <div className='flex flex-col gap-2 w-[200px]'>
          <p  className='font-[600px] text-[16px] text-[#637F94]'>Bank Name</p>
          <p className='font-[400] text-[20px]'>State Bank Of India</p>
        </div>
        <div className='flex flex-col gap-2 w-[200px]'>
          <p  className='font-[600px] text-[16px] text-[#637F94]'>Branch Name</p>
          <p className='font-[400] text-[20px]'>Naranpura</p>
        </div>
        <div className='flex flex-col gap-2 w-[200px]'>
          <p  className='font-[600px] text-[16px] text-[#637F94]'>Is this your Primary Account  </p>
          <p className='font-[400] text-[20px]'>Yes</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BankDeteails