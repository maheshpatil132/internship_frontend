import React, { useEffect, useState } from 'react'
import Address from '../../components/Address'
import Header from '../../components/Header'
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import clogo from '../../images/img.png'
import Contact from '../../components/Contact';
import ClearIcon from '@mui/icons-material/Clear';
import BankDeteails from '../../components/BankDeteails';
import AddredPopUp from '../../components/AddredPopUp';
import ContactPopUp from '../../components/ContactPopUp';
import BankDetailsPopup from '../../components/BankDetailsPopup';
import EditName from '../../components/EditName';
import Company_description from './Company_description'
import { Axios } from '../../components/Axios';
import { useParams } from 'react-router-dom'



const Profile = () => {
	const [value, setValue] = useState(0)
	const [user, setUser] = useState()
	const [showModal, setShowModal] = React.useState(false);
	const { id } = useParams()
	const {role} = useParams()


	useEffect(() => {

          
		const getdata = async()=>{
			 
			

				await Axios.get(`/${role}/${id}`).then((res)=>{
					if(role==='buyer'){

						setUser(res.data.buyer)
					}
					if(role==="seller"){
						setUser(res.data.seller)
					}
					
				}).catch((error)=>{
					console.log(error);
				})
	
			
		}


     getdata()
  
		
	}, [])

	const handletabs = (e, val) => {
		setValue(val)
	}

	return (
		<div className='flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen'>
			<Header />

			<div className="flex gap-4 border py-6 border-transparent border-b-2 border-b-[#004AA1]">
				<img src={clogo} alt="" className="h-[123px]  w-[123px]" />
				<div className="flex flex-col w-full gap-3">
					<div className="flex justify-between">
						<h1 className="text-[28px] font-[500]">{ user && user.companyName}</h1>
						<button onClick={() => setShowModal('editName')} className='text-white bg-[#004AA1] w-24 h-10 px-3 rounded-md mt-2 mr-3'><BorderColorIcon className='mb-1' fontSize='small' /><span className='mx-2'>Edit</span></button>
					</div>
					<div className="flex gap-3">
						<p className="text-[#637F94] text-[14px] font-[400]">
							{ user && user.employees ? user.employees : "-"}
						</p>
						<hr className="rotate-90 text-[#6d869a]  w-[20px] mt-2 border-20" />
						<p className="text-[#637F94] text-[14px] font-[400]">
							{ user && user.Category ? user.Category : "-"}
						</p>
						<hr className="rotate-90 text-[#6d869a]  w-[20px] mt-2 border-20" />
						<p className="text-[#637F94] text-[14px] font-[400]">
							{ user && user.Area ? user.Area : "-"}
						</p>
					</div>
					<p className="text-[#00212F] text-[16px] font-[400] w-[60%]">
						{ user && user.about ? user.about : "-"}
						{/* <a href="#" className="text-[blue] font-[600]">
							Read More
						</a> */}
					</p>
				</div>
			</div >




			<div className="mx-auto flex flex-col justify-center border border-transparent border-b-2 border-b-[#004AA1] p-2">
				<div className="flex justify-between">
					<div className="flex w-3/4">
						<div className="flex flex-col w-1/3 my-3">
							<p className='text-[#637F94] text-sm font-medium'>category</p>
							<p>{user && user.Category ? user.Category : "-"}</p>
						</div>
						<div className="flex flex-col w-1/3 my-3">
							<p className='text-[#637F94] text-sm font-medium'>CIN Number</p>
							<p>{user && user.cin ? user.cin : "-"}</p>
						</div>
						<div className="flex flex-col w-1/3 my-3">
							<p className='text-[#637F94] text-sm font-medium'>GST Number</p>
							<p>{user && user.gst ? user.gst : "-"}</p>
						</div>
					</div>
				</div>

				<div className="flex w-3/4 flex-wrap mb-5">
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Company owner name</p>
						<p>{user && user.name ? user.name : "-"}</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Owners Contact Number</p>
						<p>{user && user.mobile ? user.mobile : "-"}</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Warehousing Capacity</p>
						<p>{user && user.capacity ? user.capacity : "-"}</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>Email ID</p>
						<p>{user && user.email ? user.email : "-"}</p>
					</div>
					<div className="flex flex-col w-1/3 my-3">
						<p className='text-[#637F94] text-sm font-medium'>LinkedIn ID</p>
						<p>{user && user.linkedin ? user.linkedin : "-"}</p>
					</div>
				</div>
			</div>


			<Tabs value={value} onChange={handletabs} >
				<Tab label='Address (2)' />
				<Tab label='Bank Details' />
				<Tab label='Contacts' />
				{user === 'seller' ?
					<Tab label='Store Front' />
					: ""
				}
			</Tabs>


			{/* modal code */}
			{
				showModal ? (
					<>
						<div
							className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						>
							<div className="relative w-auto  my-6 mx-auto max-w-3xl">
								{/* content */}
								{showModal === "address" && <AddredPopUp setShowModal={setShowModal} user={user && user.profileAddress} />}
								{showModal === "contact" && <ContactPopUp setShowModal={setShowModal} user={user && user.profileContact} />}
								{user && showModal === "bankDetails" && <BankDetailsPopup setShowModal={setShowModal} user={user.profileBank} />}
								{showModal === 'editName' && <EditName setUser={setUser} setShowModal={setShowModal} user={user && user} />}

							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null
			}


			<div className=' mt-16'>
				{value === 0 &&
					<Address setShowModal={setShowModal} user={ user && user.profileAddress} />}
				{
					value === 2 &&
					<Contact setShowModal={setShowModal} user={ user && user.profileContact} />
				}
				{
					value === 1 &&
					<BankDeteails setShowModal={setShowModal} user={ user && user.profileBank} />
				}
				{
					value === 3 &&
					<Company_description />
				}
			</div>
		</div >
		
	)
}

export default Profile