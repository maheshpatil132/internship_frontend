import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import img from "../../../images/Chart.png";
import SearchBox from "../../SearchBox";
import '../../../css/content.css'
import axios from "axios";

export default function History() {

  const [data, setData] = useState([])
  const [sellerid, setSellerid] = useState('')
  useEffect(() => {
    axios.get('/seller/enquries').then((data) => {
      console.log(data.data.bids)

      setData(data.data.bids)

      setSellerid(data.data.sellerid)
    })
  }, [])

  return (
    <div className=" content_page py-10 px-14 flex-1 overflow-y-scroll h-screen">
      <div className="track_header">
        <div>
          <img src={img} alt="" />
        </div>

        <div className="total_amount">
          <p>Total Shipment</p>
          <h2>15000</h2>
        </div>
      </div>
      <div className="track_mid  my-6  ">
        <div className="first   ">
          <div className="flex">
            <p className="flex-1">Preparing</p>
            <ChevronRightIcon className="mt-2 mr-4" />
          </div>

          <h3>15000</h3>
        </div>
        <div className="second">
          <div className="flex">
            <p className="flex-1">Preparing</p>
            <ChevronRightIcon className="mt-2 mr-4" />
          </div>
          <h3>15000</h3>
        </div>
      </div>
      <div className="shadow-xl p-4 border bg-[#FFFFFF] rounded-lg">
      <div className="px-4 pt-2">

      <SearchBox  />
      </div>

      {/* table */}
      <div class="flex flex-col mt-4 px-4 ">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden ">
              <table class="min-w-full text-black text-1xl font-normal ">
                <thead class="">
                  <tr className="border-b  h-12 hover:border-b  ">
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    ></th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                    >
                      RFQ No
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                    >
                      Quantity
                    </th>
                    
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                    >
                        Status
                      </th>
                     
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                      >
                        Price 
                      </th>
                    </tr>
                  </thead>
                  {data.map((e, key) => {
                    return e.winner.map((data, key) => {
                      return sellerid === data.seller ? (
                        <tbody>
                          <tr className="border-b h-12 hover:border-2  hover:border-blue-300 text-center">
                            <td class="px-6 py-4 text-blue-400  whitespace-nowrap text-sm font-medium ">
                              <ChevronRightIcon />
                            </td>
                            <td class="text-sm text-blue-500 text-1xl  font-light px-6 py-4 whitespace-nowrap">
                              {e._id}
                            </td>
                            <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                              {e.product}
                            </td>
                            <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                              {e.quantity}
                            </td>

                            <td class="text-sm  rounded-md px-6 py-4  font-light  ">
                              {' '}
                              <p className="px-2 py-1 bg-[#A9FEC6] text-[#005E25] rounded-lg text-center ">Accepted</p>
                            </td>
                          
                            <td class="text-sm   font-[600] text-[14px] px-6 py-4 whitespace-nowrap flex justify-center">
                            <CurrencyRupeeIcon sx={{width:"20px"}}/>
                              {e.bids.map((data, key) => {
                                return (
                                  <div className="flex">
                                 
                                  <p>  {sellerid === data.seller ? e.buyer_Price : ''} </p>
                               

                                  </div>
                                )
                              })}
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        ''
                      )
                    })
                  })}
                </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}