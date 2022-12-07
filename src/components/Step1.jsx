import React from 'react'

const Step1 = () => {
  return (
    <div className="border-2 border-black">
   <div className='bg-white mx-5 py-8 px-4 rounded-lg shadow-xl'>
   <div>
        <h1>Personal info</h1>
         <p>Please provide your name, email address, and phone number.</p>
    </div>
  <label htmlFor="">Name</label>
  <input type="text"  placeholder='e.g. Stephen King'/>
  
  <label htmlFor="">Email Address</label>
  <input type="text" placeholder="e.g. stephenking@lorem.com"/>
  
  <label htmlFor="">Phone Number</label>
  <input type="text" placeholder="e.g. +1 234 567 890"/>
  
   </div>
  <button>Next Step</button>
    </div>
  )
}

export default Step1