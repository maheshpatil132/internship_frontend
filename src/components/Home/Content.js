import React from 'react'
import BuyerBox from './BuyerBox'
import FrameIcon from '../../icons/growth.svg'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Credit from './Credit'
import SearchBox from './SearchBox'
import BidBox from './BidBox'

const Content = () => {
  return (
    <div className=' flex-1 px-14 space-y-5 overflow-y-scroll h-screen '>
      <h1 className=' mt-24 text-3xl text-buyer-heading '>Overview</h1>

      <div className="box_conteainer grid grid-cols-3 gap-6 ">
        <BuyerBox color='button_1' growth={true} icon={FrameIcon}  />
        <BuyerBox color='button_2' growth={false} icon_set='icon_setting' icon={FrameIcon} />
        {/* the third div start */}
        <div className=' box_shadow  border flex flex-col p-4 bg-white rounded'>
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
        {/* third div ended */}
      </div>

       {/* credit start */}
       <Credit/>
        {/* credit end */}

        {/* search box start from here */}
          <SearchBox/>
        {/* search box endded */}
        

        {/* biding box started */}
        <BidBox/>
        <BidBox/>
        <BidBox/>

    </div>
  )
}

export default Content