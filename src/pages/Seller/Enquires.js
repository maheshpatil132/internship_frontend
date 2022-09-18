import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Box from '../../components/Box'
import Heading from '../../components/Heading'
import SellerBidBox from '../../components/SellerBidBox'

const Enquires = () => {

  const [change, setChange] = useState(false)
  const [status, setStatus] = useState('live')


  const content = useRef()
  const searchbar = useRef()

  const status_live = ()=>{
    setStatus('live')
 }
 const status_pending = ()=>{
  setStatus('pending')
}
const status_previous = ()=>{
  setStatus('previous')
}


  useEffect(() => {
    content.current.addEventListener('scroll', () => {
      var rect = searchbar.current.getBoundingClientRect();

      if (rect.top < 70) {
        setChange(true)
      }
      if (rect.top > 70) {
        setChange(false)
      }

    })
  }, [])

  return (
    <div className=' flex-1 '>
      <Header />
      <div className="flex">
        <div ref={content} className=' flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen bg-white'>
          <Heading />

          <div className="box_cont flex gap-5">
            <div onClick={status_live} className={`text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status==='live' && 'bg-buyer-primary text-white' } `}>
              <Box content={'Live'} />
            </div>
            <div onClick={status_pending} className={`text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status==='pending' && 'bg-buyer-primary text-white' } `} >
              <Box content={'Pending'} />
            </div>
            <div onClick={status_previous} className={`text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status==='previous' && 'bg-buyer-primary text-white' } `}>
              <Box content={'Previous'} />
            </div>
          </div>

          <div ref={searchbar} className='sticky top-4' >
            <SearchBox change={change} />
          </div>
          <div className="brid_box grid grid-cols-3 gap-6">
            <SellerBidBox />
            <SellerBidBox />
            <SellerBidBox />
            <SellerBidBox />
            <SellerBidBox />
            <SellerBidBox />
            <SellerBidBox />
            <SellerBidBox />
            <SellerBidBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enquires