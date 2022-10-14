import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'; 
import ClearIcon from '@mui/icons-material/Clear';


const BankDetailsPopup = ({ setShowModal }) => {
    return (
        <>
            <div className="flex justify-center align-middle">
                <div className="flex flex-col bg-[#f4f4f4] p-5 rounded-md">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Bank Details</p>
                        <ClearIcon onClick={() => { setShowModal(false) }} className='cursor-pointer' />
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex">
                            <div className="w-1/2">
                                <p className='mb-1'>Account Holder Name</p>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter your Full Name' />
                            </div>
                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>IFSC Code</p>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Banks IFSC Code' />
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <div className="w-1/2">
                                <p className='mb-1'>Account Number </p>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Account Number' />
                            </div>
                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>Is this your Primary Account ? </p>
                                <div className="flex gap-10">
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label" defaultValue="Yes" name="row-radio-buttons-group">
                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <div className="w-1/2">
                                <p className='mb-1'>Bank Name </p>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter your Bank Name ' />
                            </div>
                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>Branch Name</p>
                                <input type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Branch Name' />
                            </div>
                        </div>


                    </div>

                    <div className="text-end mt-">
                        <button onClick={() => { setShowModal(false) }} className='bg-[#1672DE] px-3 py-2 mt-4 text-white rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankDetailsPopup