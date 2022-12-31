import { useState, useEffect } from "react"

const SideBar = ({color}) => {

  //change color when step changes, when next step button is clicked, color changes, and so on


  const numbers = [
    {
    n: 1,
    desktopStep: "STEP 1",
    desktopStepName : "YOUR INFO",
    on: false
  },
  {
    n: 2,
    desktopStep: "STEP 2",
    desktopStepName : "SELECT PLAN",
    on: false
  },
  {
   n: 3,
   desktopStep: "STEP 3",
   desktopStepName : "ADD-ONS",
   on: false
  },
  {
    n: 4,
    desktopStep: "STEP 4",
    desktopStepName : "SUMMARY",
    on: false
  }
]

const [width, setWidth] = useState(window.innerWidth);
function getWidth(){
  setWidth(window.innerWidth);
}

useEffect(() => {
  window.addEventListener("resize", getWidth);
  return () => window.removeEventListener("resize", getWidth);
});

  let getN = numbers.map(item => { 
    return(
      <div key={item.n} >
    <span onClick={getWidth}
    className='border-White border rounded-full py-2 px-3 text-White text-bold text-sm font-medium'
    > {item.n} </span>
    {width >= 500 ? <div> <p> {item.desktopStep} </p> <p> {item.desktopStepName} </p> </div> : null }
  </div>    
    )
  })

  return (
    <div className='bg-mobileSidebar h-screen w-full bg-no-repeat md:bg-none'>
  <div className='flex justify-center pt-10 space-x-3 md:flex-col md:justify-between md:items-start '>
  {getN}
  </div>
</div>
  )
}

export default SideBar