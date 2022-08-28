import React from 'react'
import BuyerBox from './BuyerBox'
import FrameIcon from '../../icons/growth.svg'
import { GrLineChart } from 'react-icons/gr'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Content = () => {
  return (
    <div className=' flex-1 px-14'>
      <h1 className=' mt-24 text-3xl text-buyer-heading mb-5 '>Overview</h1>
      <div className="box_conteainer grid grid-cols-3 gap-6 ">

        <BuyerBox color='button_1' icon={FrameIcon} icon_2={GrLineChart} />
        <BuyerBox color='button_2' icon_set='icon_setting' icon={FrameIcon} />

        {/* the third div start */}
        <div className=' border flex flex-col p-4 bg-white rounded'>
          <h1 className=' text-buyer-small_heading text-lg font-semibold mb-6'>Total Biddings</h1>
          <div className='content_box flex flex-col mt-3 gap-3'>
            <div className="line_1 flex items-start  justify-between">
              <img src={FrameIcon} className='h-8' alt="" srcset="" />
              <div className="processing">
                <span>Processing</span>
                <h3 className=' text-buyer-know_more font-bold'>10</h3>
              </div>
              <div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><a href="/" className=' text-buyer-know_more font-semibold underline'>Know more</a>
                <BsFillArrowRightCircleFill size={16} />
              </div>
            </div>
            <div className="line_1 flex items-start  justify-between">
              <img src={FrameIcon} className='h-8' alt="" srcset="" />
              <div className="processing">
                <span>Processing</span>
                <h3 className=' text-buyer-know_more font-bold'>10</h3>
              </div>
              <div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><a href="/" className=' text-buyer-know_more font-semibold underline'>Know more</a>
                <BsFillArrowRightCircleFill size={16} />
              </div>
            </div>
            <div className="line_1 flex items-start  justify-between">
              <img src={FrameIcon} className='h-8' alt="" srcset="" />
              <div className="processing">
                <span>Processing</span>
                <h3 className=' text-buyer-know_more font-bold'>10</h3>
              </div>
              <div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><a href="/" className=' text-buyer-know_more font-semibold underline'>Know more</a>
                <BsFillArrowRightCircleFill size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* search box start from here */}
        
        {/* search box endded */}
      </div>
    </div>
  )
}

export default Content