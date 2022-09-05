import React from "react";
import "./Header.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import { useNavigate } from 'react-router-dom'
import PersonIcon from "@mui/icons-material/Person";
const Header = () => {
    const  navigate = useNavigate();


  return (
    <div className="main px-4">
      <div className="header-wrapper">
        <div className="header-title">
          <i className="fa-bold fa-greater-than" /> Dashboard
        </div>
        <div className="search">
          {/* <div className="search-bar">
            <div className="search-inputs" onSubmit={searchKeyword}>
              <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <div className="search-input">
                <input
                  placeholder="Search anything"
                  type="text"
                  value={keyword}
                  onChange={() => setKeyword()}
                />
              </div>
            </div>
            <div className="plus">
              <button type="submit">
                <i className="fa-solid fa-plus text-black" />
              </button>
            </div>
          </div> */}
        </div>
        
        <div className="account">
          <div onClick={()=>{
            if(JSON.parse(localStorage.getItem('user')).role!=="clientmanager"){
              navigate("/signup1")
            }
            
            }} className="acc-icon">
            <PersonAddAltIcon />
          </div>
          <div className="acc-icon">
            <NotificationAddIcon />
          </div>
          <div className="acc-icon">
            <PersonIcon />
          </div>
           

    </div>
      </div>
    </div>
  );
};

export default Header;
