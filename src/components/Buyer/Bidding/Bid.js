import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { IoEllipsisVertical } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import { GrDocumentDownload } from 'react-icons/gr'

import img from '../../../images/structure.png'

const Bid = () => {

    const [know_more, setKnow_more] = useState(false)

    const show = () =>{
      setKnow_more(!know_more)
    }

    return (
        <div className=' bg-white p-6 border justify-between flex-col flex box_shadow rounded'>

            <div className='  justify-between flex '>

                {/* left div start */}
                <div className=' flex flex-1'>
                    <img src={img} className='' alt="this is img" />
                    <div className="left flex flex-1 flex-col gap-12 text-sm ">
                        <h1 className=' text-2xl text-buyer-small_heading font-semibold'>Apixaban</h1>
                        {/* <div className=' bg-buyer-button_1 p-1 rounded px-3 w-fit'>Bidding Ended</div> */}
                        <div className="decr_box flex gap-10">
                            <div className=" text-sm ">
                                <p className=' my-2 text-center text-buyer-text-color font-semibold'>Quantity</p>
                                <p className=' text-center'>3 MT</p>
                            </div>
                            <div className="text-sm">
                                <p className='my-2  text-center text-buyer-text-color font-semibold'>HS CODE</p>
                                <p className=' text-center'>29153100</p>
                            </div>
                            <div className=" text-sm">
                                <p className='my-2  text-center text-buyer-text-color font-semibold'>CAS NO.</p>
                                <p className=' text-center'>503612-47-3</p>
                            </div>
                            <div className="text-sm">
                                <p className='my-2  text-center text-buyer-text-color font-semibold'>status</p>
                                <div className=' bg-buyer-button_2 p-1 rounded px-3 w-fit'>Bidding Ended</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* right div start */}
                <div className='left  flex flex-col text-sm  gap-3'>
                    <div className="right_head text-buyer-text-color flex items-center justify-between">
                        <p>Lowest Bid Yet</p>
                        <IoEllipsisVertical className=' cursor-pointer' size={16} />
                    </div>
                    <h1 className=' text-2xl font-bold'>$ 1,893.44</h1>
                    <p className=' text-buyer-text-color mb-4'>*Updates in 12hrs</p>

                    <div className="buttons flex items-center gap-4">
                        <button className=' py-3 px-12 rounded-md text-sm bg-buyer-second_know_more text-white'>Accept</button>
                        <div className=' border p-3 rounded border-buyer-second_know_more'>
                            <FiPhoneCall size={20} />
                        </div>
                    </div>
                    <a href="/" className=' underline text-buyer-primary text-center'>Negotiate</a>
                </div>

            </div>



            {/* know maore */}
            <div onClick={show} className=' cursor-pointer flex items-center gap-2  mb-4 text-end text-base font-medium text-buyer-second_know_more capitalize'>
                <p className='  font-semibold'>Know more</p>
                <MdOutlineArrowDropDown  className={`cursor-pointer ${know_more && 'rotate-180'}`} size={22} />
            </div>


            
            {
               know_more && 
                <div className=' flex flex-col gap-2 text-sm'>
                <div>
                    <h1 className=' font-semibold text-base my-2'>Your Remarks</h1>
                    <p className=' text-buyer-text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui, sed id convallis rutrum. Arcu dolor imperdiet ipsum amet ut. Cursus mattis fringilla ut urna malesuada sagittis tortor. Aliquam molestie pellentesque dui, tincidunt ut fames egestas.</p>
                </div>
                <h1 className='font-semibold text-base my-2'>Documents </h1>
                <div className='flex gap-5 '>
                    <div className=' flex flex-col items-center gap-1'>
                        <GrDocumentDownload color='#1672DE' size={35} />
                        <p className=' text-buyer-text-color'>abc.pdf</p>
                    </div>
                    <div className=' flex flex-col items-center gap-1'>
                        <GrDocumentDownload color='#1672DE' size={35} />
                        <p className=' text-buyer-text-color'>abc.pdf</p>
                    </div>
                    <div className=' flex flex-col items-center gap-1'>
                        <GrDocumentDownload color='#1672DE' size={35} />
                        <p className=' text-buyer-text-color'>abc.pdf</p>
                    </div>
                    <div className=' flex flex-col items-center gap-1'>
                        <GrDocumentDownload color='#1672DE' size={35} />
                        <p className=' text-buyer-text-color'>abc.pdf</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Bid