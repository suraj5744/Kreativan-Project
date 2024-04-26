import React from 'react'
import "./Navb.css";

const Navb = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Suraj</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className='n-list'>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonals</li>
            </ul>
        
        </div>
        <button className="button">Contact us </button>
      </div>


    </div>
  )
}

export default Navb
