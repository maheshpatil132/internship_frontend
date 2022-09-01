import React from 'react'
import MainHeading from '../../../components/MainHeading'
import img from '../../../images/onboard.png'

const SellerPage = () => {
    return (
        <div className=' flex flex-col'>

            {/* home div */}
            <div className=' relative px-20 py-2 h-screen flex flex-col overflow-hidden'>
                <MainHeading />
                <div className=' flex-1 flex justify-between items-center'>
                    <div className="left flex flex-col gap-6 w-2/5">
                        <h1 className=' font-semibold text-4xl text-[#00212F]'>Join Maqure <br />
                            To Sell Nationally and <br /> Internationally</h1>

                        <p className=' text-base text-buyer-text-color'>Request a demo to learn how Maqure makes it easier than ever for you to market, sell and transact online.
                        </p>
                        <div className=' w-96'>
                            <form action="" className=' flex flex-col gap-4'>
                                <input type="text" className=' border-[#667080] rounded-md py-2 px-4 border outline-none' placeholder='Company Name' />
                                <input type="text" className=' border-[#667080] rounded-md py-2 px-4 border outline-none' placeholder='Email ' />
                                <input type="text" className=' border-[#667080] rounded-md py-2 px-4 border outline-none' placeholder='Phone Number' />
                                <button className=' bg-buyer-primary py-3 px-6 text-white rounded-md'>Request A Call </button>
                            </form>
                        </div>
                    </div>
                    <div className="right flex">
                        <img className='h-[29rem]' src={img} alt="" />
                    </div>
                </div>

                <div className='main_seller'>

                </div>

            </div>

             {/* trusted.....part */}
             <div>
                <h1 className=''>TRUSTED BY INDUSTRY VETRANS</h1>
             </div>
        </div>
    )
}

export default SellerPage