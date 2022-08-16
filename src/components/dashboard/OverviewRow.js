import React from "react";
import {  Button } from "react-bootstrap";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useNavigate } from "react-router-dom";


const OverviewRow = ({ name, email,id,role,teamLead, totalSales, conversion, totalEarned }) => {
  const navigate = useNavigate(

  )
  return (
    <div className="py-4">
      <div
        className="ProfileOverview"
        style={{ background: "white", height: "82vh", padding: "1vh" }}
      >
        <div
          style={{
            height: "13vh",
            background: "#DD2A7B",
            borderRadius: "2vh",
            display: "flex",
            justifyContent: "space-between",
            padding: "1vh",
            color: "white",
          }}
        >
          <div style={{ fontWeight: "700", fontSize: "20px" , cursor:'pointer'}}>Profile</div>
          <div>
            <SettingsIcon style={{ cursor:'pointer'}} />
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <img
            src="/images/dashboard/avatar.png"
            alt="avatar"
            style={{
              height: "13vh",
              width: "13vh",
              marginTop: "-9vh",
              marginBottom: "1vh",
              marginLeft: "2vh",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div style={{ fontWeight: "700", fontSize: "20px" }}>{name}</div>
          <div style={{ color: "#92959A", fontSize: "15px" }}>{email}</div>
        </div>

        <div
          className="d-flex mt-2 mb-3"
          style={{ height: "13vh", width: "100%" }}
        >
          <div
            className="d-flex flex-column align-items-center"
            style={{
              borderRight: "2px solid #CDCDCD",
              fontSize: "12px",
              color: "grey",
              width: "50%",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                background: "#FFC3DE",
                height: "6vh",
                width: "6vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/images/dashboard/dollar.png"
                alt="dollar"
                style={{ height: "2.5vh" }}
              />
            </div>
            <div
              style={{ marginBottom: "-5vh", marginTop: "2vh" }}
              className="d-flex flex-column align-items-center"
            >
              <span
                style={{ fontSize: "18px", fontWeight: "700", color: "black" }}
              >
                {totalSales}
              </span>
              <span style={{ fontSize: "13px" }}>Total No. of Sales</span>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-center"
            style={{ fontSize: "12px", color: "grey", width: "50%" }}
          >
            <div
              style={{
                borderRadius: "50%",
                background: "#FFC3DE",
                height: "6vh",
                width: "6vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/images/dashboard/followup.png"
                alt="dollar"
                style={{ height: "2.5vh" }}
              />
            </div>
            <div
              style={{ marginBottom: "-5vh", marginTop: "2vh" }}
              className="d-flex flex-column align-items-center"
            >
              <span
                style={{ fontSize: "18px", fontWeight: "700", color: "black" }}
              >
                {conversion}
              </span>
              <span style={{ fontSize: "13px" }}>Deal Conversion Rate</span>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-center"
          style={{ marginTop: "1vh",marginBottom:'1vh ' }}
        >
          <Button onClick={()=>navigate(`/clientmanager/profile/${id}`)} style={{ fontSize: "16px", background: "#DD2A7B" , border:'none',padding:'6px 12px', cursor:'pointer'}}>
            <HistoryEduIcon style={{marginRight:'.3rem'}}/>Edit Profile
          </Button>
        </div>
        <div style={{background:'#FFC3DE' , borderRadius:'8px', height:'32vh'}}>
        <div
        className="d-flex flex-column"
        style={{
          background: "#FFC3DE",
          height: "100%",
          width: "100%",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <h6 style={{ fontFamily: "Arial", fontWeight: "600" }}>
          Your Earning
        </h6>
        <div
          className="d-flex flex-column align-items-center"
          style={{
            marginTop: "1vh",
            height: "14vh",
            background: "white",
            margin: "0 15px",
            borderRadius: "10px",
          }}
        >
          <img
            src="/images/dashboard/earning.png"
            alt="wallet"
            style={{ height: "4vh", marginTop: "2vh" }}
          />
          <span style={{ fontWeight: "700", fontSize: "16px" }}>
            $ <span style={{ fontSize: "20px" }}>{totalEarned}</span>
          </span>
          <span style={{ color: "#92959A", fontSize: "16px" }}>
            Total Earning
          </span>
        </div>
        <div
          className="d-flex flex-column justify-content-start align-items-center"
          style={{ fontSize: "16px" }}
        >
          <div className="mt-2">
            <span style={{fontWeight:"400",fontSize:'16px'}}>Team Name</span>
            <span style={{ fontWeight: "600", fontSize:'16px' }}> San Antonio</span>
          </div>
          <div>
            <span style={{fontWeight:"400",fontSize:'16px'}}>Team Lead</span>
            <span style={{ fontWeight: "600", fontSize:'16px' }}> Suman Subedi</span>
          </div>
          <Button onClick={()=>navigate(`/teamlead/dashboard/${teamLead}`)} style={{ fontSize: "16px", background: "#DD2A7B" , border:'none', marginTop:'.5vh',  cursor:'pointer'}}>
            View Team
          </Button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewRow;
