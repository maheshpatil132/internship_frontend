import React, { useEffect, useRef, useState } from 'react'
import Box from '../../components/Box'
import { useNavigate } from 'react-router-dom';
import { Axios } from '../../components/Axios'

const SellerReq = () => {

    const [bids, setBids] = useState([])
    // const [load, setLoad] = useState(true)
    const [status, setStatus] = useState('processing')
  
    const navigate = useNavigate()
  
    const status_proccess = () => {
      setStatus('Already')
  }
  const status_active = () => {
      setStatus('active')
  }
  
  
  useEffect(() => {
  
  
    const getdata = async () => {
  
        try {
  
            await Axios.get('/getall/request/seller').then((res) => {
                setBids(res.data)
                console.log(res.data);
            })
  
        } catch (error) {
            console.log(error);
        }
  
    }
  
    getdata()
  }, [status])

  return (
    // <div className=' flex-1 h-screen overflow-y-scroll px-10 py-6'>
    //         <h1 className=' text-2xl font-medium'> Add Product Request</h1>
    //         <div className="box_cont flex gap-5 mt-7">
    //                         <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'processing' && 'bg-buyer-primary text-white'} `} onClick={status_proccess}>
    //                             <Box content={'Already Product'} bids={bids} />
    //                         </div>
    //                         <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'active' && 'bg-buyer-primary text-white'} `} onClick={status_active}>
    //                             <Box content={'New Product'} bids={bids} />
    //                         </div>
                            
    //                     </div>

    //                     <div className=' mt-16'>
      
    //   <div className=''>
    //     <div className="flex  flex-col mt-3 bg-white box_shadow">
    //       <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    //         <div className="   sm:px-6 lg:px-8">
    //           <div className="overflow-hidden">

    //           {  bids.length > 0 ?
              
    //           <table className="min-w-full text-black text-1xl font-normal ">
    //               <thead className="">
    //                 <tr className="border-b  hover:border-b  ">

    //                   <th
    //                     scope="col"
    //                     className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
    //                   >
    //                     Order Id
    //                   </th>
    //                   <th
    //                     scope="col"
    //                     className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
    //                   >
    //                     Buyer Name
    //                   </th>
    //                   <th
    //                     scope="col"
    //                     className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    //                   >
    //                    Product Name
    //                   </th>

    //                   <th
    //                     scope="col"
    //                     className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    //                   >
    //                     status
    //                   </th>
                      

    //                   <th
    //                     scope="col"
    //                     className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    //                   >
    //                      </th>
    //                 </tr>
    //               </thead>
    //               <tbody>

    //                 {bids.length > 0 &&
    //                   bids.map((elem, index) => {
    //                     return (
    //                       <tr className="border-b h-12 hover:border-b  hover:border-blue-500">

    //                         <td className="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
    //                           #{elem._id}
    //                         </td>
    //                         <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
    //                           {/* {elem.buyer} */}xyz
    //                         </td>
    //                         <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
    //                           {elem.product && elem.product.name ? elem.product.name :'-' }
    //                         </td>
    //                         <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
    //                           {elem.order_status}
    //                         </td>
                            

    //                         <td className="text-sm font-light cursor-pointer whitespace-nowrap">
    //                           {/* <ChevronRightIcon onClick={()=>{navigate(`/rfq/${elem._id}`)}} /> */}
    //                           <button onClick={()=>{navigate(`/order/${elem._id}`)}} className=' bg-[#004aa2] text-white px-4 py-2 rounded-md'>view order</button>
    //                         </td>
    //                       </tr>

    //                     )
    //                   })
    //                 }


    //               </tbody>
    //             </table>
    //             :
    //             <h1 className=' p-4 text-center'>No bids in this Status</h1>
    //           }
    //           </div>
    //         </div>
    //       </div>
    //     </div>


    //   </div>
    // </div>
    //     </div>

   <div>
    hahha
   </div>
  )
}

export default SellerReq