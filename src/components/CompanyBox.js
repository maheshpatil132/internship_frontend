import React from 'react'
import img from '../images/company.png'
import {BsArrowDownCircleFill} from 'react-icons/bs'
import Footer from './Footer'
const CompanyBox = () => {
    return (
        <div className=' flex flex-col'>
            <div className="flex flex-col w-72 border p-3 gap-4 text-sm">
                <div className=' relative bg-slate-400'>
                    <img className='image w-full h-full' src={img} alt="" />
                    <div className=' absolute bottom-0 w-full p-4 flex flex-col gap-2'>
                        <h1 className='  text-white text-xl'>ISOFOL 28</h1>
                        <hr className=' bg-white  w-full' />
                    </div>
                </div>
                <div className=' flex flex-col gap-1 '>
                    <p className=' text-buyer-text-color'>INCI Name</p>
                    <h4 className=''>Dodecylhexadecanol</h4>
                </div>

                <div className=' flex flex-col gap-1'>
                    <p className=' text-buyer-text-color'>Chemical Family </p>
                    <p className=' '>Alcohols</p>
                </div>

                <div className=' flex flex-col gap-1'>
                    <p className=' text-buyer-text-color'>Functions</p>
                    <p className=' '>Coupling Agent, Solubilizer, Slip Agent, Intermediate, Emollient, Conditioner, Chemical Intermediate</p>
                </div>

                <hr />

                <div className=' flex justify-between items-center text-buyer-primary'>
                    <BsArrowDownCircleFill size={30}/>
                    <h3 className=' cursor-pointer text-base'>View Product</h3>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CompanyBox