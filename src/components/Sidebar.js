import React, { useEffect } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LandscapeIcon from '@mui/icons-material/Landscape';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Sidebar = () => {
   
    const user =JSON.parse(localStorage.getItem("user"))

    
  return (
    <div>
       <div style={{height:"100vh",width:"100%",background:"#222529",position:"sticky",top:"0"}}>
          <img src="/logo.png" alt="logo" className='img-fluid py-5' style={{paddingButton:""}}/>

          {user.role === "clientmanager" ? (
            <div style={{color:"#fff",fontWeight:"700",fontSize:"18px"}} className="menu ps-5" >

<div className='py-5'>

<a href={`/dashboard/${user?.name}`} style={{textDecoration:"none",color:"#fff"}}>  <DashboardIcon  className="me-4 "/> Dashboard </a>
</div>
<div className='pb-5' >

 <a href={`/leads/${user?.name}`} style={{textDecoration:"none",color:"#fff"}}><LandscapeIcon className="me-4"/>Leads</a> 
</div>

<div>

<a href={`/payment/${user?.name}`} style={{textDecoration:"none",color:"#fff"}}> <MonetizationOnIcon className='me-4'/>Payments</a>
</div>


</div>
          ) :user.role==="admin"? (

            <div style={{color:"#fff",fontWeight:"700",fontSize:"18px"}} className="menu ps-5" >

           <div className='py-5'>
           
           <a href={`/admin/dashboard`} style={{textDecoration:"none",color:"#fff"}}>  <DashboardIcon  className="me-4 "/> Dashboard </a>
           </div>
           <div className='pb-5' >

            <a href={`/admin/allleads`} style={{textDecoration:"none",color:"#fff"}}><LandscapeIcon className="me-4"/>Leads</a> 
           </div>

           <div>
           
           <a href={`/admin/allpayments`} style={{textDecoration:"none",color:"#fff"}}> <MonetizationOnIcon className='me-4'/>Payments</a>
           </div>

           
          </div>
          ):(
            <div style={{color:"#fff",fontWeight:"700",fontSize:"18px"}} className="menu ps-5" >

           <div className='py-5'>
           
           <a href={`/teamlead/dashboard/${user?.name}`} style={{textDecoration:"none",color:"#fff"}}>  <DashboardIcon  className="me-4 "/> Dashboard </a>
           </div>
           <div className='pb-5' >

            <a href={`/teamlead/leads/${user?.name}`} style={{textDecoration:"none",color:"#fff"}}><LandscapeIcon className="me-4"/>Leads</a> 
           </div>

           <div>
           
           <a href={`/teamlead/payment/${user?.name}`} style={{textDecoration:"none",color:"#fff"}}> <MonetizationOnIcon className='me-4'/>Payments</a>
           </div>

           
          </div>
          )}
          
          
       </div>


    </div>
  )
}

export default Sidebar