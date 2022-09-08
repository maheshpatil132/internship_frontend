import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'

import { NavLink } from 'react-router-dom'
const Navbar = ({ user }) => {
  return (
    <div className='navbar  h-screen flex flex-col justify-between text-base px-2'>
      <nav className=' mt-24 text-[#637F94]'>
        <div>
          <NavLink to={'/'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
            <div className='flex gap-6 items-center'>
              <AiOutlineHome size={18} />
              Home
            </div>
            <MdKeyboardArrowRight size={18} />
          </NavLink>


          {/* buyer's navbar links */}
          {

            user === 'buyer' &&
            <>
              <NavLink to={'/bidding'} className='flex cursor-pointer dash_menu_li p-3 px-5 rounded-lg  items-center justify-between  '>
                <div className='flex gap-6 items-center'>
                  <MdPayment size={18} />
                  Bidding
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <NavLink to={'/buyerorder'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <AiOutlineMenuUnfold size={18} />
                  Order History
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>


              <NavLink to={'/Track'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <FaTruck size={18} />
                  Track Shipment
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>



              <NavLink to={'/Payment'} className={`flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between`}>
                <div className='flex gap-6 items-center'>
                  <FaTruck size={18} />
                  Payment
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

            </>

          }

          {/* seller's navbar links */}
          {

            user === 'seller' &&
            <>
              <NavLink to={'/enqires'} className='flex cursor-pointer dash_menu_li p-3 px-5 rounded-lg  items-center justify-between  '>
                <div className='flex gap-6 items-center'>
                  <MdPayment size={18} />
                  Enquries
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <NavLink to={'/sellerorder'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <AiOutlineMenuUnfold size={18} />
                  Order History
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>


              <NavLink to={'/Payment'} className={`flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between`}>
                <div className='flex gap-6 items-center'>
                  <FaTruck size={18} />
                  Payment
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>
            </>
          }


          {/* admin routes */}

          {
            user === 'admin' &&
            <>
              <div className=' flex  dash_menu_li  cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                <MdPayment size={18} />
                <ul className=' list-disc flex-1 list-inside'>
                  <div className=' flex justify-between'>
                    <h1>Rfqs</h1>
                    <RiArrowDownSFill size={18} />
                  </div>
                  <li>One</li>
                  <li>two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>

              <div className=' flex  dash_menu_li  cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                <MdPayment size={18} />
                <ul className=' list-disc flex-1 list-inside'>
                  <div className=' flex justify-between'>
                    <h1>buyer</h1>
                    <RiArrowDownSFill size={18} />
                  </div>
                  <li>One</li>
                  <li>two</li>
                </ul>
              </div>

              
              <div className=' flex  dash_menu_li  cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                <MdPayment size={18} />
                <ul className=' list-disc flex-1 list-inside'>
                  <div className=' flex justify-between'>
                    <h1>seller</h1>
                    <RiArrowDownSFill size={18} />
                  </div>
                  <li>One</li>
                  <li>two</li>
                </ul>
              </div>

              
              <div className=' flex  dash_menu_li  cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                <MdPayment size={18} />
                <ul className=' list-disc flex-1 list-inside'>
                  <div className=' flex justify-between'>
                    <h1>products</h1>
                    <RiArrowDownSFill size={18} />
                  </div>
                  <li>One</li>
                  <li>two</li>
                  <li>three</li>

                </ul>
              </div>
            </>
          }
        </div>
      </nav>
      <div className=' gap-5 my-6 flex flex-col justify-center'>

        
        <div className="credit flex flex-col space-y-6  px-6 ">
{  user !== 'admin' &&
          <button className=' w-full dash_button border px-3 py-3 rounded '>Get Credit Now!</button>
          }
          <hr className='border-b border-gray-300' />
        </div>
        <div className='flex flex-col mx-auto  w-fit'>
          <span className=''>Having issue? </span><a href="/contact" className=' text-code-dash_board_primary underline capitalize'>contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar