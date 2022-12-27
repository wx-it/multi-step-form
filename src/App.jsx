import SideBar from "./components/SideBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Divs from "./components/Divs";
import data from "./data";
import plansData from "./plansData";
import { useState } from "react";

function App() {

  const [time, setTime] = useState(false)
  const [boxes, setBoxes] = useState(plansData)
  const [squares, setSquares] = useState(data)
  const [total, setTotal] = useState({
    monthly: '',
    yearly:''
  })

  function toggle() {
    setTime(time => !time)
  }

  const toggleBoxes = function(e, id) {    
    const theBoxes = e.target.closest('.boxes');
    const theBox = e.target.closest('.box');
    const all = theBoxes.querySelectorAll('.box')
    if(!theBoxes)return; 
    all.forEach((box) => {
      box.classList.remove("border-Purplish-blue")
      box.classList.add("border-Light-gray")
      return setBoxes(prevBoxes => {
        return prevBoxes.map((box) => {
            return box.id === id ? {...box, on: !box.on} : box
        })
      })
    });
    theBox.classList.add("border-Purplish-blue");
    theBox.classList.remove("border-Light-gray")
}
   
function toggleSquare(id) {
  setSquares(prevSquares => {
      return prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
      })
  })
}



function getAll(id){
  let allItems = []
  let s = squares.map(square => square.on ? allItems.push(square.monthly) : square)
  let b = boxes.map(box => box.on ? allItems.push(box.monthly) : box)
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

const [addOns, setAddons] = useState([])

function getSquares(){
  console.log(addOns.map(item => item))
  return setAddons(preAddOns => {
    squares.map(square => square.on ? preAddOns.push(square) : square)
    return preAddOns.map(item => item)
  })
}



  return (
    <div className="relative">
      <div>
      <SideBar />
      </div>
      <div className="absolute top-24 mx-5">
      <Step1/>
      <Step2 time={time} toggle={toggle} boxes={boxes} toggleBoxes={toggleBoxes} />
      <Step3 time={time} data={data} squares={squares} toggleSquare={toggleSquare} getAll={getAll} getSquares={getSquares} />
      <Step4 total={total} addOns={addOns} />
      <Step5  />

      </div>
    </div>
  );
}

export default App;
