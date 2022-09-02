import React from 'react'
import {  Col, ProgressBar, Row, Stack } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import LineChart from '../Chart/LineChart'
import PieChart from '../Chart/PieChart'

const SalesStats = () => {
  const navigate = useNavigate()
  const { name } = useParams()
  return (
    <div className=' px-3 py-3 me-4 ' style={{ height: "50vh", background: "white" }}>
      <Row>
        <Col md={3} className="p-2">
          <div style={{ border: "1px solid #D9D9D9" }} >
            <strong style={{ fontSize: "1.2rem" }}>Total Sales</strong>
            <div className='px-2 d-flex d-lg-flex flex-column align-items-center' style={{ height: "40vh", }}>

              <div style={{ width: "80%", background: "", height: '25vh', display: "flex", justifyContent: "center", alignItems: "center" }}>

                <PieChart />
              </div>
              <p style={{ textAlign: "center", fontSize: "1rem", fontWeight: "600" , paddingTop:'2vh'}}>Deal Amount<span style={{ fontWeight: "400", fontSize: ".8rem", marginLeft: "2vh" }}>$5000</span></p>
              <div>

                <div style={{ textAlign: "center", fontSize: ".8rem", display: "flex",alignItems:'center', color: "#64676B", margin: "3px" }}>
                  <div style={{ width: '2vw', height: '2vh', marginRight: '1vw', background: 'orange' }}></div>
                  <div>Due Payment</div>
                  <div style={{ fontWeight: "400", fontSize: ".8rem", marginLeft: "2vh", color: "black" }}>70%</div>

                </div>
                <div style={{ textAlign: "center", fontSize: ".8rem", display: "flex", color: "#64676B", margin: "3px" }}><div style={{ width: '2vw', height: '2vh', marginRight: '1vw', background: 'yellow' }}></div><div>Total Payment</div><div style={{ fontWeight: "400", fontSize: ".8rem", marginLeft: "2vh", color: "black" }}>30%</div></div>

              </div>

            </div>
          </div>
        </Col>

        <Col md={6} className="py-2">
          <div style={{ background: "#fff", height: "44vh", border: '1px solid #D9D9D9' }}>
            <div style={{ height: "34vh"}}>

              <LineChart />
            </div>
            <div className='pt-1'>
              <Stack direction="horizontal" gap={3} className="pt-4 ps-2">
                <span
                  style={{
                    font: "arial",
                    fontWeight: "700",
                    fontSize: "2.1rem",

                  }}
                >
                  $1800
                </span>
                <span className="text-muted">This week</span>
                <span
                  className=" ms-auto px-3 "
                  style={{
                    font: "arial",
                    fontWeight: "700",
                    fontSize: "1.1rem",

                  }}
                >
                  <button
                    style={{
                      color: "#3F50F0",
                      borderColor: "#3F50F0",
                      backgroundColor: "white",
                      borderRadius: '2px'
                    }}
                    onClick={() => { navigate(`/payment/${name}`) }}
                  >

                    More Details
                  </button>
                </span>
              </Stack>
            </div>
          </div>
        </Col>


        <Col md={3} className="py-2">
          <div style={{ border: "1px solid #D9D9D9" }}>
           
            <Stack
            className="p-2"
            gap={1}
            style={{ background: "#fff", height: "44vh" }}
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
              className="d-flex flex-row  "
              style={{
                font: "arial",
                fontWeight: "400",
                color: "#222529",
                fontSize: "1.2rem",
                // lineHeight: "23px",
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
              <span className="ms-auto ">$2700</span>
            </div>
            <ProgressBar
              variant="danger"
              now={60}
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
              <span className="ms-auto ">$2700</span>
            </div>
            <ProgressBar
              variant="warning"
              now={60}
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
         <div className='d-flex justify-content-center align-items-center'>
         <button
                    style={{
                      color: "#3F50F0",
                      borderColor: "#3F50F0",
                      backgroundColor: "white",
                      borderRadius: '2px'
                      
                    }}
                    // onClick={() => { navigate(`/payment/${name}`) }}
                  >

                    More Details
                  </button>
         </div>
          </Stack>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default SalesStats