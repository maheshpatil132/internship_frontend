import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallorders } from '../actions/OrderActions'
import BidBox from '../components/Common/Home/BidBox'

const BuyerBid = () => {

  const dispatch = useDispatch()
  const { loading , bid } = useSelector(state=>state.bid)



  useEffect(() => {
    
    dispatch(getallorders)

  }, [])
  
  return (
    <div className=' flex flex-col space-y-5'>
        <BidBox/>
        <BidBox/>
        <BidBox/>

    </div>
  )
}

export default BuyerBid