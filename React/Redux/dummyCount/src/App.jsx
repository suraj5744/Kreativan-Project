import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { incNumber, decNumber } from './actions/Index';

const App = () => {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
    <div><button onClick={()=>dispatch(decNumber())}>-</button></div>
    <div><input value={myState}></input></div>
    <div><button onClick={()=>dispatch(incNumber())}>+</button></div>
    </div>
  )
}

export default App