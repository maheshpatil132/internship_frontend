import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import img from "../../../images/Chart.png";
import SearchBox from "../../SearchBox";
import { Axios } from '../../Axios'

export default function History() {
	const [bids, setBids] = useState([])

	useEffect(() => {
		getdata()
	}, [])
	
	const getdata = async () => {
		const { data } = await Axios.get('/getall/buyer/bids')
		setBids(data.buyerbids.bids)
	}
	
	return (
		<div className="  py-10 px-14 flex-1 overflow-y-scroll h-screen">
			<div className="track_header mb-6 bg-white p-3 rounded-md shadow-md">
				<div>
					<img src={img} alt="" />
				</div>

				<div className="total_amount">
					<p>Total Shipment</p>
					<h2>15000</h2>
				</div>
			</div>


			{/* table start */}
			<div className="flex flex-col mt-5 bg-white p-3 rounded-md shadow-md">
				<div className="mt-2">
					<SearchBox />
				</div>
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
						<div className="overflow-hidden">

							{ bids.filter(bid=>bid.quote_status==='accepted').length > 0 ?
							<table className="min-w-full text-black text-1xl font-normal ">
								<thead className="">
									<tr className="h-12 hover:border ">
										<th
											scope="col"
											className="text-sm text-center w-1/5 font-medium text-gray-900 py-4">
											Order No
										</th>
										<th
											scope="col"
											className="text-sm text-center w-2/5 font-medium text-gray-900 py-4">
											Product Name
										</th>
										<th
											scope="col"
											className="text-sm text-center w-1/5 font-medium text-gray-900 py-4">
											Delivered at
										</th>
										<th
											scope="col"
											className="text-sm w-1/5 text-center font-medium text-gray-900 py-4">
											Price Bought at
										</th>
										<th
											scope="col"
											className="text-sm text-center w-1/5 font-medium text-gray-900 py-4">
										</th>
									</tr>
								</thead>
								<tbody>
									{
										bids ? bids.filter(bid=>bid.quote_status==='accepted').map((elem) => {
											console.log(elem)
											return (
												<tr key={elem._id} className="border-b h-12 hover:border hover:z-50  hover:border-blue-500">
													<td className="px-6 py-4 text-center text-blue-400  whitespace-nowrap text-sm font-medium ">
														{elem._id}
													</td>
													<td className="text-sm  text-center  font-light px-6 py-4 whitespace-nowrap">
														{elem.product ? elem.product.name : 'null'}
													</td>
													<td className="text-sm 	 text-center font-light px-6 py-4 whitespace-nowrap">
														12/12/12
													</td>
													<td className="text-sm  text-center  font-light px-6 py-4 whitespace-nowrap">
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
							: 
							<h1 className=' text-lg mt-3 text-center'>No bids are accepted</h1>
						}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}