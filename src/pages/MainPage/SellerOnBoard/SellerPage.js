import React from 'react'
import MainHeading from '../../../components/MainHeading'
import img from '../../../images/onboard.png'

const SellerPage = () => {
    return (
        <div className=' px-20 py-2 h-screen flex flex-col'>
            <MainHeading />
            <div className=' flex-1 flex justify-between items-center'>
                <div className="left flex flex-col gap-6 w-2/5">
                    <h1 className=' font-bold text-3xl'>Join Maqure <br />
                        To Sell Nationally and <br /> Internationally</h1>

                    <p className=' text-buyer-text-color'>Request a demo to learn how Maqure makes it easier than ever for you to market, sell and transact online.
                    </p>
                    <div className=' w-96'>
                        <form action="" className=' flex flex-col gap-3'>
                            <input type="text" className=' rounded py-2 px-4 border outline-none' placeholder='Company Name' />
                            <input type="text" className=' py-2 px-4 border outline-none' placeholder='Email ' />
                            <input type="text" className=' py-2 px-4 border outline-none' placeholder='Phone Number' />
                            <button className=' bg-buyer-primary py-2 px-6 text-white rounded'>Request A Call </button>
                        </form>
                    </div>
                </div>
                <div className="right flex">
                    <img className=' h-96' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SellerPage