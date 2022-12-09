import React from 'react'

const Step2 = () => {
  return (
  <div className=''>    
  <div className='bg-White py-8 px-4 rounded-lg shadow-xl'>
    
  <h2
    className='text-Marine-blue text-xl font-bold'
  >
    Select your plan</h2>
  <p
   className="text-Cool-gray w-72 my-1"
  >You have the option of monthly or yearly billing.</p>

<div>
    <h3>Arcade</h3>
    <p>$9/mo</p>
</div>
<div>
    <h3>Advanced</h3>
    <p>$12/mo</p>
</div>
<div>
    <h3>Pro</h3>
    <p>$15/mo</p>
</div>
<div>
    <p>Monthly</p>
    <p>Yearly</p>
</div>
  </div>

<div>
    <button>Go Back</button>
    <button
       className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms'
    >Next Step</button>
</div>

  </div>
  )
}

export default Step2