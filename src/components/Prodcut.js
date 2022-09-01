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
       <div className='h-screen fixed right-0 gap-13 px-8 py-4 flex flex-col'>
          <OrderForm/>
          <Featues/>
       </div>
    </div>
  )
}

export default Prodcut