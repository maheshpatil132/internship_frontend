import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { Axios } from './Axios'
import { useParams } from 'react-router-dom'

function AddredPopUp({ setShowModal }, user) {
    const [atype, setatype] = useState(user.type ? user.type : "")
    const [cname, setcname] = useState(user.name ? user.name : "")
    const [mobile, setmobile] = useState(user.mobile ? user.mobile : "")
    const [address, setaddress] = useState(user.address ? user.address : "")

    const { id } = useParams()

    const handleSubmit = () => {
        Axios.put(`update/buyer/`, {
            type: atype,
            name: cname,
            mobile: mobile,
            address: address
        }).then((req, res) => {
            // toast.success(res.data.message)
        }).catch((error) => {
            console.log(error.response.data.error)
            // toast.error(error.response.data.error)
        })
    }

    const handlea = (e) => {
        setatype(e.target.value)
    }
    const handlen = (e) => {
        setcname(e.target.value)
    }
    const handlecn = (e) => {
        setmobile(e.target.value)
    }
    const handleadd = (e) => {
        setaddress(e.target.value)
    }
    return (
        <>
            <div className="flex justify-center align-middle">
                <div className="flex flex-col bg-[#f4f4f4] p-5 rounded-md">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Address Details</p>
                        <ClearIcon onClick={() => { setShowModal(false) }} className=' cursor-pointer' />
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex">
                            <div className="w-1/2">
                                <p className='mb-1'>Address Type </p>
                                <input value={atype} onChange={handlea} required type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder={`Type Of Addresss`} />
                            </div>
                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>Contact Person Name</p>
                                <input value={cname} onChange={handlen} required type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder={`Enter Your Name`} />
                            </div>
                        </div>

                        <div className="flex mt-6">
                            <div className="w-1/2">
                                <p className='mb-1'>Contact Number</p>
                                <div className="flex justify-between my-1">
                                    <input value={mobile} onChange={handlecn} required type="text" className='bg-white rounded-md py-2 px-4 w-48 border border-gray-400 target::border-[#0377EB]' placeholder='Enter the Number' />
                                    <button className='bg-[#1672DE]  text-xs p-1 rounded-md text-white'>Send Otp</button>
                                </div>
                            </div>

                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>OTP</p>
                                <div className="flex justify-between">
                                    <input required type="text" className='bg-white rounded-md py-2 px-4 w-44 border border-gray-400 target::border-[#0377EB]' placeholder='Enter OTP' />
                                    <button className='bg-[#1672DE] p-1 text-sm rounded-md text-white'>Verify Otp</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className='mb-1'>Address</p>
                            <input value={address} onChange={handleadd} type="text" className='w-full h-56 bg-white rounded-md py-2 px-4 border border-gray-400 ' placeholder='Enter Address' />
                        </div>
                    </div>

                    <div className="text-end mt-1">
                        <button onClick={() => { setShowModal(false); handleSubmit() }} className='bg-[#1672DE] px-3 py-2 mt-4 text-white rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddredPopUp;