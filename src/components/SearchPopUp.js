import React from 'react'
import ArrowForward from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';
import {FiSearch} from 'react-icons/fi'


const SearchPopUp = ({setShowModal}) => {
  return (
    <div>
        <div className="flex justify-center align-middle">
                <div className="flex flex-col bg-[#f4f4f4] p-5 rounded-md">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Search from our catelogue</p>
                        <ClearIcon onClick={()=>{setShowModal(false)}}  className='text-[#1672DE] cursor-pointer mt-2' />
                    </div>

                    <div className="flex flex-col mt-2 text-[#637F94] w-4/5">
                        <p>We have huge array of product list. You can search in the search bar.</p>
                    </div>

                    {/* Search */}
                    <div className={`search_cover box_shadow border flex-1 rounded flex items-center p-2 my-2 bg-white`}>
            <input type="text" className='flex-1 outline-none' placeholder='search' />
            <FiSearch size={20} className='text-buyer-text-color' />
        </div>

                    <div className="text-center mt-20">
                        <button onClick={()=>{setShowModal('prodReq')}} className='bg-[#1672DE] px-3 py-2 mt-4 text-white rounded-md'>Request to add the product</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SearchPopUp