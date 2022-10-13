import ArrowForward from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../../components/SearchBox'
import { FiSearch } from 'react-icons/fi';
import SearchPopUp from '../../components/SearchPopUp';
import pics from "../../images/pic.jpeg"
import ProductReqpopUp from '../../components/ProductReqpopUp';
import ProdRequestAdded from '../../components/ProdRequestAdded';

function AllProducts() {

    const [products, setProducts] = useState([])
    const [showModal, setShowModal] = React.useState(false);
    const [showModal1, setShowModal1] = React.useState(false);

    const { user, isAuthenticated } = useSelector(state => state.user)
    const { product } = useSelector(state => state.product)

    const navigate = useNavigate()

    const redirects = (id) => {
        navigate(`/prod/${id}`)
    }


    useEffect(() => {
        setProducts(product)
    }, [])


    return (
        <>
            <div className="flex justify-center align-middle h-screen overflow-y-scroll bg-white flex-1">
                <div className="flex flex-col ">
                    <div className="flex w-10/12 justify-between mt-16">
                        <p className='font-semibold text-2xl ml-44'>Product Catalouge</p>
                        {user && user.role === 'seller' &&
                            <button onClick={() => setShowModal(true)} className="border border-[#004AA2] text-[#004AA2] w-fit gap-4 px-2 py-1 rounded-md mr-5"><ControlPointIcon /><span className='mt-1 ml-3'>Add Product</span></button>
                        }

                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto max-h-[95%] overflow-y-scroll my-6 mx-auto max-w-3xl">
                                        {/*content*/}

{   showModal===true &&
                                        <SearchPopUp setShowModal={setShowModal} />
}
                                        {showModal === "prodReq" &&
                                            <ProductReqpopUp setShowModal={setShowModal} />
                                        }
                                        {showModal === 'added' &&
                                            <ProdRequestAdded setShowModal={setShowModal} />

                                        }
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}

                        {!isAuthenticated &&
                            <button onClick={() => navigate('/login')} className="border border-[#004AA2] text-[#004AA2] px-6 py-1 rounded-md">Login</button>
                        }
                    </div>

                    {/* Seaaarch Box */}
                    <div className="w-3/4 mx-auto my-4">
                        <SearchBox />
                    </div>


                    <div className=" text-center">
                        <div className="w-10/12 flex flex-wrap mx-auto justify-center  mt-6">
                            {
                                products && products.map((elem, index) => {
                                    return (
                                        <div className="w-64 flex flex-col rounded-md shadow-lg m-3">
                                            <div className="">
                                                <img src={pics} className="h-36 w-64 rounded-t-md" />
                                            </div>
                                            <div className="py-3 px-5">
                                                <p className='text-start text-[#637F94] text-sm'>INCI Name</p>
                                                <p className="text-start">{elem.name}</p>
                                            </div>
                                            <div className="py-3 px-5">
                                                <p className='text-start text-[#637F94] text-sm'>Chemical Family</p>
                                                <p className="text-start">Alcohol</p>
                                            </div>
                                            <div className="py-3 px-5">
                                                <p className='text-start text-[#637F94] text-sm'>Functions</p>
                                                <p className="text-start">Coupling Agent, Solubilizer, Slip Agent, Intermediate, Emollient, Conditioner, Chemical Intermediate</p>
                                            </div>

                                            <div className="mt-2 border border-transparent border-t-gray-200 flex justify-between p-3">
                                                <ArrowForward className="text-white bg-[#58A9E4] rounded-full my-auto" fontSize="medium" />
                                                <button onClick={() => redirects(elem._id)} className='text-[#1E94DD] font-medium my-2'>View Product</button>
                                            </div>

                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AllProducts;
