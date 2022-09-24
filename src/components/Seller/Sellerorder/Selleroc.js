import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
      <div className="track_mid  my-6 ">
        <div className="first">
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
      <SearchBox />

      {/* table */}
      <div class="flex flex-col mt-4">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-black text-1xl font-normal ">
                <thead class="">
                  <tr className="border-b  h-12 hover:border-b  ">
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      RFQ No
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price Sold At
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price Quoted By you
                    </th>
                  </tr>
                </thead>
                {data.map((e, key) => {
                  return e.winner.map((data, key) => {
                    return sellerid === data.seller ? (
                      <tbody>
                        <tr className="border-b h-12 hover:border-b  hover:border-blue-500">
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

                          <td class="text-sm  rounded-md h-3 font-light  ">
                            {' '}
                            <p className="px-2 py-2 bg-green-400">Accepeted</p>
                          </td>
                          <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                            {e.buyer_Price}
                          </td>
                          <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                            {e.bids.map((data, key) => {
                              return (
                                <div>
                                  {sellerid === data.seller ? data.price : ''}
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
  );
}
