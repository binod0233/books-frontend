import React from 'react'
import { Button, Col, ProgressBar, Row, Stack } from 'react-bootstrap'
import { useNavigate,useParams } from 'react-router-dom'
import LineChart from '../Chart/LineChart'
import PieChart from '../Chart/PieChart'

const SalesStats = () => {
    const navigate = useNavigate()
    const {name} = useParams()
  return (
    <div className=' px-3 py-3 me-4' style={{height:"45vh",background:"white"}}>
        <Row>
            <Col md={3} className="p-2" >
                <div className='px-2' style={{height:"40vh",border:"1px solid #D9D9D9"}}>
                <strong style={{fontSize:"18px"}}>Total Sales</strong>

                    <div style={{width:"70%",display:"flex", justifyContent:"center", alignItems:"center"}}>

                <PieChart/>
                    </div>
                    <p style={{textAlign:"center",fontSize:"13px",fontWeight:"600"}}>Deal Amount<span style={{fontWeight:"400",fontSize:"12px",marginLeft:"2vh"}}>$5000</span></p>
                    <div>
                    <p style={{textAlign:"center",fontSize:"12px",fontWeight:"",color:"#64676B",lineHeight:"12px",margin:"3px"}}>Due Payment<span style={{fontWeight:"400",fontSize:"12px",marginLeft:"2vh",color:"black"}}>70%</span></p>
                    <p style={{textAlign:"center",fontSize:"12px",fontWeight:"",color:"#64676B",lineHeight:"12px",margin:"3px"}}>Total Payment<span style={{fontWeight:"400",fontSize:"12px",marginLeft:"2vh",color:"black"}}>30%</span></p>

                    </div>

                </div>
                </Col>

                <Col md={6} className="py-2">
          <div style={{ background: "#fff", height: "40vh" }}>
            {/* <Line options={options} data={data} /> */}
            <div style={{ height: "34vh" }}>

            <LineChart />
            </div>
            <Stack direction="horizontal" gap={3} className="pt-1 ps-2">
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
                <Button
                  bsPrefix="outline-primary"
                  size="sm"
                  variant="outline-primary"
                  style={{
                    color: "#3F50F0",
                    borderColor: "#3F50F0",
                    backgroundColor: "white",
                  }}
                  onClick={() => {navigate(`/payment/${name}`)}}
                >

                  More Details
                </Button>
              </span>
            </Stack>
          </div>
        </Col>
       

            <Col md={3}>
                <div             style={{  border:"1px solid #D9D9D9" }}
>
            <Stack
            className="p-1"
            gap={1}
            style={{ background: "#fff", height: "40vh"}}
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
          </div>
                </Col>

        </Row>
    </div>
  )
}

export default SalesStats