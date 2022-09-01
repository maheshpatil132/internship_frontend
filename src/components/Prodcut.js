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
       <div className=' text-[0.78rem] px-3 py-4 flex flex-col gap-10 fixed right-4'>
          <OrderForm/>
          <Featues/>
       </div>
    </div>
  )
}

export default Prodcut