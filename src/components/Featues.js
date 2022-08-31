import React from 'react'
import { FaTruck } from 'react-icons/fa'

const Featues = () => {
    return (
        <div className=' text-xs px-6'>
            <div className=' flex flex-col gap-3 justify-center  '>
                <div className=' w-fit mx-auto flex flex-col gap-3'>
                    <div className='feature_1 flex items-center gap-4'>
                        <FaTruck size={30} />
                        <div>
                            <h3 className=' text-base font-medium'>FaTruck</h3>
                            <p className=' text-buyer-text-color'>A line about the above feature</p>
                        </div>
                    </div>
                    <div className='feature_1 flex items-center gap-4'>
                        <FaTruck size={30} />
                        <div>
                            <h3 className=' text-base font-medium'>FaTruck</h3>
                            <p className=' text-buyer-text-color'>A line about the above feature</p>
                        </div>
                    </div>
                    <div className='feature_1 flex items-center gap-4'>
                        <FaTruck size={30} />
                        <div>
                            <h3 className=' text-base font-medium'>FaTruck</h3>
                            <p className=' text-buyer-text-color'>A line about the above feature</p>
                        </div>
                    </div>
                </div>
                <button className=' bg-buyer-primary py-2 px-4 text-base rounded text-white'>Request a Quote</button>

            </div>

        </div>
    )
}

export default Featues