import React, { useEffect, useState } from "react";
import "./Logincs.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isAlphabet, setIsAlphabet] = useState(true);

  const Navigate = useNavigate();


  const HandleChange = (event) => {
    const inputValue = event.target.value;
    setValue((value)=>value = inputValue);
  };

  const HandlePassword = (event) => {
    const passwordValue = event.target.value;
    setPass((value) => value = passwordValue);
  };

  const checkUsername = (username)=>{
    let pattern = /[a-zA-Z]+/;
    let matchString = pattern.exec(username);
    if(matchString===null)
      return false;
    else
      return matchString[0].length===username.length;
  }

  const checkPassword = (pass)=>{
    let pattern = /[a-zA-Z\d\$\@\_]+/;
    let matchString = pattern.exec(pass);
    if(matchString===null)
      return false;
    else
      return matchString[0].length===pass.length;
  }
  const HandleUpClick = (event) => {
    event.preventDefault();
    console.log("I am in");
    if (value.length > 0 && pass.length > 0) {
      console.log("Form submitted successfully");
    }
    else{
      console.log("credentials are not valid!")
    }

    if(!checkUsername(value))
    {
      setIsUsernameValid((value)=>value=false);
    }
    else{
      setIsUsernameValid((value)=>value=true);
    }
    if(!checkPassword(pass))
    {
      setIsPasswordValid((value)=>value=false);
    }
    else{
      setIsPasswordValid((value)=>value=true);
    }
    if(checkUsername(value) && checkPassword(pass))
      Navigate('/success');
  };

  return (
    <div>
      <div className="frontpage">
        <div className="logform">
          <div className="wlcm">
            <h3>WELCOME</h3>
          </div>

          <div className="createaccount">
            <div>
              <span id="dont">Don't have an account</span>
              <Link to='/signup' >
                <button id="signupp">Signup</button>
              </Link>
            </div>
          </div>

          <div className="username">
            <div className="userinput">Username</div>
            <div className="inpone">
              <input
                id="inputone"
                type="text"
                placeholder=""
                onChange={() => HandleChange(event)}
              ></input>
            </div>
            {
              isUsernameValid?null:<span id="spann">Please enter a valid username.</span>
            }
          </div>

          <div className="password">
            <div className="userinput">Password</div>
            <div className="inptwo">
              <input
                id="inputtwo"
                type="password"
                placeholder=" "
                onChange={() => HandlePassword(event)}
              ></input>
            </div>
            {
              isPasswordValid?null:<span id="spann" >Please enter a valid password.</span>
            }
          </div>

          <div className="success">
          <button id="loginn" onClick={HandleUpClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
