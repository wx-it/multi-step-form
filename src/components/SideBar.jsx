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
       <div key={item.n} className="md:flex md:items-center md:justify-start md:p-5 md:space-x-3 md:m-0 md:w-full">
       <span onClick={getWidth}
         className='border-White border rounded-full py-2 px-3 md:px-[15px] text-White text-bold text-sm font-medium'
        > {item.n} </span>
       {width >= 500 ? 
       <div className=""> 
          <p className="text-Cool-gray text-sm"> {item.desktopStep} </p> 
          <p className="text-White font-medium"> {item.desktopStepName} </p> 
        </div> : null }
  </div>    
    )
  })

  return (
    <div className='bg-mobileSidebar h-screen w-full bg-no-repeat md:bg-none'>
  <div className='flex justify-center pt-10 space-x-3 md:flex-col'>
  {getN}
  </div>
</div>
  )
}

export default SideBar