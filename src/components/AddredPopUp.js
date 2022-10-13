import ClearIcon from '@mui/icons-material/Clear';
// import PhotoIcon from '@mui/icons-material/Photo';

function AddredPopUp({setShowModal}) {
    return (
        <>
            <div className="flex justify-center align-middle">
                <div className="flex flex-col bg-[#f4f4f4] p-5 rounded-md">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Address Details</p>
                        <ClearIcon onClick={()=>{setShowModal(false)}} className=' cursor-pointer'/>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex">
                            <div className="w-1/2">
                                <p className='mb-1'>Address Type </p>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Select Address Type ' />
                            </div>
                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>Contact Person Name</p>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Contact Person Name' />
                            </div>
                        </div>

                        <div className="flex mt-6">
                            <div className="w-1/2">
                                <div className="flex justify-between my-1">
                                    <p className='mb-1'>Contact Number</p>
                                    <button className='bg-[#1672DE] py-1 px-2 text-sm rounded-md text-white'>Send Otp</button>
                                </div>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-48 border border-gray-400 target::border-[#0377EB]' placeholder='Enter the Number' />
                            </div>

                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>OTP</p>
                                <div className="flex justify-between">
                                    <input type="text" className='bg-white rounded-md py-2 px-4 w-44 border border-gray-400 target::border-[#0377EB]' placeholder='Enter OTP' />
                                    <button className='bg-[#1672DE] p-1 text-sm rounded-md text-white'>Verify Otp</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className='mb-1'>Address</p>
                            <input type="text" className='w-full h-56 bg-white rounded-md py-2 px-4 border border-gray-400 ' placeholder='Enter Address' />
                        </div>
                    </div>

                    <div className="text-end mt-">
                        <button className='bg-[#1672DE] px-3 py-2 mt-4 text-white rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddredPopUp;
