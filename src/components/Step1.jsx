import React from 'react'

const Step1 = () => {
  return (
    <div className="">
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
  
  <button>Next Step</button>
    </div>
  )
}

export default Step1