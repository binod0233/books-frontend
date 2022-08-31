import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import StarsIcon from '@mui/icons-material/Stars';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import '../../App.css';



const   TeamLeadProfile = () => {
  const navigate = useNavigate()
  const { teamLead } = useParams()
const user= JSON.parse(localStorage.getItem('user'))

  return (
    <div className='ms-3 me-4 row mb-3' style={{ height: "25vh" }}>
      <Row>
        <Col className="p-3 d-flex align-items-center " style={{ background: "white", height: "25vh" }}>
          <div className="d-flex flex-row">
            <div >
              <img src="/images/dashboard/avatar.png" alt="avatar" style={{ height: "18vh", width: "18vh", borderRadius: "50%" }} />
            </div>
            <div className='d-flex flex-column '>
              <div style={{ fontWeight: "700", margin: "0", fontSize: '1.2rem' }}>{teamLead}</div>
              <p style={{ color: "#64676B", fontSize: "1rem", margin: "0 0 2vh 0" }}>{user.email}</p>
              <span className='d-flex align-items-center pb-2'>4.9 <StarsIcon /></span>
              <Button onClick={() => navigate(`/teamlead/edit/${teamLead}`)} style={{ fontSize: "1rem", background: "#DD2A7B", border: 'none', cursor: 'pointer' }}>
                <HistoryEduIcon style={{ marginRight: '.3rem' }} />Edit Profile
              </Button>
            </div>
          </div>
        </Col>
        <Col className='mx-2 py-2  d-flex flex-column justify-content-center' style={{ background: "white", height: "25vh",  }}>
          <Row className='d-flex py-1'>
            <Col className="px-1">
              <div className='d-flex flex-column align-items-center trans' style={{ height: "", background: "#F7E8FB" }}>
                <div className='d-flex justify-content-center align-items-center mt-3 ' style={{ height: "7vh", width: "7vh", background: "#A326C5", borderRadius: "50%" }}>
                  <div className='d-flex justify-content-center align-items-center ' style={{ height: "2.5vh", width: "4vh" }}>
                    <img src="/images/dashboard/conversion.png" alt="conversion" style={{ height: "inherit", width: "inherit", objectFit: "cover" }} className='img-fluid' />

                  </div>
                </div>
                <span className='mt-3' style={{ fontWeight: "600", fontSize: "2rem" }}>73%</span>
                <span className="" style={{ fontWeight: "400", fontSize: "15px", color: "#64676B" }}>Deal Conversion Rate</span>
              </div>
            </Col>

            <Col className="px-1" style={{ background: "white" }}>
              <div className='d-flex flex-column align-items-center trans' style={{ height: "", background: "#E6FCF5" }}>
                <div className='d-flex justify-content-center align-items-center mt-3 ' style={{ height: "7vh", width: "7vh", background: "#04CA8E", borderRadius: "50%" }}>
                  <div className='d-flex justify-content-center align-items-center ' style={{ height: "2.5vh", width: "4vh" }}>

                    <img src="/images/dashboard/contribution.png" alt="contribution" style={{ height: "inherit", width: "inherit", objectFit: "contain" }} className='img-fluid' />
                  </div>
                </div>
                <span className='mt-3' style={{ fontWeight: "600", fontSize: "2rem" }}>10%</span>
                <span className="" style={{ fontWeight: "400", fontSize: "15px", color: "#64676B" }}>Lost</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className=' d-flex flex-column justify-content-center' style={{ background: "white", height: "25vh" }}>
          <Row className='d-flex align-items-center'>
            <Col >
              <div className='d-flex flex-column align-items-center' style={{ height: "", borderRight: "1px solid whitesmoke" }}>
                <div className='d-flex justify-content-center align-items-center mt-3' style={{ height: "7vh", width: "7vh", background: "#FFC3DE", borderRadius: "50%" }}>
                  <div className='d-flex justify-content-center align-items-center ' style={{ height: "4vh", width: "3vh" }}>
                    <img src="/images/dashboard/pinkDollar.png" alt="pinkDollar" style={{ height: "inherit", width: "inherit" }} className='img-fluid' />

                  </div>

                </div>
                <span className='mt-3' style={{ fontWeight: "600", fontSize: "1.2rem" }}>$2,700</span>
                <span className="mt-2" style={{ fontWeight: "400", fontSize: "15px", color: "#92959A" }}>Total Sales</span>
              </div>
            </Col>
            <Col >
              <div className='d-flex flex-column align-items-center' style={{ height: "", borderRight: "1px solid whitesmoke" }}>
                <div className='d-flex justify-content-center align-items-center mt-3' style={{ height: "7vh", width: "7vh", background: "#FFC3DE", borderRadius: "50%" }}>
                  <div className='d-flex justify-content-center align-items-center ' style={{ height: "3vh", width: "3vh" }}>
                    <img src="/images/dashboard/pinkLead.png" alt="pinkLead" style={{ height: "inherit", width: "inherit" }} className='img-fluid' />

                  </div>
                </div>
                <span className='mt-3' style={{ fontWeight: "600", fontSize: "1.2rem" }}>310</span>
                <span className="mt-2" style={{ fontWeight: "400", fontSize: "15px", color: "#92959A" }}>No. of Leads</span>
              </div>
            </Col>
            <Col >
              <div className='d-flex flex-column align-items-center' style={{ height: "" }}>
                <div className='d-flex justify-content-center align-items-center mt-3' style={{ height: "7vh", width: "7vh", background: "#FFC3DE", borderRadius: "50%" }}>
                  <div className='d-flex justify-content-center align-items-center ' style={{ height: "3vh", width: "3vh" }}>
                    <img src="/images/dashboard/pinkStar.png" alt="pinkStar" style={{ height: "inherit", width: "inherit" }} className='img-fluid' />

                  </div>
                </div>
                <span className='mt-3' style={{ fontWeight: "600", fontSize: "1.2rem" }}>4.6 </span>
                <span className="mt-2" style={{ fontWeight: "400", fontSize: "15px", color: "#92959A" }}>1.2K Reviews</span>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default TeamLeadProfile