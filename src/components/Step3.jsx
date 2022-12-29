import React from 'react'
import { useState } from 'react'
import data from '../data'
import Divs from './Divs'


const Step3 = ({time, data, squares, toggleSquare, getSquares, getBoxes, getAll}) => {
  

  const getData = squares.map((data)=>{
    return <Divs 
                  key={data.id} 
                  id={data.id}
                  on={data.on}
                  toggle={toggleSquare}
                  data={data}
                  time={time}
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
       onClick={()=>{getAll(); getSquares(); getBoxes();}}
       className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms'
    >Next Step</button>
</div>


    </div>
  )
}

export default Step3