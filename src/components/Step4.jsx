import React from 'react'

const Step4 = ({total, addOns}) => {

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

<div className="flex justify-between items-center border-b border-Light-gray py-1">
  <div className=''>
    <p className='text-Marine-blue font-bold text-ms' >Arcade (Monthly)</p>
    <button className='text-Cool-gray underline decoration-2'>Change</button>
  </div>
  <p className='font-bold text-Marine-blue' >${total.monthly}/mo</p>
</div>
  <div>

  </div>

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