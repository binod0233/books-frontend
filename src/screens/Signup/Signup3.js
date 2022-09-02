import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Signup3 = () => {
  const navigate=useNavigate();
  
  return (
    <div style={{height:"100vh"}}>
      <Button style={{float:"right",margin:"3vh 3vh 0 0"}} onClick={()=>navigate("/signup1")}>Add Another User <i className="fa-solid fa-plus"></i></Button>

    <div className="d-flex flex-col justify-content-center align-items-center" style={{paddingTop:"50px"}}>
     
    <div style={{height:"500px",width:"500px",background:"#fff"}} >
    <p style={{color:"#000", fontWeight:700, textAlign:"center",background:"#fff"}} className="pt-5">You have created your account successfully.
    </p>


    <img src="/tick.gif" alt="tick" className='img-fluid' style={{height:"500px",marginTop:"-21px"}}/>

   
  
    </div>


    </div>
    </div>

  )
}

export default Signup3