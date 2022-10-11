import { Axios } from './Axios'
import React, { useEffect, useState } from 'react'
import SellerBidBox from './SellerBidBox'

const SellerBid = () => {
  const [data, setData] = useState([])
  const [sellerid, setSellerid] = useState('')
  useEffect(() => {
    Axios.get('/seller/enquries').then((data) => {
      console.log(data.data)
      setData(data.data.bids)
      setSellerid(data.data.sellerid)
    })
  }, [])

  return (
    <div className=" flex flex-col gap-3">
      <h1>Latest Enquries </h1>
      <div className="brid_box grid grid-cols-3 gap-6">
      {data.map((e, key) => {
        return e.bids.map((data, key) => {
          return sellerid === data.seller && data.price === 0 ? (
            <SellerBidBox e={e} sellerid={sellerid} />
            
          ) : (
            ''
          )
        })
      })}
       

      </div>
    </div>
  )
}

export default SellerBid