import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'

import { NavLink } from 'react-router-dom'
const Navbar = ({ user }) => {

  // states
  const [rfq_li, setRfq_li] = useState(false)
  const [buyer_li, setBuyer_li] = useState(false)
  const [seller_li, setSeller_li] = useState(false)
  const [order_li, setOrder_li] = useState(false)

  const [product_li, setProduct_li] = useState(false)

  return (
    <div className='navbar   h-screen overflow-y-scroll flex flex-col justify-between text-base px-2'>
      <nav className=' mt-24'>
        <div>
          {user !== 'admin' &&
            <NavLink to={'/dashboard'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
              <div className='flex gap-6 items-center'>
                <AiOutlineHome size={18} />
                Home
              </div>
              <MdKeyboardArrowRight size={18} />
            </NavLink>

          }
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


              <NavLink to={'/trackshipment'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <FaTruck size={18} />
                  Track Shipment
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>



              <NavLink to={'/arfq'} className={`flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between`}>
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
              <NavLink to={'/rfq'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <FaTruck size={18} />
                  RFQs
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <div>
                <div onClick={() => { setBuyer_li(!buyer_li)}} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>buyer</h1>
                  </div>
                  <RiArrowDownSFill className={`${buyer_li && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>

                  {
                    buyer_li &&
                    <>
                      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/create'}><li>Add New Buyer</li></NavLink>
                      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/profile'}><li>Buyer List</li></NavLink>
                    </>
                  }

                </ul>
              </div>


        
              <div>
                <div onClick={() => {setSeller_li(!seller_li)}} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>seller</h1>
                  </div>
                  <RiArrowDownSFill className={`${seller_li  && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>
                  {seller_li && <>
                    <li>Add New Seller</li>
                    <li>Sellers List</li>
                  </>
                  }
                </ul>
              </div>


              
              <div>
                <div onClick={() => {setProduct_li(!product_li)}} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>product</h1>
                  </div>
                  <RiArrowDownSFill className={`${product_li  && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>
                {product_li && <>
                    <li>Add Product</li>
                    <li>Categories</li>
                    <li>Sellers Request</li>
                  </>
                  }
                </ul>
              </div>
              
              <div>
                <div onClick={() => {setOrder_li(!order_li)}} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>orders</h1>
                  </div>
                  <RiArrowDownSFill className={`${order_li  && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>
                  {order_li && <>
                    <li>invoice</li>
                      <li>Payments</li>
                     <li>Track Shipment</li>
                     <li>Issues Raised</li>
                  </>
                  }
                </ul>
              </div>

              
              
            </>
          }
        </div>
      </nav>
      <div className=' gap-5 my-6 flex flex-col justify-center'>


        {user !== 'admin' &&
          <>
            <div className="credit flex flex-col space-y-6  px-6 ">
              <button className=' w-full dash_button border px-3 py-3 rounded '>Get Credit Now!</button>

              <hr className='border-b border-gray-300' />
            </div>
            <div className='flex flex-col mx-auto  w-fit'>
              <span className=''>Having issue? </span><a href="/contact" className=' text-code-dash_board_primary underline capitalize'>contact us</a>
            </div>

          </>
        }
      </div>
    </div>
  )
}

export default Navbar