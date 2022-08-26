import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
const TeamLeadProfile = () => {
const navigate = useNavigate()
  const {teamLead} = useParams()
  return (
    <div className='mx-4  mb-3' style={{height:"25vh"}}>
      <Row>
        <Col className="p-3 d-flex align-items-center " style={{background:"white",height:"25vh"}}>
          <div className="d-flex flex-row">
            <div >
              <img src="/images/dashboard/avatar.png" alt="avatar" style={{height:"18vh",width:"18vh",borderRadius:"50%"}}/>
              </div>
              <div className='d-flex flex-column '>
                <p style={{fontweight:"700",margin:"0"}}>Sharmila Dangal</p>
                <p style={{color:"#64676B",fontSize:"10px",margin:"0 0 3vh 0"}}>sharmila@copenned.com</p>
                <Button onClick={()=>navigate(`/teamlead/edit/${teamLead}`)} style={{background:"#DD2A7B",color:"white",padding:"2px 6px",fontSize:"14px"}}>Edti Profile</Button>

              </div>
            </div>
        </Col>
        <Col className='mx-2 py-2' style={{background:"white",height:"25vh"}}>
        <Row className='d-flex py2'>
          <Col className="px-1">
            <div className='d-flex flex-column align-items-center' style={{height:"22vh",background:"#F7E8FB"}}>
              <div className='d-flex justify-content-center align-items-center mt-3' style={{height:"7vh",width:"7vh",background:"#A326C5",borderRadius:"50%"}}>
                <img src="/images/dashboard/conversion.png" alt="conversion" style={{height:"3vh",width:"3vh"}} className='img-fluid'/>
              </div>
              <span className='mt-3' style={{fontWeight:"600",fontSize:"20px"}}>73%</span>
              <span className="mt-2" style={{fontWeight:"400",fontSize:"15px",color:"#64676B"}}>Deal Conversion Rate</span>
            </div>
          </Col>

          <Col className="px-1" style={{background:"white"}}>
            <div className='d-flex flex-column align-items-center' style={{height:"22vh",background:"#E6FCF5"}}>
            <div className='d-flex justify-content-center align-items-center mt-3' style={{height:"7vh",width:"7vh",background:"#04CA8E",borderRadius:"50%"}}>
                <img src="/images/dashboard/contribution.png" alt="contribution" style={{height:"3vh",width:"3vh"}} className='img-fluid'/>
              </div>
              <span className='mt-3' style={{fontWeight:"600",fontSize:"20px"}}>10%</span>
              <span className="mt-2" style={{fontWeight:"400",fontSize:"15px",color:"#64676B"}}>Lost</span>
            </div>
          </Col>
        </Row>
        </Col>
        <Col style={{background:"white",height:"25vh"}}>
          <Row>
            <Col >
            <div className='d-flex flex-column align-items-center' style={{height:"22vh",borderRight:"1px solid whitesmoke"}}>
            <div className='d-flex justify-content-center align-items-center mt-3' style={{height:"7vh",width:"7vh",background:"#FFC3DE",borderRadius:"50%"}}>
                <img src="/images/dashboard/pinkDollar.png" alt="pinkDollar" style={{height:"3vh",width:"3vh"}} className='img-fluid'/>
              </div>
              <span className='mt-3' style={{fontWeight:"600",fontSize:"20px"}}>$2,700</span>
              <span className="mt-2" style={{fontWeight:"400",fontSize:"15px",color:"#92959A"}}>Total Sales</span>
            </div>
            </Col>
            <Col >
            <div className='d-flex flex-column align-items-center' style={{height:"22vh",borderRight:"1px solid whitesmoke"}}>
            <div className='d-flex justify-content-center align-items-center mt-3' style={{height:"7vh",width:"7vh",background:"#FFC3DE",borderRadius:"50%"}}>
                <img src="/images/dashboard/pinkLead.png" alt="pinkLead" style={{height:"3vh",width:"3vh"}} className='img-fluid'/>
              </div>
              <span className='mt-3' style={{fontWeight:"600",fontSize:"20px"}}>310</span>
              <span className="mt-2" style={{fontWeight:"400",fontSize:"15px",color:"#92959A"}}>No. of Leads</span>
            </div>
            </Col>
            <Col>
            <div className='d-flex flex-column align-items-center' style={{height:"22vh"}}>
            <div className='d-flex justify-content-center align-items-center mt-3' style={{height:"7vh",width:"7vh",background:"#FFC3DE",borderRadius:"50%"}}>
                <img src="/images/dashboard/pinkStar.png" alt="pinkStar" style={{height:"3vh",width:"3vh"}} className='img-fluid'/>
              </div>
              <span className='mt-3' style={{fontWeight:"600",fontSize:"20px"}}>4.6 </span>
              <span className="mt-2" style={{fontWeight:"400",fontSize:"15px",color:"#92959A"}}>1.2K Reviews</span>
            </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default TeamLeadProfile