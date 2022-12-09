import React from 'react'

const Step1 = () => {
  return (
    <div className="">
   <div className='bg-White py-8 px-6 rounded-lg shadow-xl'>
   <div>
        <h1
        className='text-Marine-blue text-xl font-bold'
        >Personal info</h1>
         <p
         className="text-Cool-gray w-72 my-1"
         >Please provide your name, email address, and phone number.</p>
    </div>
  <div className="flex flex-col my-5">
  <label
   htmlFor=""
   className='text-sm font-medium text-Marine-blue '
   >Name</label>
  <input
   type="text" 
   placeholder='e.g. Stephen King'
   className='border border-Light-gray py-2 px-3 pl-5 font-normal rounded text-Cool-gray'
   />
  </div>
  <div className='flex flex-col my-5'>
    
  <label
   htmlFor=""
   className='text-sm font-medium text-Marine-blue '
   >Email Address</label>
  <input
   type="text"
   placeholder="e.g. stephenking@lorem.com"
   className='border border-Light-gray py-2 px-3 pl-5 font-normal rounded text-Cool-gray'
   />
  
  </div>
  
  <div className='flex flex-col my-5'>
  <label
   htmlFor=""
   className='text-sm font-medium text-Marine-blue '
   >Phone Number</label>
  <input
   type="text"
   placeholder="e.g. +1 234 567 890"
   className='border border-Light-gray py-2 px-3 pl-5 font-normal rounded text-Cool-gray'
   />
  
  </div>
   </div>
   
     <div>
     <button
       className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms'
     >
      Next Step
      </button>
     </div>
    </div>
  )
}

export default Step1