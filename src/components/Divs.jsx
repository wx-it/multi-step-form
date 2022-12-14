import data from '../assets/data'
import checkMark from '../assets/images/icon-checkmark.svg'
import { useState } from 'react'

const Divs = ({data, time, toggle, on, id}) => {
    function Price(){
        if(time=== true){
            return(
                <p className='text-Purplish-blue text-sm'>+${data.yearly}/yr</p>
            )
        } else{
            return(
                <p className='text-Purplish-blue text-sm'>+${data.monthly}/mo</p>
            )
        }
    }

  return (
    <div onClick={()=>{toggle(id)}} 
    className={on ? 'border border-Purplish-blue rounded-md flex items-center justify-between py-2 px-3 md:w-[450px] md:py-3' 
    : 'border border-Light-gray rounded-md flex items-center justify-between py-2 px-3 md:w-[450px] md:py-3 hover:border-Purplish-blue md:cursor-pointer'}>
 
 <div className='flex items-center justify-between space-x-4 md:space-x-6'>
 <div className={on ? "bg-Purplish-blue border-Cool-gray border w-5 h-5 rounded-md p-1 flex items-center justify-center"
  : "bg-transparent border-Light-gray border w-5 h-5 rounded-md p-1 flex items-center justify-center"}>
    <img src={checkMark} alt="" />
  </div>

  <div className=''>
     <h3 className='font-medium text-Marine-blue'>{data.title}</h3>
     <p className='text-Cool-gray text-sm'>{data.description}</p>
   </div>
 </div>
   <Price/>
</div>


  )
}

export default Divs