import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getallorders } from '../actions/OrderActions'
import Bid from './Buyer/Bidding/Bid'
import BidBox from './Common/Home/BidBox'

const BuyerBid = (bids) => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getallorders)
	}, [])

	return (
		<div className=' flex flex-col space-y-5'>
			{
				bids.bids.filter(bid => bid.quote_status === 'ended').length + bids.bids.filter(bid => bid.quote_status === 'active').length > 0 ?
					bids.bids.filter(bid => bid.quote_status === 'ended').map((elem) => {
						return (
							<Bid key={elem._id} id={elem._id} elem={elem} />
						)
					})
					:
					<h1 className=' text-center text-xl'>No bids are in this status</h1>
			}
			{
				bids.bids.filter(bid => bid.quote_status === 'ended').length + bids.bids.filter(bid => bid.quote_status === 'active').length > 0 ?
					bids.bids.filter(bid => bid.quote_status === 'active').map((elem) => {
						return (
							<Bid key={elem._id} id={elem._id} elem={elem} />
						)
					})
					:
					<h1 className=' text-center text-xl'>No bids are in this status</h1>
			}
			{
				<BidBox />
			}

		</div>
	)
}

export default BuyerBid