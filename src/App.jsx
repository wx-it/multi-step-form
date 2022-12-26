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

  return (
    <div className="relative">
      <div>
      <SideBar />
      </div>
      <div className="absolute top-24 mx-5">
      <Step1/>
      <Step2 time={time} toggle={toggle} boxes={boxes} toggleBoxes={toggleBoxes} />
      <Step3 time={time} data={data} />
      <Step4/>
      <Step5/>

      </div>
    </div>
  );
}

export default App;
