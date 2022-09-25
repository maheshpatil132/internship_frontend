import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import { BsCloudUploadFill } from 'react-icons/bs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const OrderForm = () => {

    const [form1, setForm1] = useState(true)
    const [quantity, setQuantity] = useState('')
    const [pincode, setPincode] = useState('')

    const navigate = useNavigate()

    //functions

    const forward = (e) => {
        e.preventDefault();
        setForm1(!form1)
    }

    const quantity_handle = (e) => {
        setQuantity(e.target.value)
    }


    const pincode_handle = (e) => {
        setPincode(e.target.value)
    }


    const create_order = async (e) => {
        e.preventDefault()
        await axios.post('/new/order', {
            quantity: quantity,
            product: "632c3cde24cfa38779207ec6",
        }).then(() => {
            navigate('/bidding')
        }).catch((error) => { console.log(error); })
    }
    return (
        <div className='px-1 mt-16  '>
            <div className=' rounded flex  order_shadow order_form overflow-hidden relative bg-white '>
                <form action="" onSubmit={forward} className={` ${!form1 && 'left_form'} left-0 transition ease-in-out delay-150  flex flex-col justify-between  py-4 px-6 `}>
                    <div className=' flex items-center gap-4 text-buyer-primary font-medium'>
                        <BsCartFill size={20} />
                        <h1>Order Now</h1>
                    </div>
                    <p className=' text-buyer-text-color '>You can order this product right now by requestion a quote from us </p>
                    <div>
                        <h3 className='mb-1'>Quantity</h3>
                        <div className="input_cover w-full flex gap-4">
                            <div className=' flex-1'>
                                <input onChange={quantity_handle} type="number" value={quantity} placeholder='Enter the Volume' className=' w-full box_shadow outline-none border p-2 px-4' />
                            </div>

                            <div className="flex bg-white box_shadow justify-center border px-3">
                                <select className="form-select 
                                            px-2.5
                                            py-1.5
                                            w-full
                                            text-gray-700
                                            rounded
                                            transition
                                            ease-in-out
                                            outline-none
                                            bg-transparent
                                            ">
                                    <option value="1">kgs</option>
                                    <option value="1">Two</option>
                                    <option value="1">Thre</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h3 className=' mb-1'>Pincode</h3>
                        <div className="input_cover flex flex-1 gap-4">
                            <input required={true} onChange={pincode_handle} type="number" value={pincode} placeholder='Enter Delivery Pincode' className='outline-none w-full box_shadow  border p-2 px-4' />
                        </div>
                    </div>
                    <p className='text-buyer-text-color'>Final Price will be available upon quotes</p>
                    <button className=' button bg-buyer-primary py-2 px-4 rounded text-white'>Request a Quote</button>
                </form>


                {/* second form */}
                <form action="" onSubmit={create_order} className={`  ${form1 && 'right_form'} left-full flex flex-col justify-between gap-1 py-4 px-6`}>
                    <div className=' flex items-center gap-2 text-buyer-primary font-medium'>
                        <IoArrowBackCircleSharp onClick={forward} className='cursor-pointer' size={22} />
                        <h1>Order Now</h1>
                    </div>
                    <p className=' text-buyer-text-color '>You can order this product right now by requestion a quote from us </p>

                    {/* Additional Remarks */}
                    <div className=' flex flex-col gap-1'>
                        <h3>Additional Remarks </h3>
                        <input type="text" placeholder='Enter your Requirements ' className='rounded border py-2 px-2' />
                    </div>

                    {/* upload documents */}
                    <div className=' flex flex-col gap-1'>

                        {/* upload document heading */}
                        <div className=' flex items-center gap-2'>
                            <h1 className=' '>Upload Documents  </h1>
                            <AiFillQuestionCircle size={18} />
                        </div>

                        <div className=' bg-[#1672DE] w-fit flex text-white text-[0.7rem] rounded flex-col gap-2  p-2 items-center justify-center px-2'>
                            <BsCloudUploadFill color='' size={20} />
                            <p className=' '>Upload</p>
                        </div>
                    </div>
                    <p className=' text-buyer-text-color'>Final Price will be available upon quotes</p>
                    <button className=' bg-buyer-primary py-2 text-white rounded-md '>submit</button>
                </form>
            </div>

        </div>
    )
}

export default OrderForm