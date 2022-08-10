import React from "react";
import "./Header.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import { useNavigate } from 'react-router-dom'
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "react-bootstrap";
const Header = () => {
    const  navigate = useNavigate();
    const [keyword,setKeyword] = React.useState('')

  const searchKeyword = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="main px-4">
      <div className="header-wrapper">
        <div className="header-title">
          <i class="fa-bold fa-greater-than" /> Dashboard
        </div>
        <div className="search">
          <div className="search-bar">
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
          </div>
        </div>
        
        <div className="account">
          <div className="acc-icon">
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