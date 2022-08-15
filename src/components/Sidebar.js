import React from "react";
import '../components/sideMenu.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import LandscapeIcon from "@mui/icons-material/Landscape";
import LogoutIcon from "@mui/icons-material/Logout";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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
               <div className="menu-icon">
               <a href={`/dashboard/${user?.name}`}>
                 <DashboardIcon className="me-4 " /> Dashboard
               </a>
             </div>
 
             <div className="menu-icon">
               <a href={`/leads/${user?.name}`}>
                 <LandscapeIcon className="me-4" />
                 Leads
               </a>
             </div>
             <div className="menu-icon">
               <a href={`/payment/${user?.name}`}>
                 <MonetizationOnIcon className="me-4" />
                 Payments
               </a>
             </div>
               </>
            ): user.role === "admin" ?(
                <>
                <div className="menu-icon">
                <a href={`/admin/dashboard`}>

                <DashboardIcon className="me-4 " /> Dashboard
              </a>
            </div>

            <div className="menu-icon">
            <a href={`/admin/allleads`}>
                <LandscapeIcon className="me-4" />
                Leads
              </a>
            </div>
            <div className="menu-icon">
            <a href={`/admin/allpayments`}>

                <MonetizationOnIcon className="me-4" />
                Payments
              </a>
            </div>
                </>
            ):(
               <>
               <div className="menu-icon">
               <a href={`/teamlead/dashboard/${user?.name}`}>
                 <DashboardIcon className="me-4 " /> Dashboard
               </a>
             </div>
 
             <div className="menu-icon">
             <a href={`/teamlead/leads/${user?.name}`}>
                 <LandscapeIcon className="me-4" />
                 Leads
               </a>
             </div>
             <div className="menu-icon">
             <a href={`/teamlead/payment/${user?.name}`}>
                 <MonetizationOnIcon className="me-4" />
                 Payments
               </a>
             </div>
               </>
            )}
          </div>
        </div>
        <div className="logout">
          <div href={"/"}onClick={()=>           { localStorage.removeItem('user'); navigate('/') 
}} style={{ textDecoration: "none", color: "#fff" }}>
            {" "}
            <LogoutIcon className="me-4" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
