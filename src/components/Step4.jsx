import React from 'react'

const Step4 = () => {
  return (
    <div className=''>
  <div  className='bg-White py-8 px-4 rounded-lg shadow-xl'>
  <h2
     className='text-Marine-blue text-xl font-bold'>
    Finishing up
  </h2>
<p 
   className="text-Cool-gray w-72 my-1">
  Double-check everything looks OK before confirming.
</p>
  // Dynamically add subscription and add-on selections here

  <p>
    Total (per month/year)
  </p>

  </div>
  <div 
className='flex justify-between'
>
    <button
      className="text-Cool-gray font-medium"
    >Go Back</button>
    <button
       className='border-2 bg-Purplish-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms'
    >Confirm</button>
</div>


    </div>
  )
}

export default Step4