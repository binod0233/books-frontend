import React, { useEffect, useState } from 'react'
import { Col,  Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BulletRangeDirective } from '@syncfusion/ej2-react-charts'
// import Login from '../Login/Login'

const Signup1 = () => {
  const navigate=useNavigate();
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState();
  const[phone,setPhone]=useState("");
  const [role,setRole]=useState("clientmanager");
  const [activeState,setActiveState]=useState("first");
  const register=(e)=>{
    e.preventDefault();
    const validEmail=email.substring(email.length-13)==="@copenned.com"
    if (validEmail){
      axios.post("http://localhost:8080/api/user/registerAppUser",{userName:firstName+" "+lastName,email,password,phone,role}).then(res=>{
        if(res.status===200){
          navigate("/signup3")
        }
        else{
          alert("There was a problem creating your account")
        }
      })

     
    }
    
    else{
      alert("plz enter email with @copenned.com")
    }


  }

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      
       
    }
  },[])
  return (
    <div >
       <p style={{float:"right", marginTop:""}}><a href="/">Login</a></p>
           
       <div className="sign1-form-container"  >
      <form onSubmit={register} className="sign1-form" style={{background:"#fff"}}>
        <div className="" style={{background:"#fff",display:activeState==="first"?"block":"none" }}>
          <h3 className="Auth-form-title" style={{background:"#fff" ,color:"#7B7B7B"}}> Step 1 of 2</h3>
          <img src="/line.png"  alt='line' className="img-fluid"/>
          <p style={{textAlign:"",background:"#fff"}} className="pt-3">Welcome to the Copenned-Books. </p>
         <Row style={{background:"#fff"}}>
           <Col style={{background:"#fff"}}>
          <div className="form-group mt-3" style={{background:"#fff"}}>
            <label style={{fontWeight:"300",fontSize:"20px", background:"#fff"}}>First Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder=""
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              required
            />
          </div>
          </Col>
          <Col style={{background:"#fff"}}>
          <div className="form-group mt-3" style={{background:"#fff"}}>
            <label style={{fontWeight:"300",fontSize:"20px",background:"#fff"}} >Last Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder=""
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
             required
            />
            </div>
          </Col>
          </Row>
          <div className="form-group mt-3" style={{background:"#fff"}}>
            <label style={{fontWeight:"300",fontSize:"20px",background:"#fff"}}>Work Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder=""
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            </div>
            <div className="d-grid gap-2 mt-3">
            <button  className="btn px-5" style={{fontSize:"20px", background:"#000",color:"#fff"}} onClick={()=>setActiveState("second")}>
              Next
            </button>
          </div>
         
         
<hr/>

          <div className="d-grid gap-2 mt-4 ">
            <button type="submit" className="btn px-5" style={{fontSize:"20px", background:"#f3f3f3",color:"#7b7b7b"}}>
              Signup with Copened
            </button>
          </div>

          <p style={{background:"#fff",textAlign:"center"}} className="py-5">By signing up, you accept our <a href="/termsamdconditions">Terms of Service</a> and <a href="/privacypolicy">Privacy Policy.</a>
Already have an account? <a href="/">Log in</a></p>


          </div>

          <div className="" style={{background:"#fff",display:activeState==="second"?"block":"none" }}>
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
            <select  onChange={(e)=>setRole(e.target.value)}>
  <option value="admin">Admin</option>
  <option value="teamlead">Team Lead</option>
  <option value="clientmanager">Client Manager</option>
</select>
            
            </div>
            <div className="d-grid gap-2 mt-3 " style={{background:"#fff"}}>
            <button type="submit" className="btn px-5 my-4" style={{fontSize:"20px", background:"#000",color:"#fff"}} >
              Submit
            </button>
          </div>
        

        


          </div>

          {/* <div style={{height:"500px",width:"500px",background:"#fff",display:activeState==="third"?"block":"none" }} >
    <p style={{color:"#000", fontWeight:700, textAlign:"center",background:"#fff"}} className="pt-5">You have created your account successfully.
    </p>


    <img src="/tick.gif" alt="tick" className='img-fluid' style={{height:"500px",marginTop:"-21px"}}/>

    <p style={{color:"#000", fontWeight:400, textAlign:"center",background:"#fff",paddingTop:"250px",fontStyle:"italic",marginTop:"-270px"}} className="">Now you can log into the Books
    </p>
    <div className="d-grid gap-2 mt-3 " style={{background:"#fff"}}>
            <button  className="btn px-2 my-4" style={{fontSize:"20px", background:"#000",color:"#fff"}}>
              Log in
            </button>
            
          </div>
          </div> */}
    </form>
    <hr></hr>
    </div>
  </div>
  )
}

export default Signup1