import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' bg-code-nav_dash h-screen flex flex-col justify-between px-8'>
        <nav className=' mt-24'>
            <ul className=' space-y-4'>
                <li className=' text-base flex cursor-pointer dash_menu_li bg-white p-3 px-5 rounded-lg  text-code-dash_board_primary items-center justify-start gap-6 hover:bg-slate-100'>
                       <AiOutlineHome size={20}/>
                       <NavLink to={'/home'}>Home</NavLink>
                </li>
                <li className='text-base flex cursor-pointer dash_menu_li bg-white p-3  px-5 rounded-lg text-code-dash_board_primary items-center justify-start gap-6 hover:bg-slate-100'>
                       <AiOutlineHome size={20}/>
                       <NavLink to={'/home'}>Bidding</NavLink>
                </li>
                <li className='text-base flex cursor-pointer dash_menu_li bg-white p-3 px-5 rounded-lg text-code-dash_board_primary items-center justify-start gap-6 hover:bg-slate-100'>
                       <AiOutlineHome size={20}/>
                       <NavLink to={'/home'}>order History</NavLink>
                </li>
                <li className='text-base flex cursor-pointer dash_menu_li bg-white p-3 px-5 rounded-lg text-code-dash_board_primary items-center justify-start gap-6 hover:bg-slate-100'>
                       <AiOutlineHome size={20}/>
                       <NavLink to={'/home'}>Track your shipment</NavLink>
                </li>
                <li className='text-base flex cursor-pointer dash_menu_li bg-white p-3 px-5 rounded-lg text-code-dash_board_primary items-center justify-start gap-6 hover:bg-slate-100'>
                       <AiOutlineHome size={20}/>
                       <NavLink to={'/home'}>Payment</NavLink>
                </li>
            </ul>
        </nav>
        <div className=' gap-7 flex flex-col justify-center'>
        <div className="credit flex flex-col space-y-6 ">
            <button className=' w-full dash_button border px-3 py-3 rounded text-base'>Get Credit Now!</button>
            <hr className='border-b border-code-text-color'/>
        </div>
        <div className='flex flex-col mx-auto mb-3 w-fit'>
        <span className='text-base'>Having issue? </span><a href="/contact" className='text-base text-code-dash_board_primary underline capitalize'>contact us</a>
        </div>
        </div>
    </div>
  )
}

export default Navbar