import { useState } from "react";
// import "./App.css";
import './style.css'
import Button from "./components/Button";
import PracticePro from "./components/PracticePro";
import NewThings from "./components/NewThings";
function App() {
  const [value, setValue ]= useState(true);

  const handleMinus=()=>{
    setValue(value-1);
    
  }
  

  const handleReset=()=>{
    setValue(0)
  }
  
  const handlePlus=()=>{
    setValue(value+1);
    
  }
 

  return (
    < div className={`flex flex-col h-screen w-full justify-center items-center`}>
      {/* <p className="text-green-700 text-3xl font-bold">{value}</p>
      <NewThings product={handleMinus} results={"-"}/>
      <NewThings product={handleReset} results={"Reset"} />
      <NewThings product={handlePlus} results={"+"}/> */}
      <NewThings />

    </div>
  );
}

export default App;
