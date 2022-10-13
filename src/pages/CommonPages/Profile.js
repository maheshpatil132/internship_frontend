import React, { useState } from 'react'
import Address from '../../components/Address'
import Header from '../../components/Header'
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import clogo from '../../images/img.png'


import Contact from '../../components/Contact';
import BankDeteails from '../../components/BankDeteails';
import AddredPopUp from '../../components/AddredPopUp';
import ContactPopUp from '../../components/ContactPopUp';


const Profile = () => {

	const [value, setValue] = useState(0)
    const [showModal, setShowModal] = React.useState(false);


	const handletabs = (e, val) => {
		setValue(val)
	}

	return (
		<div className='flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen '>
			<Header />

			<div className="flex gap-4 justify-center border py-6 border-transparent border-b-2 border-b-[#1672DE]">
				<img src={clogo} alt="" className="h-[123px]  w-[123px]" />
				<div className="flex flex-col gap-3">
					<h1 className="text-[28px] font-[500]">Sasol Pvt Ltd</h1>
					<div className="flex gap-3">
						<p className="text-[#637F94] text-[14px] font-[400]">
							50 employees
						</p>
						<hr className="rotate-90 text-[#6d869a]  w-[20px] mt-2 border-20" />
						<p className="text-[#637F94] text-[14px] font-[400]">
							Agricultural
						</p>
						<hr className="rotate-90 text-[#6d869a]  w-[20px] mt-2 border-20" />
						<p className="text-[#637F94] text-[14px] font-[400]">
							Vatva, Ahmedabad
						</p>
					</div>
					<p className="text-[#00212F] text-[16px] font-[400] w-[60%]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						quis ipsum ut augue velit arcu. Sed sed egestas.{' '}
						<a href="#" className="text-[blue] font-[600]">
							Read More
						</a>
					</p>
				</div>
			</div>
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

				<div className="flex w-3/4 flex-wrap mb-5">
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


			<Tabs value={value} onChange={handletabs} >
				<Tab label='Address (2)' />
				<Tab label='Bank Details' />
				<Tab label='Contacts' />
				<Tab label='Store Front' />
			</Tabs>



			{/* modal code */}
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative w-auto  my-6 mx-auto max-w-3xl">
							{/* content */}

							<AddredPopUp setShowModal={setShowModal} />
							{/* <ContactPopUp setShowModal={setShowModal} /> */}

						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}


			<div className=' mt-16'>
				{value === 0 &&
					<Address setShowModal={setShowModal} />}
				{
					value === 2 &&
					<Contact setShowModal={setShowModal} />
				}
				{
					value === 1 &&
					<BankDeteails setShowModal={setShowModal} />
				}
			</div>
		</div>
	)
}

export default Profile