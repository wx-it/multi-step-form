import SideBar from "./components/SideBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Divs from "./components/Divs";
import data from "./data";
import { useState } from "react";

function App() {

  const [time, setTime] = useState(false)
  function toggle() {
    setTime(time => !time)
  }

  return (
    <div className="relative">
      <div>
      <SideBar />
      </div>
      <div className="absolute top-24 mx-5">
      <Step1/>
      <Step2 time={time} toggle={toggle} />
      <Step3 time={time} data={data} />
      <Step4/>
      <Step5/>

      </div>
    </div>
  );
}

export default App;
