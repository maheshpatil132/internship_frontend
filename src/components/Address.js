import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Address = ({ setShowModal }, user) => {
    return (
        <>
            <div className="mt-6">
                <button onClick={() => { setShowModal('address') }} className='text-white bg-[#004AA1] px-3 py-2 text-lg font-medium rounded-md'><AddCircleOutlineIcon className='mr-1 mb-1' fontSize='small' />Address</button>

                {/* {
                    user.map((elem) => {
                        return(<></>)
                    })
                } */}
                <div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
                    <div className="flex justify-between">
                        <h1>Address (1)</h1>
                        <button onClick={() => { setShowModal('address') }} className='text-white bg-[#004AA1] px-2 py-1 rounded-md '><BorderColorIcon className='mb-1' fontSize='small' /><span className='mx-2'>Edit</span></button>
                    </div>

                    <div className="flex w-11/12 mt-3 p-1">
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Address Type </p>
                            <p>{user.type}</p>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Contact Person Name</p>
                            <p>{user.name}</p>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
                            <p>{user.mobile}</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-1 mt-2">
                        <p className="text-[#637F94] text-sm font-medium w-1/2">Address</p>
                        <p>{user.address} </p>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Address