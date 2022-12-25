import data from '../data'
import checkMark from '../assets/images/icon-checkmark.svg'
import { useState } from 'react'

const Divs = ({data, time, toggle, on, id}) => {

    let monthly = data.monthly
    let yearly = data.yearly
    function Price(){
        if(time=== true){
            return(
                <p className='text-Purplish-blue text-sm'>{data.yearly}</p>
            )
        } else{
            return(
                <p className='text-Purplish-blue text-sm'>{data.monthly}</p>
            )
        }
    }

  return (
    <div onClick={()=>{toggle(id)}} 
    className={on ? 'border border-Purplish-blue rounded-md flex items-center justify-between py-2 px-3' 
    : 'border border-Cool-gray rounded-md flex items-center justify-between py-2 px-3'}>
 
  <div className={on ? "bg-Purplish-blue border-Cool-gray border w-5 h-5 rounded-md p-1 flex items-center justify-center"
  : "bg-transparent border-Cool-gray border w-5 h-5 rounded-md p-1 flex items-center justify-center"}>
    <img src={checkMark} alt="" />
  </div>

  <div className=''>
     <h3 className='font-medium text-Marine-blue'>{data.title} </h3>
     <p className='text-Cool-gray text-sm'>{data.description}</p>
   </div>
   <Price/>
</div>


  )
}

export default Divs