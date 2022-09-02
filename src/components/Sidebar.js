import React, { useState } from "react";
import '../components/sideMenu.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import LandscapeIcon from "@mui/icons-material/Landscape";
import LogoutIcon from "@mui/icons-material/Logout";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [activeTab, setActiveTab] = useState("0")

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="wrapper">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="side-menus">
            {user && user.role === 'clientmanager'? (
               <>
               <div className="menu-icon" onClick={()=>setActiveTab("1")} style={{background:activeTab==='1'&& '#35373A'}}>
               <Link  to={`/dashboard/${user?.userName}`}>
                 <DashboardIcon className="me-3 " /> Dashboard
               </Link>
             </div>
 
             <div className="menu-icon" onClick={()=>setActiveTab("2")} style={{background:activeTab==='2'&& '#35373A'}}>
               <Link to={`/leads/${user?.userName}`}>
                 <LandscapeIcon className="me-3" />
                 Leads
              </Link>
             </div>
             <div className="menu-icon" onClick={()=>setActiveTab("3")} style={{background:activeTab==='3'&& '#35373A'}}>
               <Link to={`/payment/${user?.userName}`}>
                 <MonetizationOnIcon className="me-3" />
                 Payments
               </Link>
             </div>
               </>
            ): user.role === "admin" ?(
                <>
                <div className="menu-icon">
<<<<<<< HEAD
                  <Link to={`/admin/dashboard`}>
=======
                <Link to={`/admin/dashboard`}>

                <DashboardIcon className="me-3 " /> Dashboard
              </Link>
            </div>
>>>>>>> 0b3c66eb8f8dd8d5c7aca7f875a9b43e5915f4fd

            <div className="menu-icon">
            <Link to={`/admin/allleads`}>
                <LandscapeIcon className="me-3" />
                Leads
              </Link>
            </div>
            <div className="menu-icon">
            <Link to={`/admin/allpayments`}>

<<<<<<< HEAD
                <div className="menu-icon">
                  <Link to={`/admin/allleads`}>
                    <LandscapeIcon className="me-3" />
                    Leads
                  </Link>
                </div>
                <div className="menu-icon">
                  <Link to={`/admin/allpayments`}>

=======
>>>>>>> 0b3c66eb8f8dd8d5c7aca7f875a9b43e5915f4fd
                <MonetizationOnIcon className="me-3" />
                Payments
              </Link>
            </div>
                </>
            ):(
               <>
               <div className="menu-icon">
               <Link to={`/teamlead/dashboard/${user?.userName}`}>
                 <DashboardIcon className="me-3 " /> Dashboard
               </Link>
             </div>
 
             <div className="menu-icon">
             <Link to={`/teamlead/leads/${user?.userName}`}>
                 <LandscapeIcon className="me-3" />
                 Leads
               </Link>
             </div>
             <div className="menu-icon">
             <Link to={`/teamlead/payment/${user?.userName}`}>
                 <MonetizationOnIcon className="me-3" />
                 Payments
               </Link>
             </div>
               </>
            )}
          </div>
        </div>
        <div className="logout">
          <div href={"/"}onClick={()=>           { localStorage.removeItem('user'); navigate('/') 
}} style={{ textDecoration: "none", color: "#fff" }}>
            {" "}
            <LogoutIcon className="me-3" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
