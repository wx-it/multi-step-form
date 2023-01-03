import SideBar from "./components/SideBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import data from "./assets/data";
import thePlansData from "./assets/plansData";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  
  const [plansData, setPlansData] = useState(thePlansData)
  const [time, setTime] = useState(false)
  const [addonsData, setAddonsData] = useState(data)
  const [total, setTotal] = useState({
    monthly: '',
    yearly:''
  })
  const [addOns, setAddons] = useState([])
  const [plans, setPlans] = useState([])
  const [change, setChange] = useState(false)


  //...................TOGGLE...FUNCTIONS.......................................
  
  function toggleChange() {
    setChange(prevChange => !prevChange)
  }
  
  function toggle() {
    setTime(time => !time)
  }


  //...................STEP2...FUNCTIONS.......................................

  const toggleplansData = function(e, id) {    
    const theplansData = e.target.closest('.boxes');
    const theBox = e.target.closest('.box');
    const all = theplansData.querySelectorAll('.box')
    if(!theplansData)return;
    all.forEach((box) => {
      box.classList.remove("border-Purplish-blue")
      box.classList.add("border-Light-gray")
    });
    theBox.classList.add("border-Purplish-blue");
    theBox.classList.remove("border-Light-gray")
}

function toggleState(id) {
      return setPlansData(plansData =>{
        return plansData.map(plan =>{
          return plan.id === id ? {...plan, on: !plan.on} : plan
        })
      }) 
    }


    
function getplansData(){
  return setPlans(prevPlans => {
    return plansData.map((box=>{
      return box.on ? box : prevPlans.push(box)  ;
    }))
  })
}

  //...................STEP3...FUNCTIONS.......................................
  
function toggleAddons(id) {
  return setAddonsData(addOns =>{
    return addOns.map(addon =>{
      return addon.id === id ? {...addon, on: !addon.on} : addon
    })
  })
}



function getaddonsData(){
  return setAddons(preAddOns => {
    return addonsData.map((square=>{
     return square.on ? square : preAddOns.push(square) ; 
    }))
  })
}



  //...................TOTAL...PRICE...FUNCTIONS.......................................

function getAll() {

function getMonthlyTotal(id){
  let allItems = []
  let s = addonsData.map(square => square.on ? allItems.push(square.monthly) : null)
  let b = plansData.map(box => box.on ? allItems.push(box.monthly) : null).filter(item => item !== null)
  let totalMonthly =  allItems.reduce((total, item) =>{
    return item + total
  }, 0)
  
  return setTotal(prevTotal => {
    return{
      ...prevTotal,
      monthly: totalMonthly
    }
  }) 
}

function getYearlyTotal(id){
  let allItems = []
  let s = addonsData.map(square => square.on ? allItems.push(square.yearly) : square)
  let b = plansData.map(box => box.on ? allItems.push(box.yearly) : box)
  let totalYearly =  allItems.reduce((total, item) =>{
    return item + total
  }, 0)
  
  return setTotal(prevTotal => {
    return{
      ...prevTotal,
      yearly: totalYearly
    }
  }) 
}

getMonthlyTotal()
getYearlyTotal()

}


const [color, setColor] = useState(false)

function changeNumColor(){
  setColor(color => !color)
}


  return (
    <div className="relative md:flex md:justify-center md:items-center md:h-screen md:w-full md:bg-Light-blue ">
      <div className="md:flex md:items-center md:px-4 md:py-4 md:pr-28 md:bg-White md:space-x-14 md:rounded-xl " >
      <div className="">
      <SideBar color={color} />
      </div>
      <div className="absolute top-24 mx-5 md:relative md:top-0 md:m-0 md:shadow-none">
      <Routes>
      <Route path="/" element={<Step1 changeNumColor={changeNumColor} />} />
      <Route path="/step2" element={<Step2 time={time} toggle={toggle} plansData={plansData} toggleState={toggleState} toggleplansData={toggleplansData} />} />
      <Route path="/step3" element={<Step3 time={time} data={data} addonsData={addonsData} toggleAddons={toggleAddons} getaddonsData={getaddonsData} getplansData={getplansData} getAll={getAll}/>} />
      <Route path="/step4" element={<Step4 total={total} addOns={addOns} plans={plans} toggle={toggle} time={time} toggleChange={toggleChange} change={change}/>} />
      <Route path="step5" element={<Step5  />} />
      </Routes>

      </div>
      </div>
    </div>
  );
}

export default App;
