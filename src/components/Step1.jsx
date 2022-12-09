import React from 'react'

const Step1 = () => {
  return (
    <div className="border-2 border-black">
   <div className='bg-White py-8 px-4 rounded-lg shadow-xl'>
   <div>
        <h1
        className='text-Marine-blue text-3xl'
        >Personal info</h1>
         <p
         className="text-Cool-gray"
         >Please provide your name, email address, and phone number.</p>
    </div>
  <label htmlFor="">Name</label>
  <input type="text"  placeholder='e.g. Stephen King'/>
  
  <label htmlFor="">Email Address</label>
  <input type="text" placeholder="e.g. stephenking@lorem.com"/>
  
  <label htmlFor="">Phone Number</label>
  <input type="text" placeholder="e.g. +1 234 567 890"/>
  
   </div>
   
     <div>
     <button
       className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4'
     >
      Next Step
      </button>
     </div>
    </div>
  )
}

export default Step1