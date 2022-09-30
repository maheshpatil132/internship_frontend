import React, { useState } from 'react'
import Address from '../../components/Address'
import Header from '../../components/Header'
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Contact from '../../components/Contact';


const Profile = () => {
  
    const [value, setValue] = useState(0)

    const handletabs = (e,val) => {
        setValue(val)
    }

  return (
    <div className='flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen '>
        <Header/>
        <div className="mx-auto flex flex-col justify-center border border-transparent border-b-2 border-b-[#1672DE] p-2">
				<div className="flex justify-between">
					<div className="flex w-3/4">
						<div className="flex flex-col w-1/3 my-3">
							<p className='text-[#637F94] text-sm font-medium'>category</p>
							<p>Agriculture</p>
						</div>
						<div className="flex flex-col w-1/3 my-3">
							<p className='text-[#637F94] text-sm font-medium'>CIN Number</p>
							<p>2135423</p>
						</div>
						<div className="flex flex-col w-1/3 my-3">
							<p className='text-[#637F94] text-sm font-medium'>GST Number</p>
							<p>16454IT95628</p>
						</div>
					</div>

					<button className='text-white bg-[#1672DE] w-24 h-10 px-3 rounded-md mt-2 mr-3'><BorderColorIcon className='mb-1' fontSize='small' /><span className='mx-2'>Edit</span></button>
				</div>

				<div className="flex w-3/4 flex-wrap">
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Company owner name</p>
						<p>Agriculture</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Owners Contact Number</p>
						<p>2135423</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Warehousing Capacity</p>
						<p>2135423</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Email ID</p>
						<p>2135423</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>LinkedIn ID</p>
						<p>2135423</p>
					</div>
				</div>
                </div>
        <Tabs value={value} className={'my-8'} onChange={handletabs} >
            <Tab label='Address (2)' />
            <Tab label='Bank Details'/>
            <Tab label='Contacts'/>
            <Tab label='Store Front'/>
        </Tabs>
       
        <div className=' mt-16'>
           { value===0 &&
            <Address/>}
            {
                value===2 &&
                <Contact/>
            }
        </div>
    </div>
  )
}

export default Profile