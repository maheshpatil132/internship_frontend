import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import img from '../../../images/Vector.png'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

export default function Quoto(props) {
  const location = useLocation()
  const [price, setPrice] = useState()

  // const id = location.state.id
  // console.log(id)

  // const giveprice = (id) => {
  //   axios.put(`/seller/quote/${id}`, {
  //     kimat: price,
  //   })
  // }

  return (
    <div className="w-[933px] h-[365px] flex bg-[#F6F6F6] b m-auto ">
   <CancelIcon className='absolute right-0 top-0 ' />
      <div className="w-[50%] left ">
        <div className="">
          <h2 className="text-[28px]  text-2xl ml-8 pt-8 font-[500]">
            Quoto Your Price
          </h2>
          <p className="text-[#637F94] font-[400] text-[16px] text-2xl ml-8 mt-2">
            Let the buyer know about the price that are willing to charge for
            the Product{' '}
          </p>
        </div>

        <div className="w-[418px] h-[52px]  flex ml-8 mt-4">
          <div className="text-center  flex-1 shadow-2xl">
            <CurrencyRupeeIcon className="  h-full mt-3" />
          </div>
          <input
            type={Number}
            placeholder="Enter The Amount"
            className="bg-white w-[362px] outline-none shodow-xl text-center "
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          // onClick={() => giveprice(id)}
          className="w-[156px] h-[52px] bg-[#1672DE] ml-8 text-[16px] font-[600] mt-10 text-[#F6F6F6]"
        >
          Quoto Now
        </button>
      </div>
      <div className="right">
        <div className="pt-8 ml-9">
          <h2 className="text-[16px] font-[600] text-[#00212F]">
            Buyer's Remarks
          </h2>
          <p className="text-[#637F94] text-[14px] font-[400] mt-3">
            Buyer’s Remarks Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum dui, sed id convallis rutrum. Arcu dolor imperdiet
            ipsum amet ut. Cursus mattis fringilla ut urna malesuada sagittis
            tortor. Aliquam molestie pellentesque dui, tincidunt ut fames
            egestas.
          </p>
        </div>
        <div className="mt-9">
          <h2 className="text-[16px] font-[600] ml-8">Documents</h2>
        </div>
        <div className="flex justify-evenly mt-3">
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
        </div>
      </div>
    </div>
  )
}