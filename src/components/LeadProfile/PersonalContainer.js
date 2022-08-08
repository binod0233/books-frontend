import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const PersonalContainer = () => {
  return (
    <div className="d-flex flex-column align-items-center py-2" style={{height:"100vh",background:"#ffffff"}}>
      <div style={{color:"white",background:"#ED6F47",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",height:"8vh",width:"8vh"}}>
        NJ
      </div>
      <span style={{fontFamily:"sans-serif",fontSize:"18px",fontWeight:"700",color:"#222529"}}>Niall Johnson</span>
      <span style={{fontFamily:"sans-serif",fontSize:"14px",fontWeight:"400",color:"#64676B"}}>nialjohson@gmail.com</span>
      <div className='d-flex mt-2'>
        <div style={{margin:"1vh",height:"4vh",width:"4vh",background:"#FFF2ED",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <i style={{color:"#ED6F47",height:"2vh"}} className="fa-solid fa-phone"></i>
        </div>
        <div style={{margin:"1vh",height:"4vh",width:"4vh",background:"#FFF2ED",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <i style={{color:"#ED6F47",height:"2vh"}} className="fa-solid fa-location-dot"></i>
        </div>
        <div style={{margin:"1vh",height:"4vh",width:"4vh",background:"#FFF2ED",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <i style={{color:"#ED6F47",height:"2vh"}} className="fa-solid fa-envelope"></i>
        </div>
        <div style={{margin:"1vh",height:"4vh",width:"4vh",background:"#FFF2ED",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <i style={{color:"#ED6F47",height:"2vh"}} className="fa-solid fa-calendar-days"></i>
        </div>
      </div>
      <div className='mt-4 ps-4'>
        <Row >
          <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Contact
              </span>
              </Col>
              <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black"}}>
            +279825364545
              </span>
              </Col>
              <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Country
              </span>
              </Col>
              <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black"}}>
            South Africa
              </span>
              </Col>
              <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Client Manager
              </span>
              </Col>
              <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black"}}>
            Hemant Karki
              </span>
              </Col>
              <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Team Name
              </span>
              </Col>
              <Col md={6}>
            <span style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black"}}>
            San Antonio
              </span>
              </Col>
        </Row>

      </div>
      <div style={{height:"32vh",border:"1px  solid whitesmoke",width:"95%"}} className='mt-4 '>
         <Form>

          <Form.Group controlId="leadstatus">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Lead Status
              </Form.Label>
            <Form.Control as="select" style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black",background:"primary"}}>
              <option value="negotiating">Negotiating</option>
              <option value="cold">Cold</option>
              <option value="lost">Lost</option>
              <option value="won">Won</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="leadstatus">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Communication Channel
              </Form.Label>
            <Form.Control as="select" style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black",background:"primary"}}>
              <option value="whatsapp">Whatsapp</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="sms">SMS</option>

             
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="leadstatus">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Communication Screenshot
              </Form.Label>
            <Form.Control type="file"  onChange={()=>console.log("image")} style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black",background:"primary"}}/>
    
              </Form.Group>
          <Form.Group controlId="leadsource">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Lead Source
              </Form.Label>
            <Form.Control as="select" style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black",background:"primary"}}>
              <option value="linkedin">Linked In</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="cdrforengineer">CDR For Engineer</option>
              <option value="cdrskillassessment">CDR Skill Assessment</option>
              <option value="cdrassessmenthelp">CDR Assessment Help</option>
              <option value="other">Other</option>
              
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="difficulty">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
            Difficulty
              </Form.Label>
           <Row>
            <Col className='py-2' md={4} onClick={()=>{console.log('clicked')}} style={{border:"1px solid gray",borderRadius:"3px", textAlign:"center" }}>
              Moderate
              </Col>
              <Col className='py-2' md={4} onClick={()=>{console.log('clicked')}} style={{border:"1px solid gray",borderRadius:"3px", textAlign:"center" }}>
                Easy
              </Col>
              <Col className='py-2' md={4} onClick={()=>{console.log('clicked')}} style={{border:"1px solid gray",borderRadius:"3px", textAlign:"center" }}>
                Tough
              </Col>
           </Row>
          </Form.Group>
         </Form>
        </div>
    </div>
  )
}

export default PersonalContainer