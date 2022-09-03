import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import img from "../../../images/Chart.png";
import SearchBox from "../../SearchBox";

export default function History() {
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
      <div class="flex flex-col mt-5">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-black text-1xl font-normal ">
                <thead class="">
                  <tr className="border-b  h-12 hover:border  ">
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Order No
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
                      Eta
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
                      Price Bought at
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b h-12 hover:border hover:z-50  hover:border-blue-500">
                    <td class="px-6 py-4 text-blue-400  whitespace-nowrap text-sm font-medium ">
                      #1
                    </td>
                    <td class="text-sm    font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                    <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                      @mdo
                    </td>
                    <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                    <td class="text-sm  font-light  whitespace-nowrap">
                      <NavLink to={"/track"}>
                        {" "}
                        <ChevronRightIcon />{" "}
                      </NavLink>
                    </td>
                  </tr>
                  <tr className=" border-b h-12 hover:border   hover:border-blue-500">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400 ">
                      #2
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Jacob
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Thornton
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      @fat
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                    <td class="text-sm text-gray-900 font-light  whitespace-nowrap">
                      <NavLink to={"/track"}>
                        {" "}
                        <ChevronRightIcon />{" "}
                      </NavLink>
                    </td>
                  </tr>
                  <tr className=" border-b h-12 hover:border-b   hover:border-blue-500">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400 ">
                      #3
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Larry
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Wild
                    </td>
                    <td class="text-sm  text-gray-900 font-light  px-6 py-4  whitespace-nowrap    ">
                      @twitter
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrapbg-green-400">
                      @mdo
                    </td>
                    <td class="text-sm text-gray-900 font-light   whitespace-nowrap">
                      <NavLink to={"/track"}>
                        {" "}
                        <ChevronRightIcon />{" "}
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
