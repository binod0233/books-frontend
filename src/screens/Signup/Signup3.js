import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup3 = () => {
  const navigate=useNavigate();
  const login=()=> {
navigate("/")
  }
  return (
    <div className="d-flex flex-col justify-content-center align-items-center" style={{paddingTop:"200px"}}>
     
    <div style={{height:"500px",width:"500px",background:"#fff"}} >
    <p style={{color:"#000", fontWeight:700, textAlign:"center",background:"#fff"}} className="pt-5">You have created your account successfully.
    </p>


    <img src="/tick.gif" alt="tick" className='img-fluid' style={{height:"500px",marginTop:"-21px"}}/>

    <p style={{color:"#000", fontWeight:400, textAlign:"center",background:"#fff",paddingTop:"250px",fontStyle:"italic",marginTop:"-270px"}} className="">Now you can log into the Books
    </p>
  <form onSubmit={login}>
    <div className="d-grid gap-2 mt-3 " style={{background:"#fff"}}>
            <button type="submit" className="btn px-2 my-4" style={{fontSize:"20px", background:"#000",color:"#fff"}}>
              Log in
            </button>
            
          </div>
          </form>
    </div>


    </div>
  )
}

export default Signup3