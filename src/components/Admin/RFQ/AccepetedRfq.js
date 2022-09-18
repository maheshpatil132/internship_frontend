import React from 'react'
import updown from "./rfqimg/updown.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Header from '../../Header';

export default function Activerfq() {
  return (
    <div className='flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen'>
   <Header/>
  <div className=''>
  <div className='flex gap-4 mt-16'>
  <img src={updown} alt="" className='p-3 h-[70px] bg-[#E6F3FF]' />
  <div className='flex flex-col  '>
  <p className='text-[#637F94] text-[20px] font-[400]'>Total RFQs</p>
  <h2 className='text-[48px] font-[600] -mt-3'>15000</h2>
  </div>
  </div>



  <div className="track_mid ">
  <div className="first">
    <div className="flex">
      <p className="flex-1">Preparing</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>

    <h3>15000</h3>
  </div>
  <div className="second">
    <div className="flex">
      <p className="flex-1">Preparing</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>
    <h3>15000</h3>
  </div>
  <div className="third">
    <div className="flex">
      <p className="flex-1">Preparing</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>
    <h3>15000</h3>
  </div>
  <div className="third">
    <div className="flex">
      <p className="flex-1">Delivered</p>
      <ChevronRightIcon className="mt-2 mr-4" />
    </div>
    <h3>15000</h3>
  </div>
</div>




<div class="flex flex-col mt-7">
<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 inline-block w-[90%] sm:px-6 lg:px-8">
    <div class="overflow-hidden">
      <table class="min-w-full text-black text-1xl font-normal ">
        <thead class="">
        
        </thead>
        <tbody>
          <tr className="border-b h-12 hover:border-b  hover:border-blue-500">
           
            <td class="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
            #5234234
            </td>
            <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
            Productname sdf dfsdbdf ffsb
            </td>
            <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
            24/4/2002
            </td>
            <td class="text-sm  rounded-md  font-light px-6 py-4 whitespace-nowrap">
           <p className='bg-[#1FACFB66] px-3 py-2 rounded-md text-center '> In Transit </p>
            </td>
            <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
            Rs 150942
            
            </td>
          
           <td class="text-sm  font-light  whitespace-nowrap">
         <ChevronRightIcon/>
          
          </td>
          </tr>
          <tr className="border-b h-12 hover:border-b  hover:border-blue-500">
        
          <td class="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
          #5234234
          </td>
          <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
          Productname sdf dfsdbdf ffsb
          </td>
          <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
          24/4/2002
          </td>
          <td class="text-sm  rounded-md  font-light px-6 py-4 whitespace-nowrap">
         <p className='bg-[#1FACFB66] px-3 py-2 rounded-md text-center '> In Transit </p>
          </td>
          <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
          Rs 150942
          
          </td>
        
         <td class="text-sm  font-light  whitespace-nowrap">
       <ChevronRightIcon/>
        
        </td>
        </tr>
        <tr className="border-b h-12 hover:border-b  hover:border-blue-500">
       
        <td class="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
        #5234234
        </td>
        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
        Productname sdf dfsdbdf ffsb
        </td>
        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
        24/4/2002
        </td>
        <td class="text-sm  rounded-md  font-light px-6 py-4 whitespace-nowrap">
       <p className='bg-[#FFF61C] px-3 py-2 rounded-md text-center'> Preparing </p>
        </td>
        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
        Rs 150942
        
        </td>
      
       <td class="text-sm  font-light  whitespace-nowrap">
     <ChevronRightIcon/>
      
      </td>
      </tr>
      <tr className="border-b h-12 hover:border-b  hover:border-blue-500">
     
      <td class="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
      #5234234
      </td>
      <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
      Productname sdf dfsdbdf ffsb
      </td>
      <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
      24/4/2002
      </td>
      <td class="text-sm  rounded-md  font-light px-6 py-4 whitespace-nowrap">
     <p className='bg-[#64FF1C] px-3 py-2 text-center rounded-md '> Delivered </p>
      </td>
      <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
      Rs 150942
      
      </td>
    
     <td class="text-sm  font-light  whitespace-nowrap">
   <ChevronRightIcon/>
    
    </td>
    </tr>
         

        
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>


</div>
    </div>
  )
}
