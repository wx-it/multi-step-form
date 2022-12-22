import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'


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

<div className='space-y-2 mt-5'>
<div className='flex border-2 border-black rounded-md items-center space-x-4 p-2'>
  <div>
    <img src={iconArcade} alt="" />
  </div>
    <div className='block'>
     <h3>Arcade</h3>
     <p>$9/mo</p>
    </div>
</div>

<div className='flex border-2 border-black rounded-md items-center space-x-4 p-2' >
<div>
    <img src={iconAdvanced} alt="" />
  </div>
    <div className='block'>
      <h3>Advanced</h3>
      <p>$12/mo</p>
    </div>
</div>

<div className='flex border-2 border-black rounded-md items-center space-x-4 p-2' >
<div>
    <img src={iconPro} alt="" />
  </div>
    <div className='block'>
      <h3>Pro</h3>
      <p>$15/mo</p>
    </div>
</div>

</div>

<div>
    <p>Monthly</p>
    <p>Yearly</p>
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