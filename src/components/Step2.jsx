import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import { useState } from 'react'

const Step2 = ({time, toggle}) => {

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

<div className='space-y-2 mt-5'>
<div className='flex border border-Light-gray rounded-lg items-center space-x-4 py-2 p-4 active:border-Purplish-blue'>
  <div>
    <img src={iconArcade} alt="" />
  </div>
    <div className='block'>
     <h3  className='font-medium text-Marine-blue' >Arcade</h3>
     <p className='text-Cool-gray text-sm'>{time ? "$90/yr" : "$9/mo"}</p>
     {time && <p className='text-sm text-Marine-blue font-normal'>2 months free</p>}
    </div>
</div>

<div className='flex border border-Light-gray rounded-lg items-center space-x-4 py-2 p-4 active:border-Purplish-blue' >
<div>
    <img src={iconAdvanced} alt="" />
  </div>
    <div className='block'>
      <h3  className='font-medium text-Marine-blue' >Advanced</h3>
      <p className='text-Cool-gray text-sm'>{time ? "$120/yr" : "$12/mo"}</p>
     {time && <p className='text-sm text-Marine-blue font-normal'>2 months free</p>}
    </div>
</div>

<div className='flex border border-Light-gray rounded-lg items-center space-x-4 py-2 p-4 active:border-Purplish-blue' >
<div>
    <img src={iconPro} alt="" />
  </div>
    <div className='block'>
      <h3 className='font-medium text-Marine-blue' >Pro</h3>
      <p className='text-Cool-gray text-sm'>{time ? "$150/yr" : "$15/mo"}</p>
     {time && <p className='text-sm text-Marine-blue font-normal'>2 months free</p>}
    </div>
</div>

</div>

<div className='flex items-center justify-center space-x-3 mt-8'>
  
    <span className={time ? 'text-Cool-gray font-bold text-ms' : 'font-bold text-Marine-blue text-ms'} >Monthly</span> 
    
    <label className="inline-flex relative items-center cursor-pointer">
    <input onClick={toggle} type="checkbox" value="" className="sr-only peer"/>
    <div className="w-10 h-5 bg-Marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-White 
    rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
    after:absolute after:top-[2px] after:left-[3.75px] after:bg-White after:border-Marine-blue after:border 
    after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:Marine-blue"></div>
</label>
    <span className={time ? 'text-Marine-blue font-bold text-ms' : 'font-bold text-Cool-gray text-ms'}>Yearly</span>
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

export default Step2