import React, { useEffect, useState  } from 'react'

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import updown from "./rfqimg/updown.png";

import Qvotobox from './Qvotobox';
import SearchBox from '../../SearchBox';
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import { getallorders } from '../../../actions/OrderActions';
import { useNavigate } from 'react-router-dom';


export default function RfqContent() {
  const [bids, setBids] = useState([])
  const [status, setStatus] = useState('processing')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { bid } = useSelector(state => state.bid)





  const status_NewRFQs = () => {
    setStatus('processing')
  }
  const status_active = () => {
    navigate('/activerfq')
    setStatus('active')

  }
  const status_Accepted = () => {
    navigate('/arfq')
    setStatus('accepted')

  }
  const status_RfqHistory = () => {
    setStatus('accepted')
  }

  useEffect(() => {

    dispatch(getallorders)
    setBids(bid)

  


  }, [])






  return (
    <div className='border flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen'>
      <Header />
      
      <div className=''>
        <div className='flex gap-4 mt-16'>
          <img src={updown} alt="" className='p-3 h-[70px] bg-[#E6F3FF]' />
          <div className='flex flex-col  '>
            <p className='text-[#637F94] text-[20px] font-[400]'>Total RFQs</p>
            <h2 className='text-[48px] font-[600] -mt-3'>15000</h2>
          </div>
        </div>
        
        <div className="track_mid ">
          <div onClick={status_NewRFQs} className={` cursor-pointer  ${status === 'processing' ? 'first' : 'second'} `}>
            <div className="flex">
              <p className="flex-1">New RFQs</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
          <div onClick={status_active} className={` cursor-pointer  ${status === 'active' ? 'first' : ' second'} `}>
            <div className="flex">
              <p className="flex-1">Active RFQs</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
          <div onClick={status_Accepted} className={` cursor-pointer  ${status === 'accepted' ? 'first' : ' second'} `}>
            <div className="flex items-center">
              <p className="flex-1">Accepted RFQs</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
          <div onClick={status_RfqHistory} className={` cursor-pointer  ${status === 'RFQs History' ? 'first' : ' second'} `}>
            <div className="flex">
              <p className="flex-1">RFQs History</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
        </div>


      </div>


      <div className=''>
        <SearchBox />
      </div>

      <div className=' grid grid-cols-3  justify-around gap-6'>

        {
          
          bids.filter(bid => bid.quote_status === status).length > 0 ?
            bids.filter(bid => bid.quote_status === status).map((elem, index) => {
              return (
                <Qvotobox key={elem._id} id={elem._id} elem={elem} />
              )
            })

            :
            <h1 className=' text-center text-xl'>No bids are in this status</h1>

        }


       


      </div>

    </div>
  )
}