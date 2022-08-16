import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Leadscharts = ({ totalFollowUps, leadConverted, leadLost, totalLeads }) => {
  const navigate = useNavigate();


  return (
    <div style={{ background: "#1f1f1f" }} className="">
      <Row >
        <Col style={{ background: "#F1F1FA" }}>
          <div style={{ fontWeight: '700', fontSize: "1.5rem", lineHeight:"28px", fontStyle:'normal'}} className="pt-5 ">
            All Leads
          </div>
          <div style={{ color: "#64676B", fontWeight: "400", fontSize:'18px' }} className="pb-3">
            Leads Generated Overview
          </div>
        </Col>
        <Col className="pt-5" style={{ background: "#F1F1FA" }}>
          <Button onClick={() => navigate("/add-lead")}
            style={{ background: "#176EB3", float: "right" }}
          >
            Add New Lead +
                </Button>
        </Col>
      </Row>
      
      <Row  style={{ background: "#fff" }}>
        <Col md={4} className='' style={{padding:'0 16px'}}>
          <div style={{ fontWeight: "700", fontSize: "22px" }} className="pt-3">
            Leads generated by you
          </div>
          <Row className="mt-2"  style={{ width: "auto" , padding:"0 5px"}}>
            <Col md={6} className="">
              <div
                style={{
                  width: "auto",
                  borderRadius: "",
                  background: "#fff",
                  border:'2px solid #DD2A7B'
              
                }}
                className=" d-flex flex-column align-items-center  justify-content-center p-3"
              >
                <div className="d-flex justify-content-center">
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      background: "#DD2A7B",
                      fontWeight: "700",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img src="/images/dashboard/newleads.png" alt="thailo" className="img-fluid" style={{ height: "20px", width: "20px" }} />
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "10px",
                    fontWeight: "700",
                    fontSize: "30px",
                  }}
                  className="d-flex justify-content-center"
                >
                  {totalLeads}
                </div>

                <div
                  style={{ color: "#64676B"  }}
                  className="d-flex justify-content-center"
                >
                  New Leads
                  </div>
              </div>
            </Col>
            <Col md={6} className="pb-4">
              <div
                style={{
                  borderRadius: "",
                  background: "#FEE8F2",
                }}
                className="  d-flex flex-column align-items-center  justify-content-center p-3 "
              >
                <div className="d-flex justify-content-center">
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      background: "#DD2A7B",
                      fontWeight: "700",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img src="/images/dashboard/converted.png" alt="thailo" className="img-fluid" />
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "10px",
                    fontWeight: "700",
                    fontSize: "30px",
                  }}
                  className="d-flex justify-content-center"
                >
                  {totalFollowUps}
                </div>

                <div
                  style={{ color: "#64676B" }}
                  className="d-flex justify-content-center"
                >
                  In follow Up
                  </div>
              </div>
            </Col>
            <Col md={6} className="pb-4">
              <div
                style={{
                  borderRadius: "",
                  background: "#FEE8F2",
                }}
                className=" d-flex flex-column align-items-center  justify-content-center p-3 "
              >
                <div className="d-flex justify-content-center">
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      background: "#DD2A7B",
                      fontWeight: "700",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img src="/images/dashboard/followup.png" alt="thailo" className="img-fluid" />
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "10px",
                    fontWeight: "700",
                    fontSize: "30px",
                  }}
                  className="d-flex justify-content-center"
                >
                  {leadConverted}
                </div>

                <div
                  style={{ color: "#64676B" }}
                  className="d-flex justify-content-center"
                >
                  Lead Converted
                  </div>
              </div>
            </Col>
            <Col md={6} className="pb-4">
              <div
                style={{
                  borderRadius: "",
                  background: "#FEE8F2",
                }}
                className="  d-flex flex-column align-items-center  justify-content-center p-3 "
              >
                <div className="d-flex justify-content-center">
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      background: "#DD2A7B",
                      fontWeight: "700",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img src="/images/dashboard/lost.png" alt="thailo" className="img-fluid" />
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "10px",
                    fontWeight: "700",
                    fontSize: "30px",
                  }}
                  className="d-flex justify-content-center"
                >
                  {leadLost}
                </div>

                <div
                  style={{ color: "#64676B" }}
                  className="d-flex justify-content-center"
                >
                  Lead Lost
                  </div>
              </div>
            </Col>
          </Row>
        </Col>
        
        <Col md={4} style={{ background: "#1f1f1f" }}>

        </Col>
        <Col  md={4} style={{ background: "#2e3e" }}>

        </Col>
      </Row>
      
    </div>
  );
};

export default Leadscharts;
