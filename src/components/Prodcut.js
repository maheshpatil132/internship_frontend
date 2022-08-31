import React from 'react'
import Featues from './Featues'
import Header from './Header'
import OrderForm from './OrderForm'
import ProdDecr from './ProdDerc.js'

const Prodcut = () => {
  return (
    <div className='flex'>
       <Header/>
       <div className=' product flex-1 h-screen overflow-y-scroll '>
         <ProdDecr/>
       </div>
       <div className='h-screen justify-between order_form px-4 py-2 flex flex-col'>
          <OrderForm/>
          <Featues/>
       </div>
    </div>
  )
}

export default Prodcut