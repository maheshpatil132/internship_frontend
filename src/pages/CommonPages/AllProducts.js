import ArrowForward from '@mui/icons-material/ArrowForward';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchBox from '../../components/SearchBox';
import pics from "../../images/pic.jpeg"

function AllProducts() {
    return (
        <>
            <div className="flex justify-center align-middle h-screen overflow-y-scroll bg-white flex-1">
                <div className="flex flex-col ">
                    <div className="flex w-10/12 justify-between mt-16">
                        <p className='font-semibold text-2xl ml-44'>Product Catalouge</p>
                        <button className="border border-[#1672DE] text-[#1672DE] w-fit gap-4 px-2 py-1 rounded-md mr-5"><ControlPointIcon /><span className='mt-1 ml-3'>Add Product</span></button>
                    </div>

                    {/* Seaaarch Box */}
                    <div className="w-3/4 mx-auto my-4">
                    <SearchBox/>
                    </div>


                    <div className=" text-center">
                        <div className="w-10/12 flex flex-wrap mx-auto justify-center  mt-6">
                            <div className="w-64 flex flex-col rounded-md shadow-lg m-3">
                                <div className="">
                                    <img src={pics} className="h-36 w-64 rounded-t-md" />
                                </div>
                                <div className="py-3 px-5">
                                    <p className='text-start text-[#637F94] text-sm'>INCI Name</p>
                                    <p className="text-start">Dodecylhexadecanol</p>
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
                                    <button className='text-[#1E94DD] font-medium my-2'>View Product</button>
                                </div>

                            </div>
                            <div className="w-64 flex flex-col rounded-md shadow-lg m-3">
                                <div className="">
                                    <img src={pics} className="h-36 w-64 rounded-t-md" />
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>INCI Name</p>
                                    <p className="text-start">Dodecylhexadecanol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Chemical Family</p>
                                    <p className="text-start">Alcohol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Functions</p>
                                    <p className="text-start">Coupling Agent, Solubilizer, Slip Agent, Intermediate, Emollient, Conditioner, Chemical Intermediate</p>
                                </div>

                                <div className="mt-2 border border-transparent border-t-gray-200 flex justify-between p-3">
                                    <ArrowForward className="text-white bg-[#58A9E4] rounded-full my-auto" fontSize="medium" />
                                    <button className='text-[#1E94DD] font-medium my-2'>View Product</button>
                                </div>

                            </div>
                            <div className="w-64 flex flex-col rounded-md shadow-lg m-3">
                                <div className="">
                                    <img src={pics} className="h-36 w-64 rounded-t-md" />
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>INCI Name</p>
                                    <p className="text-start">Dodecylhexadecanol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Chemical Family</p>
                                    <p className="text-start">Alcohol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Functions</p>
                                    <p className="text-start">Coupling Agent, Solubilizer, Slip Agent, Intermediate, Emollient, Conditioner, Chemical Intermediate</p>
                                </div>

                                <div className="mt-2 border border-transparent border-t-gray-200 flex justify-between p-3">
                                    <ArrowForward className="text-white bg-[#58A9E4] rounded-full my-auto" fontSize="medium" />
                                    <button className='text-[#1E94DD] font-medium my-2'>View Product</button>
                                </div>

                            </div>
                            <div className="w-64 flex flex-col rounded-md shadow-lg m-3">
                                <div className="">
                                    <img src={pics} className="h-36 w-64 rounded-t-md" />
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>INCI Name</p>
                                    <p className="text-start">Dodecylhexadecanol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Chemical Family</p>
                                    <p className="text-start">Alcohol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Functions</p>
                                    <p className="text-start">Coupling Agent, Solubilizer, Slip Agent, Intermediate, Emollient, Conditioner, Chemical Intermediate</p>
                                </div>

                                <div className="mt-2 border border-transparent border-t-gray-200 flex justify-between p-3">
                                    <ArrowForward className="text-white bg-[#58A9E4] rounded-full my-auto" fontSize="medium" />
                                    <button className='text-[#1E94DD] font-medium my-2'>View Product</button>
                                </div>

                            </div>
                            <div className="w-64 flex flex-col rounded-md shadow-lg m-3">
                                <div className="">
                                    <img src={pics} className="h-36 w-64 rounded-t-md" />
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>INCI Name</p>
                                    <p className="text-start">Dodecylhexadecanol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Chemical Family</p>
                                    <p className="text-start">Alcohol</p>
                                </div>
                                <div className="p-3">
                                    <p className='text-start text-[#637F94] text-sm'>Functions</p>
                                    <p className="text-start">Coupling Agent, Solubilizer, Slip Agent, Intermediate, Emollient, Conditioner, Chemical Intermediate</p>
                                </div>

                                <div className="mt-2 border border-transparent border-t-gray-200 flex justify-between p-3">
                                    <ArrowForward className="text-white bg-[#58A9E4] rounded-full my-auto" fontSize="medium" />
                                    <button className='text-[#1E94DD] font-medium my-2'>View Product</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AllProducts;
