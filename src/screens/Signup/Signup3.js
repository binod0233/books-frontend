import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Signup3 = () => {
  const navigate=useNavigate();
 
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{paddingTop:"50px"}}>
      <Button style={{marginLeft:"auto",marginRight:"100px"}} onClick={()=>navigate("/signup1")}>Add Another User</Button>
     
    <div style={{height:"500px",width:"500px",background:"#fff"}} >
    <p style={{color:"#000", fontWeight:700, textAlign:"center",background:"#fff"}} className="pt-5">You have created your account successfully.
    </p>


    <img src="/tick.gif" alt="tick" className='img-fluid' style={{height:"500px",marginTop:"-21px"}}/>

    <p style={{color:"#000", fontWeight:400, textAlign:"center",background:"#fff",paddingTop:"250px",fontStyle:"italic",marginTop:"-270px"}} className="">Now you can log into the Books
    </p>
  
    </div>


    </div>
  )
}

export default Signup3