import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Address = ({ setShowModal }) => {
    return (
        <>
            <div className="mt-6">
                <button onClick={() => { setShowModal('address') }} className='text-white bg-[#1672DE] px-3 py-2 text-lg font-medium rounded-md'><AddCircleOutlineIcon className='mr-1 mb-1' fontSize='small' />Address</button>

                <div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
                    <div className="flex justify-between">
                        <h1>Address (1)</h1>
                        <p><MoreVertIcon /></p>
                    </div>

                    <div className="flex w-11/12 mt-3 p-1">
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Address Type </p>
                            <p>Office</p>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Contact Person Name</p>
                            <p>Sales Person</p>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
                            <p>9861657330</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-1 mt-2">
                        <p className="text-[#637F94] text-sm font-medium w-1/2">Address</p>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    </div>
                </div>
                <div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
                    <div className="flex justify-between">
                        <h1>Address (1)</h1>
                        <p><MoreVertIcon /></p>
                    </div>

                    <div className="flex w-11/12 mt-3 p-1">
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Address Type </p>
                            <p>Office</p>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Contact Person Name</p>
                            <p>Sales Person</p>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
                            <p>9861657330</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-1 mt-2">
                        <p className="text-[#637F94] text-sm font-medium w-1/2">Address</p>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Address