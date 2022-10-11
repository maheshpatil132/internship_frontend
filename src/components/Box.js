import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'



const Box = ({ content ,bids }) => {

	const [val, setVal] = useState(0)
	// const [bids, setBids] = useState([])


	useEffect(() => {	
		vow()
	},[bids])
	
	const vow = () => {
		if (content === 'Processing') setVal(bids.filter(bid => bid.quote_status === 'processing').length)
		else if (content === 'Active') setVal( bids.filter(bid => bid.quote_status === 'active').length )
		else if (content === 'Pending') setVal( bids.filter(bid => bid.quote_status === 'ended').length )
		else if (content === 'NewRFQs') setVal( bids.filter(bid => bid.quote_status === 'processing').length )
		else if (content === 'ActiveRFQs') setVal( bids.filter(bid => bid.quote_status === 'active').length )
		else if (content === 'AcceptedRFQs') setVal( bids.filter(bid => bid.quote_status === 'buyer_accepted').length )
		else if (content === 'RFQHistory') setVal( bids.filter(bid => bid.quote_status === 'accepted' || bid.quote_status === 'rejected').length )
		else setVal((bids.filter(bid => bid.quote_status === 'accepted').length) + (bids.filter(bid => bid.quote_status === 'rejected').length)) 
	}

	return (
		<div>
			<div>
				<div className=' flex justify-between'>
					<h1>{content}</h1>
					<MdKeyboardArrowRight />
				</div>

				<h1 className=' text-2xl font-bold '>{val}</h1>
			</div>
		</div>
	)
}

export default Box