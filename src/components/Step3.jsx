import React from 'react'
import { useState } from 'react'
import data from '../data'
import Divs from './Divs'


const Step3 = ({time, data}) => {

  const div = document.querySelectorAll('#yeet')
  const [color, setColor] = useState(false)
  function toggleC(e) {
    if(e.target === div)
    setColor(color => !color)
  }


  
  const getData = data.map((data)=>{
    return <Divs 
                  key={data.id} 
                  data={data}
                  time={time}
                  color={color}
                  />
  })

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
{getData}
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