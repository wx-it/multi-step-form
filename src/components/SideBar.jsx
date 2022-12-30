import { useState } from "react"

const SideBar = ({color}) => {

  //change color when step changes, when next step button is clicked, color changes, and so on


  const numbers = [
    {
    n: 1,
    on: false
  },
  {
    n: 2,
    on: false
  },
  {
   n: 3,
   on: false
  },
  {
    n: 4,
    on: false
  }
]
  let getN = numbers.map(item => { 
    return(
      <div key={item.n} >
    <span 
    className='border-White border rounded-full py-2 px-3 text-White text-bold text-sm font-medium'
    > {item.n} </span>
  </div>    
    )
  })

  return (
    <div className='bg-sidebar h-screen w-full bg-no-repeat'>
  <div className='flex justify-center pt-10 space-x-3'>
  {getN}
  </div>
</div>
  )
}

export default SideBar