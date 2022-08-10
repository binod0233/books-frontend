import React from "react";
import { Row, Col, Stack, ProgressBar } from "react-bootstrap";
import LineChart from "../Chart/LineChart";
import PieChart from "../Chart/PieChart";

const StatsRow = ({ totalEarned, totalSales, totalLeads }) => {
  return (
    <div className="ps-4">
      <Row className="p-3">
        <Col md={6} className="py-2 px-3">
          <Row
            style={{ background: "#fff", height: "40vh" }}
            className="px-3 py-2"
          >
            <Col md={6} className="px-2 py-2">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ border: "2px solid #DD2A7B", height: "14vh" }}
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
                      {totalEarned}
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
                      {totalSales}
                    </span>
                  </div>

                  <span style={{ color: "#64676B", fontSize: "14px" }}>
                    TOTAL No. of Sales
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
                      {totalLeads}
                    </span>
                  </div>

                  <span style={{ color: "#64676B", fontSize: "14px" }}>
                    TOTAL Leads
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
        <Col md={6} className="p-2">
          <div style={{ background: "#fff", height: "40vh" }}>
            {/* <Line options={options} data={data} /> */}
            <LineChart />
            <Stack direction="horizontal" gap={3} className="pt-4 ps-2">
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
                className=" btn ms-auto px-1 "
                style={{
                  font: "arial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "23px",
                }}
              >
                More Details
              </span>
            </Stack>
          </div>
        </Col>
        <Col md={6} className="p-2">
          <div className="p-2" style={{ background: "#fff", height: "40vh" }}>
            <h5>Total Sales</h5>
            <Stack direction="horizontal" gap={3}>
              <div style={{ width: "50%", height: "50%" }}>
                {/* <Pie
                  // className="pt-5"
                  data={pieData}
                  options={pieOptions}
                /> */}
                <PieChart />
              </div>
              <div>
                <strong className="pt-4">Total Payment:30%</strong>
                <br />

                <strong className="pt-4">Due Amount:70%</strong>
              </div>
            </Stack>
            <h5 className="pt-2">Total Deal Value: $2700</h5>
          </div>
        </Col>
        <Col md={6} className="p-2">
          <Stack
            className="p-1"
            gap={1}
            style={{ background: "#fff", height: "40vh" }}
          >
            <span
              className="pb-2"
              style={{
                font: "arial",
                fontWeight: "700",
                color: "#222529",
                fontSize: "22px",
                lineHeight: "25.3px",
              }}
            >
              Quick Overview
            </span>
            <div
              className="d-flex flex-row py-1"
              style={{
                font: "arial",
                fontWeight: "400",
                color: "#222529",
                fontSize: "22px",
                lineHeight: "23px",
              }}
            >
              <span>Deal Amount</span>
              <span className="ms-auto ">$2700</span>
            </div>
            <ProgressBar
              // bsPrefix="pro"
              variant=""
              now={40}
              style={{ background: "#B8AAEE" }}
            />
            <div
              className="d-flex flex-row py-1"
              style={{
                font: "arial",
                fontWeight: "400",
                color: "#222529",
                fontSize: "22px",
                lineHeight: "23px",
              }}
            >
              {" "}
              <span>Total Payment</span>
              <span className="ms-auto ">$2700</span>
            </div>
            <ProgressBar
              variant="danger"
              now={60}
              style={{ background: "#F9AAA7" }}
            />
            <div
              className="d-flex flex-row py-1"
              style={{
                font: "arial",
                fontWeight: "400",
                color: "#222529",
                fontSize: "22px",
                lineHeight: "23px",
              }}
            >
              {" "}
              <span>Due Payment</span>
              <span className="ms-auto ">$2700</span>
            </div>
            <ProgressBar
              variant="warning"
              now={60}
              style={{ background: " #F2E3B5" }}
            />

            <span
              className="pt-2"
              style={{
                font: "arial",
                fontWeight: "700",
                color: "#222529",
                fontSize: "20px",
                lineHeight: "23px",
              }}
            >
              Total Leads: 310
            </span>
            <span
              style={{
                font: "arial",
                fontWeight: "700",
                color: "#222529",
                fontSize: "20px",
                lineHeight: "23px",
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
