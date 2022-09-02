import React from "react";
import { Row, Col, Stack, ProgressBar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LineChart from "../Chart/LineChart";
import PieChart from "../Chart/PieChart";

const StatsRow = ({ totalEarned, totalSales, totalLeads,name,totalDealValue }) => {
  const navigate = useNavigate();

  const totalPaymentPercent = ((totalEarned)/totalDealValue*100).toFixed(2)
  const totalDuePercent = ((totalDealValue-totalEarned)/totalDealValue*100).toFixed(2)
  return (
    <div className="">
      <Row className="ps-4  pe-0 py-2">
        <Col md={6} className="py-2 px-4">
          <Row
            style={{ background: "#fff", height: "" }}
            className="p-2"
          >
          <Row style={{fontSize:'1.2rem',fontWeight:'700'}}>
            Quick Stats View
          </Row>
            <Col md={6} className="px-2 py-2  ">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ border: "2px solid #DD2A7B", height: "15vh" }}
              >
                <div>
                  <div className="d-flex flex-col">
                    <img
                      src="/images/dashboard/dollar.png"
                      alt="dollar"
                      style={{ margin: " 10px 15px 0 0 ", height: "18px" }}
                    />
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "25px",
                        fontFamily: "Arial",
                      }}
                    >
                      {(totalEarned).toFixed(2)}
                    </span>
                  </div>

                  <span style={{ color: "#64676B", fontSize: "14px" }}>
                    TOTAL EARNING
                  </span>
                </div>
              </div>
            </Col>
            <Col md={6} className="px-2 py-2">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ background: "#FEE8F2", height: "14vh" }}
              >
                <div>
                  <div className="d-flex flex-col">
                    <img
                      src="/images/dashboard/thailo.png"
                      alt="thailo"
                      style={{ margin: " 10px 15px 0 0 ", height: "18px" }}
                    />
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "25px",
                        fontFamily: "Arial",
                      }}
                    >
                      {(totalSales)}
                    </span>
                  </div>

                  <span style={{ color: "#64676B", fontSize: "14px" }}>
                    TOTAL NO. OF SALES
                  </span>
                </div>
              </div>
            </Col>
            <Col md={6} className="px-2 py-2">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ background: "#FEE8F2", height: "14vh" }}
              >
                <div>
                  <div className="d-flex flex-col">
                    <img
                      src="/images/dashboard/number.png"
                      alt="number"
                      style={{ margin: " 10px 15px 0 0 ", height: "18px" }}
                    />
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "25px",
                        fontFamily: "Arial",
                      }}
                    >
                      {(totalLeads).toFixed(2)}
                    </span>
                  </div>

                  <span style={{ color: "#64676B", fontSize: "14px" }}>
                    TOTAL LEADS
                  </span>
                </div>
              </div>
            </Col>
            <Col md={6} className="px-2 py-2">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ background: "#FEE8F2", height: "14vh" }}
              >
                <div>
                  <div className="d-flex flex-col">
                    <img
                      src="/images/dashboard/star.png"
                      alt="star"
                      style={{ margin: " 10px 15px 0 0 ", height: "18px" }}
                    />
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "25px",
                        fontFamily: "Arial",
                      }}
                    >
                      1,800
                    </span>
                  </div>

                  <span style={{ color: "#64676B", fontSize: "14px" }}>
                    TOTAL EARNING
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="py-2 pe-0">
          <div style={{ background: "#fff", height: "" }}>
           <Row className="ps-3 pe-3">
           <LineChart />
           </Row>
            <Stack direction="horizontal" gap={3} className=" ps-2  pt-2 pb-2">
              <span
                style={{
                  font: "arial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "23px",
                }}
              >
                $1800
              </span>
              <span className="text-muted">This week</span>
              <span
                className=" ms-auto px-1 "
                style={{
                  font: "arial",
                  fontWeight: "700",
                  fontSize: "1rem",
                  marginRight:'1%'

                }}
              >
                <button
                  style={{
                    color: "#3F50F0",
                    borderColor: "#3F50F0",
                    backgroundColor: "white",
                    borderRadius:'2px'
                  }}
                  onClick={() => {navigate(`/payment/${name}`)}}
                >

                  More Details
                </button>
              </span>
            </Stack>
          </div>
        </Col>
        <Col md={6} className="py-2">
          <div className="p-2" style={{ background: "#fff", height: "" }}>
            <Row className="ps-2" style={{fontSize:"1.2rem" , fontWeight:'700'}}>Total Sales</Row>
            <Stack direction="horizontal" gap={3}>
              <div style={{ width: "50%",height:"29.5vh"  }}>
                {/* <Pie
                  // className="pt-5"
                  data={pieData}
                  options={pieOptions}
                /> */}
                <PieChart totalPaymentPercent={totalPaymentPercent} totalDuePercent={totalDuePercent}/>
              </div>
              <div>
                <strong className="pt-4">Total Payment:{totalPaymentPercent}%</strong>
                <br />

                <strong className="pt-4">Due Amount:{totalDuePercent}%</strong>
              </div>
            </Stack>
            <Row className="  ps-5" style={{fontSize:'1.2rem', fontWeight:'700'}}>Total Deal Value: ${totalDealValue}</Row>
          </div>
        </Col>
        <Col md={6} className="py-2 pe-0">
          <Stack
            className="p-2"
            gap={1}
            style={{ background: "#fff", height: "" }}
          >
            <span
              className="pb-2"
              style={{
                font: "arial",
                fontWeight: "700",
                color: "#222529",
                fontSize: "1.2rem",
                // lineHeight: "25.3px",
              }}
            >
              Quick Overview
            </span>
            <div style={{height:'25vh', display:"flex", flexDirection:'column',justifyContent:"center"}}>
            <div
              className="d-flex flex-row pt-2 "
              style={{
                font: "arial",
                fontWeight: "400",
                color: "#222529",
                fontSize: "1.2rem",
                // lineHeight: "23px",
              }}
            >
              <span>Deal Amount</span>
              <span className="ms-auto ">${totalDealValue}</span>
            </div>
            <ProgressBar
              // bsPrefix="pro"
              variant=""
              now={totalDealValue}
              style={{ background: "#B8AAEE" }}
            />
            <div
              className="d-flex flex-row pt-2 "
              style={{
                font: "arial",
                fontWeight: "400",
                color: "#222529",
                fontSize: "1.2rem",
                // lineHeight: "23px",
              }}
            >
              {" "}
              <span>Total Payment</span>
              <span className="ms-auto ">${totalEarned}</span>
            </div>
            <ProgressBar
              variant="danger"
              now={totalEarned}
              style={{ background: "#F9AAA7" }}
            />
            <div
              className="d-flex flex-row pt-2"
              style={{
                font: "arial",
                fontWeight: "400",
                color: "#222529",
                fontSize: "1.2rem",
                // lineHeight: "23px",
              }}
            >
              {" "}
              <span>Due Payment</span>
              <span className="ms-auto ">${totalDealValue-totalEarned}</span>
            </div>
            <ProgressBar
              variant="warning"
              now={totalDealValue-totalEarned}
              style={{ background: " #F2E3B5" }}
            />

            </div>
            <span
              className=""
              style={{
                font: "arial",
                fontWeight: "700",
                color: "#222529",
                fontSize: "1.1rem",
                // lineHeight: "23px",
              }}
            >
              Total Leads: 310
            </span>

            <span
              style={{
                font: "arial",
                fontWeight: "700",
                color: "#222529",
                fontSize: "1.1rem",
                // lineHeight: "23px",
                // paddingBottom:'1rem'
              }}
            >
              Total Sales: 2700
            </span>
          </Stack>
        </Col>
      </Row>
    </div>
  );
};

export default StatsRow;
