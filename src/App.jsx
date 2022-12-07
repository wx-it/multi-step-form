import SideBar from "./components/SideBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

function App() {
  return (
    <div className="border-2 border-red-500">
      <div>
      <SideBar />
      </div>
      <div>
      <Step1/>
      <Step2/>
      <Step3/>
      <Step4/>
      <Step5/>

      </div>
    </div>
  );
}

export default App;
