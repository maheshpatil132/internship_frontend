import React, { useEffect, useRef, useState } from 'react'
import { Axios } from '../../components/Axios'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import OnBoardHeader from '../../components/OnBoardHeader';

const SellerList = () => {
  
    const [sellers, setSellers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getdata = async () => {
    
          try {
    
              await Axios.get('/getall/sellers').then((res) => {
                  setSellers(res.data.sellers)
                  console.log(res.data);
              })
    
          } catch (error) {
              console.log(error);
          }
    
    
      }
    
      getdata()
      
      }, [])

  return (
    <div className=' flex-1 h-screen overflow-y-scroll px-10'>
      <OnBoardHeader/>
    <div className=' mt-24'>

<div className=''>
<div className="flex  flex-col mt-3 bg-white box_shadow">
<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="   sm:px-6 lg:px-8">
<div className="overflow-hidden">

{  sellers.length > 0 ?

<table className="min-w-full text-black text-1xl font-normal ">
<thead className="">
  <tr className="border-b  hover:border-b  ">

    <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
    >
     seller Id
    </th>
    <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
    >
      seller Name
    </th>
    <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
     category
    </th>

    <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
     Area
    </th>

    <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
     Mobile
    </th>
    

    <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
       </th>

       <th
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
       </th>
  </tr>
</thead>
<tbody>

  {sellers.length > 0 &&
    sellers.map((elem, index) => {
      return (
        <tr className="border-b h-12 hover:border-b  hover:border-blue-500">

          <td className="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
            #{elem._id}
          </td>
          <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
            {elem.name}
          </td>
          <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
           {elem.Category}
          </td>
          <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
            {elem.Area}
          </td>
          
          <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
            {elem.mobile}
          </td>

          <td className="text-sm font-light cursor-pointer whitespace-nowrap">
            {/* <ChevronRightIcon onClick={()=>{navigate(`/rfq/${elem._id}`)}} /> */}
            <button onClick={()=>{ navigate(`/seller/profile/${elem._id}`)  }} className=' bg-[#004aa2] text-white px-4 py-2 rounded-md'>view </button>
          </td>

          <td className="text-sm font-light cursor-pointer whitespace-nowrap">
            {/* <ChevronRightIcon onClick={()=>{navigate(`/rfq/${elem._id}`)}} /> */}
            <MoreVertIcon/>
          </td>
        </tr>

      )
    })
  }


</tbody>
</table>
:
<h1 className=' p-4 text-center'>No bids in this Status</h1>
}
</div>
</div>
</div>
</div>


</div>
</div>
</div>
  )
}

export default SellerList