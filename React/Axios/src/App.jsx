import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { useNavigate } from "react-router-dom";

const App = () => {
  const Navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  
  const getApiData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setMyData(res.data.products);
    
  };

  useEffect(() => {
    getApiData();
  }, []);

  const HandleClick = (id) =>{
    Navigate(`product/${id}`)
  }

  console.log(myData);
  return (
    <div className="grid">
      {
        myData && myData.length>0
        ? myData.map((item)=>{
          return <Card photo={item.thumbnail} title={item.title} price={item.price} id={item.id} HandleClick={HandleClick} key={item.id}/>
        })
        :<div>No product is loaded yet</div>
      }
    </div>
  );
};
export default App;
