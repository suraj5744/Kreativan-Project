// import React from 'react'
// import './style.css';
import React from 'react'

const button = ({handler, text}) => {
  return (
    <div>
      <button onClick={handler}><p>{text}</p></button>
    </div>
  )
}

export default button


