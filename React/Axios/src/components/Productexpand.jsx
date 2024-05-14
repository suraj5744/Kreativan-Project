import React, { useState, useEffect } from "react";
import axios from "axios";
import './Productexpand.css'
import { useParams } from "react-router-dom";

const Productexpand = () => {
  const {id} = useParams();

  const [item, setItem] = useState({});
  const getApiData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setItem(res.data.products[id-1]);
  };

  useEffect(() => {
    getApiData();
  }, []);

  

  console.log(id);
  return (
    <div>
      <div className="expand">
        <div className="image">
          <img id="imgs" src={item.thumbnail}></img>
        </div>
        <div className="details">
          <div className="ttl">
            <div>{item.title}</div>
          </div>

          <div className="prc">
            <div>Rs.{item.price}</div>
          </div>

          <div className="rating">
            <div>Rating :  <span id="rate">{item.rating}</span></div>
          </div>

          <div className="description">
            <div id="desc">Description : </div>
            <div>{item.description}</div>
            <div className="buy"><button>Buy</button></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productexpand;
