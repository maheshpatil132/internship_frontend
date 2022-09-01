import React from 'react'
import { BsCartFill } from 'react-icons/bs'

const OrderForm = () => {




    //functions


    return (
        <div className='px-1 mt-11  '>
            <div className=' rounded flex  order_shadow order_form overflow-hidden relative bg-white '>
            <form action="" className=' flex flex-col space-y-3 py-4 px-6 '>
                <div className=' flex items-center gap-4 text-buyer-primary font-medium'>
                    <BsCartFill size={20} />
                    <h1>Order Now</h1>
                </div>
                <p className=' text-buyer-text-color '>You can order this product right now by requestion a quote from us </p>
                <div>
                    <h3 className='mb-1'>Quantity</h3>
                    <div className="input_cover w-full flex gap-4">
                        <div className=' flex-1'>
                            <input type="text" placeholder='Enter the Volume' className=' w-full box_shadow outline-none border p-2 px-4' />
                        </div>

                        <div className="flex box_shadow justify-center border px-3">
                            <select className="form-select 
                                            px-2.5
                                            py-1.5
                                            w-full
                                            font-normal
                                            text-gray-700
                                            rounded
                                            transition
                                            ease-in-out
                                            outline-none
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
                        <input type="text" placeholder='Enter Delivery Pincode' className='outline-none w-full box_shadow  border p-2 px-4' />
                    </div>
                </div>
                <p className='text-buyer-text-color'>Final Price will be available upon quotes</p>
                <button className=' button bg-buyer-primary py-2 px-4 rounded text-white'>Request a Quote</button>
            </form>

            <form action="" className=' right_form left-full flex flex-col space-y-3 py-5 px-6  text-sm'>
            <div className=' flex items-center gap-4 text-buyer-primary font-medium'>
                    <BsCartFill size={20} />
                    <h1>Order Now</h1>
                </div>
            </form>
            </div>

        </div>
    )
}

export default OrderForm