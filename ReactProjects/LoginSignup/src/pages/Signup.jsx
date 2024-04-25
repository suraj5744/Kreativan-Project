import React, {useEffect, useState } from 'react'
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const[isFirstnameValid, setIsFirstnameValid]=useState(true);
  const[isLatnameValid, setIsLatnameValid]=useState(true);
  const[isEmailValid, setIsEmailValid]=useState(true);
  const[isOnePasswordValid, setIsOnePasswordValid]=useState(true);
  const[isCnfPasswordValid, setIsCnfPasswordValid]=useState(true);
  const[isCnfPasswordNotMatch, setIsCnfPasswordNotMatch]=useState(true);

  const HandleFirstName = (event) => {
    const inputFName = event.target.value;
    setName(inputFName);
  }

  const HandleLastName = (event) => {
    const inputLName = event.target.value;
    setLName(inputLName);
  }

  const HandleEmail = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  }

  const HandleOnePassword = (event) => {
    const inputOPasswordValue = event.target.value;
    setPassword(inputOPasswordValue);
  }

  const HandleConfirmPassword = (event) => {
    const inputCPassword = event.target.value;
    setConfirmPassword(inputCPassword );
  }

  const checkFirstName = (firstname)=>{
    let pattern = /[a-zA-Z]+/;
    let matchString = pattern.exec(firstname);
    
    if(matchString===null)
      return false;
    else
      return matchString[0].length===firstname.length;
  }

  const checkLastName = (lastname)=>{
    let pattern = /[a-zA-Z]+/;
    let matchString = pattern.exec(lastname);
    
    if(matchString===null)
      return false;
    else
      return matchString[0].length===lastname.length;
  }

  const checkEmailName = (emails)=>{
    let pattern = /^[a-zA-Z][a-zA-Z]*\@[a-zA-Z]+\.[a-zA-Z]+/;
    let matchString = pattern.exec(emails);
    
    if(matchString===null)
      return false;
    else
      return matchString[0].length===emails.length;
  }

  const checkOnePassword = (onepassword)=>{
    let pattern = /[a-zA-Z\d]+/;
    let matchString = pattern.exec(onepassword);
    
    if(matchString===null)
      return false;
    else
      return matchString[0].length===onepassword.length;
  }

  const checkCnfPassword = (cnfpassword)=>{
    let pattern = /[a-zA-Z\d]+/;
    let matchString = pattern.exec(cnfpassword);
    
    if(matchString===null)
      return false;
    else
      return matchString[0].length===cnfpassword.length;
  }




  const HandleUpSubmit = (event)=>{
    event.preventDefault();
    if(name.length>0 && lName.length>0 && email.length>0 && password.length>0 && confirmPassword.length>0){
      console.log("Succesfully submitted")
    }
    else{
      console.log(isFirstnameValid);
    }


    if(!checkFirstName(name))
    {
      setIsFirstnameValid((name)=>name=false);
    }
    else{
      setIsFirstnameValid((name)=>name=true);
    }

    if(!checkLastName(lName))
    {
      setIsLatnameValid((name)=>name=false);
    }
    else{
      setIsLatnameValid((name)=>name=true);
    }

    if(!checkEmailName(email))
    {
      setIsEmailValid((name)=>name=false);
      console.log("im if");
    }
    else{
      setIsEmailValid((name)=>name=true);
      console.log("im else");
    }

    if(!checkOnePassword(password))
    {
      setIsOnePasswordValid((name)=>name=false);
    }
    else{
      setIsOnePasswordValid((name)=>name=true);
    }

    if(!checkCnfPassword(confirmPassword))
    {
      setIsCnfPasswordValid((name)=>name=false);
    }
    else  {
      setIsCnfPasswordValid((name)=>name=true);
    }

    const match = (password, cnfpassword) =>{
      if (password === cnfpassword) {
        setIsCnfPasswordNotMatch((name)=>name=true);
      }
      else
      {
        setIsCnfPasswordNotMatch((name)=>name=false);
      }
      return isCnfPasswordNotMatch;
    }
    match(password, confirmPassword);

    const validation = ()=>{
      console.log(checkFirstName(name));
      console.log(checkLastName(lName));
      console.log(checkEmailName(email));
      console.log(checkOnePassword(password));
      console.log(checkCnfPassword(confirmPassword));
      console.log(match(password, confirmPassword));

      if(checkFirstName(name) && checkLastName(lName) && checkEmailName(email) && checkOnePassword(password) && checkCnfPassword(confirmPassword) && match(password, confirmPassword))
      {
        console.log("Im in");
        Navigate('/Acccreated');
      }
      else{
        alert("Form not valid!")
      }
    }
    validation();

  }

  return (
    <div>


      <div className='bdy'>
        <div className="create">
          <div className='meter'>
            <div className='text'>First Name</div>
            <div className='inpu'><input input className='inputt' name='firstName' onChange={() => HandleFirstName(event)}></input></div>
            {
              isFirstnameValid?null:<span id="spann">Please enter your first name.</span>
            }
          </div>

          <div className='meter'>
            <div className='text'>Last Name</div>
            <div className='inpu'><input input className='inputt' onChange={() => HandleLastName(event)}></input></div>
            {
              isLatnameValid?null:<span id="spann">Please enter your last name.</span>
            }
          </div>

          <div className='meter'>
            <div className='text'>Create an Email</div>
            <div className='inpu'><input input className='inputt' type='email' onChange={() => HandleEmail(event)} ></input></div>
            {
              isEmailValid?null:<span id="spann">Please create your email.</span>
            }
          </div>

          <div className='meter'>
            <div className='text'>Create a Password</div>
            <div className='inpu'><input input className='inputt' type='password' onChange={() => HandleOnePassword(event)}></input></div>
            {
              isOnePasswordValid?null:<span id="spann">Please create your password.</span>
            }
          </div>

          <div className='meter'>
            <div className='text'>Confirm Password</div>
            <div className='inpu'><input input className='inputt' onChange={() => HandleConfirmPassword(event)}></input></div>
            {
              isCnfPasswordValid?(
                isCnfPasswordNotMatch?null:<span id="spann">Password do not match !</span>
              ):<span id="spann">Please re-type your password.</span>
            }
          </div>

          <div className='buton'><button id='submitClick' onClick={HandleUpSubmit}>Submit</button></div>

        </div>
      </div>
    </div>
  )
}


export default Signup;