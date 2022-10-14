import React, { useState } from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function AddCompany() {
 
  const [name, setName] = useState('')
  const [employesno, setEmployesno] = useState('')
  const [category, setCategory] = useState('')
  const [area, setArea] = useState('')
  const [owner, setOwner] = useState('')
  const [cin, setCin] = useState('')
  const [gst, setGst] = useState('')
  const [ownermobile, setOwnerMobile] = useState('')
  const [capacity, setCapacity] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [about, setAbout] = useState('')
 

  return (
    <div className=" flex-1 px-10 py-8  h-screen overflow-y-scroll">
      <h1 className="font-[400] text-[24px] mt-8 p-2 ">Add Company Details </h1>
      <div className="flex gap-3 p-2">
        <DriveFolderUploadIcon />
        <div className="flex gap-1 justify-center flex-col ">
          <p className="text-[#0377EB] text-[16px] font-[600]">
            Upload Company Logo
          </p>
          <p className="text-[#757575] text-[11px] font-[400]">
            Should not be more than 1080x1080px
          </p>
        </div>
      </div>
      <div className="flex  gap-3 flex-col mt-4">
        <div className="flex gap-8 p-2  ">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">
              Company Name
            </p>
            <input
              value={name}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Number of employees</p>
            <input
             
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter Number of employees"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]"> Category </p>
            <input

              value={category}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Category "
            />
          </div>
        </div>
        <div className="flex gap-8 p-2">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Area</p>
            <input

              value={area}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the area  "
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">CIN Number</p>
            <input
              value={cin}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the CIN number "
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">GST Number</p>
            <input
              value={gst}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Min Purity "
            />
          </div>
        </div>
        <div className="flex gap-8 p-2">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Company owner name</p>
            <input
              value={owner}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Company owner name"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Owners Contact Number</p>
            <input
              value={ownermobile}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Owners Contact Number"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Warehousing Capacity</p>
            <input
              value={capacity}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Warehousing Capacity"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2 w-[26%]">
        <p className="font-[400] text-[16px] text-[#263238]">Linkedin Id</p>
        <input
          value={linkedin}
          type="text"
          className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
          placeholder="Enter the Linkedin Id"
        />
      </div>


      <div className="flex flex-col p-2 gap-2">
        <p>About The Company</p>
        <textarea 
        value={about}
        name="" id="" cols="10" rows="5" className=" p-2 rounded-md" placeholder="Enter the company Description "  ></textarea>
      </div>
   
      <div className="flex flex-col gap-3 mt-3 p-2">
        <p className="text-[16px] font-[400]">
          Upload Relevent Document
        </p>
        <div className="bg-[#DEEFFF] flex gap-3 w-fit p-3">
          <UploadFileIcon />
          <p className="text-[#1672DE] text-[16px ] font-[400]">Upload Document</p>
        </div>
      </div>
      <button className="font-[600] text-[16px] bg-[#1672DE] text-[#ffff] p-3 mt-3 ml-2 ">Add Company</button>
    </div>
  );
}