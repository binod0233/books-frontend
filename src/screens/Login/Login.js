

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import "../../App.css"
import "./Login.css"


export default function (props) {
  const navigate=useNavigate();
  const users = [{
    email:"teamlead@copenned.com",
    password:"123456",
    role:"teamlead",
    name:"teamlead1",
    id:"1"
  },
  {
    email:"admin@copenned.com",
    password:"123456",
    role:"admin",
    name:"admin1",
    id:"2"
  },
  {
    email:"clientmanager@copenned.com",
    password:"123456",
    role:"clientmanager",
    name:"clientmanager1",
    id:"3"
  }]
  const [e,setE]=useState("");
  const [p,setP]=useState("");
  const [passwordShown,setPasswordShown]=useState(false);
  const togglePassword=()=> {
    setPasswordShown(!passwordShown);
  }
  
  const login=()=>{
console.log(e,p)
    const validEmail=e.substring(e.length-13) === "@copenned.com"
    if (validEmail) {

      const userExist = users.find(user => user.email === e)
      if (userExist) {
        const loggedIn = users.find(user => user.email === e && user.password === p)
        if (loggedIn) {
          localStorage.setItem("user",JSON.stringify(loggedIn))
          if(loggedIn.role==="teamlead"){
            navigate(`/teamlead/dashboard/${loggedIn.name}`)
          } 
          else if(loggedIn.role==="admin"){
            navigate(`/admin/dashboard`)
          } 
          else if(loggedIn.role==="clientmanager"){ 
            navigate(`/dashboard/${loggedIn.name}`)
          } 
        
        }else{
          console.log("password is incorrect")
        }
      }else{
        console.log("user not found")
      }
     
    }
    else{
      alert(" inavalid email. use @copenned.com")
    }
   


  };

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      if(user.role==="teamlead"){
        navigate(`/teamlead/dashboard/${user.name}`)
      }
      else if(user.role==="admin"){
        navigate(`/admin/dashboard`)
      }
      else if(user.role==="clientmanager"){
        navigate(`/dashboard/${user.name}`)
      }
      
    }
  },[])
  return (
    <div className="Auth-form-container">
      <form onSubmit={login} className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">BOOKS</h3>
          <p style={{textAlign:"center"}}>Dont have an account? <a href="/signup1">Sign up.</a></p>
          <div className="form-group mt-3">
            <label style={{fontWeight:"300",fontSize:"20px"}}>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder=""
              value={e}
              onChange={(e)=>setE(e.target.value)}
              required
            />
          </div>
          <p className="forgot-password text-right mt-2" >
            <a onClick={togglePassword} style={{color:"#176EB3"}} href="#">Show/Hide password</a>
          </p>
          <div className="form-group mt-3">
            <label style={{fontWeight:"300",fontSize:"20px"}} >Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control mt-1"
              placeholder=""
              value={p}
              onChange={(e)=>setP(e.target.value)}
              required
             
            />
            
         
          </div>

          <p className="forgot-password text-right mt-2" >
            <a style={{color:"#176EB3"}} href="#">Forgot password?</a>
          </p>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label style={{fontWeight:"300",fontSize:"15px"}} for="rememberMe">Remember me</label>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn px-5" style={{fontSize:"20px", background:"#fff"}}>
              Login
            </button>
          </div>


          <hr></hr>
         
          <button type="submit" className="btn px-5 ms-4" style={{fontSize:"20px",color:"#fff",background:"#17A0C4"}}>
              Login with Copened
            </button>

        </div>
      </form>
    </div>
  )
}