import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'

const OnBoardHeader = () => {

    const navigate = useNavigate()
    return (
        <div>
  <div className="flex justify-around px-2  border-b items-center py-2 mb-6 bg-white fixed w-full top-0 z-30">
                <NavLink to={'/'}  className={({ isActive }) => (isActive ? 'active-link' : '')}><img src={logo} alt="" /></NavLink>
                <ul className="flex gap-3 py-2">
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active-link' : '')}><li className="text-[16px] font-[400]  px-2 py-1 text-[#1672DE]">Home</li></NavLink>


                    <li className="text-[16px] font-[400] px-2 py-1">What do we do ? </li>


                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/onboard'}><li className="text-[16px] font-[400] px-2 py-1">Sellers</li></NavLink>


                    <li className="text-[16px] font-[400] px-2 py-1">About Us</li>


                    <button className="bg-[#1672DE] rounded-md text-white text-[18px] font-[700] px-2 py-1  ml-4" onClick={() => { navigate('/login') }}>Sign In</button>
                    <button onClick={() => { navigate('/create') }} className="bg-[#1672DE] rounded-md text-white text-[18px] font-[700] px-2 py-1  ml-4">Join Us</button>
                </ul>

            </div>

        </div>
    )
}

export default OnBoardHeader