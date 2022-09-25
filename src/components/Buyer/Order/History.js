import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import img from "../../../images/Chart.png";
import SearchBox from "../../SearchBox";
import axios from "axios";

export default function History() {
  const [bids, setBids] = useState([])

  useEffect(() => {

    const getdata = async () => {

      const { data } = await axios.get('/getall/buyer/bids')

      setBids(data.buyerbids.bids)



    }

    getdata()
    console.log(bids)

  }, [])

  return (
    <div className="content_page  py-10 px-14 flex-1 overflow-y-scroll h-screen">
      <div className="track_header">
        <div>
          <img src={img} alt="" />


        </div>

        <div className="total_amount">
          <p>Total Shipment</p>
          <h2>15000</h2>
        </div>
      </div>


      {/* box div */}
      <div className="track_mid my-6 ">
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
        <div className="third">
          <div className="flex">
            <p className="flex-1">Preparing</p>
            <ChevronRightIcon className="mt-2 mr-4" />
          </div>
          <h3>15000</h3>
        </div>
        <div className="third">
          <div className="flex">
            <p className="flex-1">Delivered</p>
            <ChevronRightIcon className="mt-2 mr-4" />
          </div>
          <h3>15000</h3>
        </div>
      </div>

      <SearchBox />

      {/* table start */}
      <div className="flex flex-col mt-5">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-black text-1xl font-normal ">
                <thead className="">
                  <tr className="border-b  h-12 hover:border  ">
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Order No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Eta
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price Bought at
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    bids ? bids.map((elem, index) => {
                      return (
                        <tr key={elem._id} className="border-b h-12 hover:border hover:z-50  hover:border-blue-500">
                          <td className="px-6 py-4 text-blue-400  whitespace-nowrap text-sm font-medium ">
                            {elem._id}
                          </td>
                          <td className="text-sm    font-light px-6 py-4 whitespace-nowrap">
                            {elem.product.name}
                          </td>
                          <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                            12/12/12
                          </td>
                          <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                            {elem.quote_status}
                          </td>
                          <td className="text-sm   font-light px-6 py-4 whitespace-nowrap">
                            {elem.buyer_Price}
                          </td>
                          <td className="text-sm  font-light  whitespace-nowrap">
                            <NavLink to={"/track"}>
                              {" "}
                              <ChevronRightIcon />{" "}
                            </NavLink>
                          </td>
                        </tr>
                      )
                    })
                    
                    :
                     
                    'no content'

                  }
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
