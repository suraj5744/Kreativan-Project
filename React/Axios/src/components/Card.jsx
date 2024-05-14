import React from "react";
import "./Card.css";
const Card = ({id, photo, title, price, HandleClick}) => {
  return (
    <div className="products" onClick={()=>HandleClick(id)}>
      <div className="image">
        <img src={photo}></img>
      </div>
      <div className="title">
        <div>{title}</div>
      </div>
      
      <div className="price">
        <div>Rs.{price}</div>
      </div>
    </div>
  );
};

export default Card;
