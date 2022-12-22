import React from 'react'
import checkMark from '../assets/images/icon-checkmark.svg'

const Step3 = () => {
  return (
    <div>
      <div className="bg-White py-8 px-4 rounded-lg shadow-xl">
      <h3
       className='text-Marine-blue text-xl font-bold'
      >Pick add-ons</h3>
         <p
       className="text-Cool-gray w-72 my-1"   
         >Add-ons help enhance your gaming experience.</p>
<div className='space-y-2 mt-5'>
<div className='border border-Light-gray rounded-md flex items-center justify-between p-2'>
  <div className="bg-Purplish-blue w-5 h-5 rounded-md p-1 flex items-center justify-center">
    <img src={checkMark} alt="" />
  </div>
  <div>
  <h3 className='font-medium text-Marine-blue'>Online service</h3>
  <p className='text-Cool-gray text-sm'>Access to multiplayer games</p>
  </div>
  <p className='text-Purplish-blue text-sm'>+$1/mo</p>
</div>

<div className='border border-Light-gray rounded-md flex items-center justify-between p-2'>
    <div className="bg-Purplish-blue w-5 h-5 rounded-md p-1 flex items-center justify-center">
    <img src={checkMark} alt="" />
  </div>  
  <div>
  <h3 className='font-medium text-Marine-blue'>Larger storage</h3>
  <p  className='text-Cool-gray text-sm'>Extra 1TB of cloud save</p>
  </div>  
  <p className='text-Purplish-blue text-sm'>+$2/mo</p>
</div>

<div className='border border-Light-gray rounded-md flex items-center justify-between p-2'>
    <div className="bg-Purplish-blue w-5 h-5 rounded-md p-1 flex items-center justify-center">
    <img src={checkMark} alt="" />
  </div>
  <div>
  <h3 className='font-medium text-Marine-blue'>Customizable Profile</h3>
  <p  className='text-Cool-gray text-sm'>Custom theme on your profile</p>
  </div>
  <p className='text-Purplish-blue text-sm'>+$2/mo</p>
</div>

</div>
      </div>

      <div 
className='flex justify-between'
>
    <button
      className="text-Cool-gray font-medium"
    >Go Back</button>
    <button
       className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms'
    >Next Step</button>
</div>


    </div>
  )
}

export default Step3