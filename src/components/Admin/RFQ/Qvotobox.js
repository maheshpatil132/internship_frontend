import React from "react";
import img from "../../../images/Vector.png";
import rac from "./rfqimg/rac.png"
export default function Qvotobox() {
  return (
    <div>
      <div className="right bg-white shadow-xl px-3  rounded-md py-4">
        <div className="flex flex-col gap-2">
          <p className="text-[#1672DE] text-[14px] font-[400px]">#231234</p>
          <h2 className=" text-[24px] font-[600]">#1672DE</h2>
        </div>
        <div className="flex gap-4 mt-3">
          <button className="bg-[#1672DE] rounded-md text-[#FFFFFF] font-[700] text-[16px] px-5 py-2 border-2 ">
            Process
          </button>
          <button className="bg-[#FFFFFF] rounded-md text-[#637F94] text-[16px] font-[700] px-5 py-2 border-2">
            Reject
          </button>
        </div>

        <div className="flex gap-3 mt-5 ">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[600] text-[#637F94]">Quanty</p>
            <p className="text-[14px] font-[400]">3 MT</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[600] text-[#637F94]">Has No</p>
            <p className="text-[14px] font-[400]">2951000</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[600] text-[#637F94]">CAS No</p>
            <p className="text-[14px] font-[400]">503612-47-3
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-[600] text-[#637F94]">PinCode</p>
            <p className="text-[14px] font-[400]">370001</p>
          </div>
        </div>

<div className="flex gap-3 mt-6 mb-2">
<img src={rac} alt="" />
         <div className="flex flex-col gap-1">
         <p className="text-[16px] font-[400] text-black">Abc ltd. </p>
         <p className="text-[14px] font-[600] text-[#1672DE]">Buyer Id  2541234</p>
          </div>
        </div>

        <div className="pt-4 ">
          <h2 className="text-[16px] font-[600] text-[#00212F]">
            Buyer's Remarks
          </h2>
          <p className="text-[#637F94] text-[14px] font-[400] mt-3">
            Buyer’s Remarks Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum dui, sed id convallis rutrum. <span className="text-[blue]"> <a href="/"> read more </a></span>
          </p>
        </div>
        <div className="mt-9">
          <h2 className="text-[16px] font-[600] ">Documents</h2>
        </div>
        <div className="flex justify-evenly mt-3 mb-2">
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
}
