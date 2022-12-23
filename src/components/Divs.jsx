import React from 'react'
import checkMark from '../assets/images/icon-checkmark.svg'


const Divs = ({data, color, time}) => {

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
    <div className='border border-Purplish-blue rounded-md flex items-center justify-between p-2'>
 
  <div className="bg-Purplish-blue border-Cool-gray border w-5 h-5 rounded-md p-2 flex items-center justify-center">
    <img src={checkMark} alt="" />
  </div>

  <div className='border border-black'>
     <h3 className='font-medium text-Marine-blue'>{data.title} </h3>
     <p className='text-Cool-gray text-sm'>{data.description}</p>
   </div>
   <Price/>
</div>


  )
}

export default Divs