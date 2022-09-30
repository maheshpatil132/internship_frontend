import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import axios from 'axios'


const Box = ({ content }) => {

	const [val, setVal] = useState(0)
	const [bids, setBids] = useState([])


	useEffect(() => {
		const getdata = async () => {
			const { data } = await axios.get('/getall/buyer/bids')
			setBids(data.buyerbids.bids)
		}

		getdata()
		const vow = () => {
			if (content === 'Processing') setVal(bids.filter(bid => bid.quote_status === 'processing').length)
			else if (content === 'Active') setVal( bids.filter(bid => bid.quote_status === 'active').length )
			else if (content === 'Pending') setVal( bids.filter(bid => bid.quote_status === 'ended').length )
			else setVal((bids.filter(bid => bid.quote_status === 'accepted').length) + (bids.filter(bid => bid.quote_status === 'rejected').length)) 
		}
		
		vow()
	})


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