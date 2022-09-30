import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import axios from 'axios'

const Create = () => {

	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [password, setPassword] = useState('')


	const email_handle = (e) => {
        setEmail(e.target.value)
	}
	const number_handle = (e) => {
        setNumber(e.target.value)
	}
	const password_handle = (e) => {
        setPassword(e.target.value)
	}

	const submit_form = async(e)=>{
		e.preventDefault();
       await axios.post('/new/buyer',{
		email:email,
		password:password,
		mobile:number
	   })
	}


    useEffect(() => {

		
     
    }, [])
    

  return (
        <section className="h-screen flex-1 bg-slate-200">
				<div className="flex justify-center ">
					<div className="flex bg-white w-3/5  mt-2 rounded-md shadow-md">

						<div className="flex flex-col justify-center w-8/12 p-3">
							<img src={logo} alt="Logo" className='h-14 w-40 mx-auto mb-3'/>
							<p className='text-3xl text-center font-semibold my-1'>Welcome to Maqure</p>
							<p className='mb-5 text-center'>Enter you account details Or <a href="/" className='underline'>Login</a></p>
							<form action="" onSubmit={submit_form}>
							<div className="mb-6 mx-auto">
								<p className='text-sm text-[#667080]'>Email</p>
								<input
								    value={email}
									onChange={email_handle}
									type="Email" required
									className="form-control block w-80 px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="mail@mail.com"
								/>
							</div>

							<div className="mb-6 mx-auto">
								<p className='text-sm text-[#667080]'>Phone Number</p>
								<input
								    value={number}
									onChange={number_handle}

									type='number' required
									className="form-control block w-80 px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="+91 1234467896"
								/>
							</div>
							<div className="mb-6 mx-auto">
								<p className='text-sm text-[#667080]'>Password</p>
								<input
								    value={password}
									onChange={password_handle}
									type="text" required
									className="form-control block w-80 px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="shhh... Its Secret"
								/>
							</div>

							</form>

							<div className="text-center lg:text-left">
								<button
									type="button"
									className="inline-block px-7 py-3 w-3/4 ml-14  bg-[#1672DE] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
									Proceed </button>
							</div>

							<div className="border border-transparent border-b-gray-300 w-3/5 mx-auto mt-8"></div>
							<div className="text-[#637D94] text-center mt-5 text-lg">Want to Sell on Maqure ?</div>
							<NavLink to={'/onboard'} className="text-[#1672DE] font-semibold underline text-center mt-1 text-lg">Become a Seller</NavLink>
						</div>

						<div className="grow-0 shrink-1 md:shrink-0 my-24 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="w-full"
								alt="Sample image"
							/>
						</div>
					</div>
				</div>
			</section>
  )
}

export default Create