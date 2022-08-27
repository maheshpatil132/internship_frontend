import React from 'react'
import BuyerBox from './BuyerBox'


const Content = () => {
  return (
    <div className=' flex-1 px-14'>
      <h1 className=' mt-24 text-3xl text-buyer-heading mb-5 '>Overview</h1>
      <div className="box_conteainer grid grid-cols-3 gap-6 ">
       <BuyerBox color='button_1' />
       <BuyerBox color='button_2'/>
       <BuyerBox/>
      </div>
    </div>
  )
}

export default Content