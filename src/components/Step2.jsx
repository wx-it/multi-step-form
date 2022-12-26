import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import { useState } from 'react'
import plansData from '../plansData'
import data from '../data'

const Step2 = ({time, toggle}) => {

  const [boxes, setBoxes] = useState(plansData)

  const toggleSquare = function(e, id) {    
    const theBoxes = e.target.closest('.boxes');
    const theBox = e.target.closest('.box');
    const all = theBoxes.querySelectorAll('.box')
    if(!theBoxes)return; 
    all.forEach((box) => {
      box.classList.remove("border-Purplish-blue")
      box.classList.add("border-Light-gray")
      return setBoxes(prevSquares => {
        return prevSquares.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        })
      })
    });
    theBox.classList.add("border-Purplish-blue");
    theBox.classList.remove("border-Light-gray")
}

  
  const getData = boxes.map(data =>{
    function Price(){
      if(time=== true){
          return(
           <p className='text-Cool-gray text-sm'>{data.yearly}</p>
          )
      } else{
          return(
           <p className='text-Cool-gray text-sm'>{data.monthly}</p>
          )
      }
  }
    return(
      <div id='box' onClick={(e)=>{toggleSquare(e, data.id)}} key={data.id} className='box flex border border-Light-gray rounded-lg items-center space-x-4 py-2 p-4'>
  <div>
    <img src={data.image} alt="" />
  </div>
    <div className='block'>
     <h3  className='font-medium text-Marine-blue' >{data.title}</h3>
     <Price/>
     {time && <p className='text-sm text-Marine-blue font-normal'>2 months free</p>}
    </div>
</div>

    )
  })

  return (
  <div>    
  <div className='bg-White py-8 px-4 rounded-lg shadow-xl'>
    
  <h2
    className='text-Marine-blue text-xl font-bold'
  >
    Select your plan</h2>
  <p
   className="text-Cool-gray w-72 my-1"
  >You have the option of monthly or yearly billing.</p>

<div id='boxes' className='boxes space-y-2 mt-5'>
{getData}

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