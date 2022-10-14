import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AiOutlinePlusCircle } from 'react-icons/ai'

const BankDeteails = ({ setShowModal }) => {
	return (
		<>
			<div className="mt-6">
				<button onClick={() => { setShowModal('bankDetails') }} className='text-white bg-[#1672DE] px-3 py-2 text-lg font-medium rounded-md'><AddCircleOutlineIcon className='mr-1 mb-1' fontSize='small' />Bank Details</button>

				<div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
					<div className="flex justify-between">
						<h1>Contacts (1)</h1>
						<p><MoreVertIcon /></p>
					</div>

					<div className="flex w-11/12 mt-3 p-1 flex-wrap">
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Account Holder Name</p>
							<p>Pranav</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">IFSC Code</p>
							<p>SBIN0002913</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Account Number</p>
							<p>1237 6658 2986</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Bank Name</p>
							<p>State Bank Of India</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Branch Name</p>
							<p>Naranpura</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Is this your Primary Account </p>
							<p>Yes</p>
						</div>
						
					</div>
				</div>
				<div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
					<div className="flex justify-between">
						<h1>Contacts (1)</h1>
						<p><MoreVertIcon /></p>
					</div>

					<div className="flex w-11/12 mt-3 p-1 flex-wrap">
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Account Holder Name</p>
							<p>Pranav</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">IFSC Code</p>
							<p>SBIN0002913</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Account Number</p>
							<p>1237 6658 2986</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Bank Name</p>
							<p>State Bank Of India</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Branch Name</p>
							<p>Naranpura</p>
						</div>
						<div className="flex flex-col w-1/3 my-2">
							<p className="text-[#637F94] text-sm font-medium">Is this your Primary Account </p>
							<p>Yes</p>
						</div>
						
					</div>
				</div>

				
			</div>
		</>
	)
}

export default BankDeteails