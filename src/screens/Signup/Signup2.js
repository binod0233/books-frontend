import { Dropdown, DropdownButton } from 'react-bootstrap';
import React, { useState } from 'react'
// import {PhoneInputWithCountrySelect,PhoneInput} from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom'

const Signup2 = () => {
  const navigate=useNavigate();
  const[password,setPassword]=useState();
  const[phone,setPhone]=useState();
  // const [role,setRole]=useState();
  const register=()=> {
    navigate("/signup3")
  }
  return (
    <div>
    <div className="sign1-form-container"  >
      <form onSubmit={register} className="sign1-form" style={{background:"#fff"}}>
        <div className="Auth-form-content" style={{background:"#fff"}}>
          <h3 className="Auth-form-title" style={{background:"#fff" ,color:"#7B7B7B"}}> Step 2 of 2</h3>
          <img src="/line2.png" alt="line" className="img-fluid"/>
          <p style={{textAlign:"",background:"#fff"}} className="pt-3">Let’s get started. Set your Password & Role.  </p>
        
        
          <div className="form-group mt-3" style={{background:"#fff"}}>
            <label style={{fontWeight:"300",fontSize:"20px", background:"#fff"}}>Set your Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder=""
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              
            />
          </div>
          
          
          <div className="form-group mt-3" style={{background:"#fff"}}>
            <label style={{fontWeight:"300",fontSize:"20px",background:"#fff"}} >Phone Number</label>
            <input

              type="phone-number"
              className="form-control mt-1"
              placeholder=""
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
             
            />
            </div>
         
          <div className="form-group mt-3" style={{background:"#fff"}}>
            <label style={{fontWeight:"300",fontSize:"20px",background:"#fff"}}>What is your current Role?</label>
            <DropdownButton id="" title="Select a Role">
  <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Team Lead</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Client Manager</Dropdown.Item>
</DropdownButton>
            {/* <input
              type="email"
              className="form-control mt-1"
              placeholder="Select your role"
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              
            /> */}
            </div>
            <div className="d-grid gap-2 mt-3 " style={{background:"#fff"}}>
            <button type="submit" className="btn px-5 my-4" style={{fontSize:"20px", background:"#000",color:"#fff"}}>
              Next
            </button>
          </div>
        

        


          </div>
    </form>
    <hr></hr>
    </div>


    </div>
  )
}

export default Signup2