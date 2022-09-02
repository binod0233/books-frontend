import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


// http://booksbackenddev-env.eba-j6i2gjpq.us-east-1.elasticbeanstalk.com/api/lead/leadId/3



const PersonalContainer = ({leads, handleLeadSource, handleLeadStatus, handleDifficulty, handleCommunicationChannel, handleScreenshot, leadSource, leadStatus, difficulty, communicationChannel, screenshot }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)


  console.log(leads)


  const [active, setActive]=useState('');
  return (
 <div>
 {/* {leads && leads ? leads.map((v,key)=>{
 }):null} */}
     <div className="d-flex flex-column align-items-center pt-4" style={{ height: "", background: "#ffffff" }}>  
      <div style={{ color: "white", background: "#ED6F47", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", height: "8vh", width: "8vh" }}>
      {leads?.name?.split(' ').map((n)=>n[0])}
      </div>
      <span style={{ fontFamily: "sans-serif", fontSize: "18px", fontWeight: "700", color: "#222529" }}>{leads.name}</span>
      <span style={{ fontFamily: "sans-serif", fontSize: "14px", fontWeight: "700", color: "#64676B" }}>{leads.email}</span>
      <div className='d-flex mt-2'>
        <div style={{ margin: "1vh", height: "4vh", width: "4vh", background: "#FFF2ED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <i style={{ color: "#ED6F47", height: "2vh" }} className="fa-solid fa-phone"></i>
        </div>
        <div style={{ margin: "1vh", height: "4vh", width: "4vh", background: "#FFF2ED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <i style={{ color: "#ED6F47", height: "2vh" }} className="fa-solid fa-location-dot"></i>
        </div>
        <div style={{ margin: "1vh", height: "4vh", width: "4vh", background: "#FFF2ED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <i style={{ color: "#ED6F47", height: "2vh" }} className="fa-solid fa-envelope"></i>
        </div>
        <div style={{ margin: "1vh", height: "4vh", width: "4vh", background: "#FFF2ED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <i style={{ color: "#ED6F47", height: "2vh" }} className="fa-solid fa-calendar-days"></i>
        </div>
      </div>
      <div className='mt-4 ps-4'>
        <Row >
          <Col md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "400", color: "#64676B" }}>
              Contact
            </span>
          </Col>
          <Col md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "15px", fontWeight: "600", color: "#black" }}>
              {leads.phone}
            </span>
          </Col>
          <Col className='mt-1' md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "400", color: "#64676B" }}>
              Country
            </span>
          </Col>
          <Col className='mt-1' md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "15px", fontWeight: "600", color: "#black" }}>
              {leads.country}
            </span>
          </Col>
          <Col className='mt-1' md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "400", color: "#64676B" }}>
              Client Manager
            </span>
          </Col>
          <Col className='mt-1' md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "15px", fontWeight: "600", color: "#black" }}>
              {leads.clientManager}
            </span>
          </Col>
          <Col className='mt-1' md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "400", color: "#64676B" }}>
              Team Name
            </span>
          </Col>
          <Col className='mt-1' md={6}>
            <span style={{ fontFamily: "sans-serif", fontSize: "15px", fontWeight: "600", color: "#black" }}>
              {leads.teamName}
            </span>
          </Col>
        </Row>

      </div>
      <div style={{ height: "100%", border: "1px  solid whitesmoke", width: "95%" }} className='mt-3 '>
        <Form className="px-2 py-3 mb-3" style={{ border: '1px solid grey', borderRadius: '5px' }}>

          <Form.Group controlId="leadstatus">
            <Form.Label style={{ fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "700", color: "#64676B" }}>
              Lead Status
            </Form.Label>
            <div style={{fontSize:'.7rem'}}> previous  value: {leadStatus}</div>

            <Form.Select disable onChange={(e) => handleLeadStatus(e.target.value)} style={{ background: "#1577D9", appearance: 'button', color: 'white', textAlign: 'center' }} >
              <option
                value="cold"
                onClick={(e) => handleLeadStatus(e.target.value)}

              >
                Cold
              </option>
              <option
                value="negotiating"
                onClick={(e) => handleLeadStatus(e.target.value)}
              >
                Negotiating
              </option>

              <option
                value="lost"
                onClick={(e) => handleLeadStatus(e.target.value)}

              >
                Lost
              </option>
              <option
                value="won"
                onClick={(e) => handleLeadStatus(e.target.value)}

              >
                Won
              </option>
            </Form.Select>
            
          </Form.Group>
          <Form.Group controlId="leadstatus">
            <Form.Label style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "700", color: "#64676B", marginTop: ".5rem" }}>
              Communication Channel
            </Form.Label>
            {/* <Form.Control as="select" style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black",background:"primary"}}>
              <option value="whatsapp">Whatsapp</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="sms">SMS</option>

             
            </Form.Control> */}
            <div style={{fontSize:'.7rem'}}> previous  value: {communicationChannel}</div>

            {user?.role==='clientmanager' &&

            <Form.Select
            disabled
              onChange={(e) => handleCommunicationChannel(e.target.value)}
              style={{ background: "#1577D9", appearance: 'button', color: 'white', textAlign: 'center' }} >
              <option
                value="whatsapp"
                onClick={(e) => handleCommunicationChannel(e.target.value)}
              >
                Whatsapp
              </option>

              <option
                value="email"
                onClick={(e) => handleCommunicationChannel(e.target.value)}
              >
                Email
              </option>
              <option
                value="phone"
                onClick={(e) => handleCommunicationChannel(e.target.value)}

              >
                Phone
              </option>
              <option
                value="sms"
                onClick={(e) => handleCommunicationChannel(e.target.value)}

              >
                SMS
              </option>
            </Form.Select>
            }
          </Form.Group>
          <Form.Group controlId="leadstatus">
            <Form.Label style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "700", color: "#64676B", marginTop: ".5rem" }}>
              Communication Screenshot
            </Form.Label>
            <Form.Control type="file" onChange={() => handleScreenshot("image")} style={{ textAlign: 'center', fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "600", color: "white", background: "#1577D9", appearance: 'button' }} />

          </Form.Group>
          <Form.Group controlId="leadsource">
            <Form.Label style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "700", color: "#64676B", marginTop: ".5rem" }}>
              Lead Source
            </Form.Label>
            {/* <Form.Control as="select" style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"600",color:"#black",background:"primary"}}>
              <option value="linkedin">Linked In</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="cdrforengineer">CDR For Engineer</option>
              <option value="cdrskillassessment">CDR Skill Assessment</option>
              <option value="cdrassessmenthelp">CDR Assessment Help</option>
              <option value="other">Other</option>
              
            </Form.Control> */}
            <div style={{fontSize:'.7rem'}}> previous  value: {leadSource}</div>

            <Form.Select onChange={(e) => handleLeadSource(e.target.value)} style={{
              background: "#1577D9", color: 'white', textAlign: 'center', appearance: 'button',

            }} >
              <option
                value="linkedin"
                onClick={(e) => handleLeadSource(e.target.value)}
              >
                LinkedIn
              </option>

              <option
                value="facebook"
                onClick={(e) => handleLeadSource(e.target.value)}
              >
                Facebook
              </option>
              <option
                value="google"
                onClick={(e) => handleLeadSource(e.target.value)}              >
                Google
              </option>
              <option
                value="twitter"
                onClick={(e) => handleLeadSource(e.target.value)}              >
                Twitter
              </option>
              <option
                value="instagram"
                onClick={(e) => handleLeadSource(e.target.value)}              >
                Instagram
              </option>
              <option
                value="cdrforengineer"
                onClick={(e) => handleLeadSource(e.target.value)}              >
                CDR for Engineer
              </option>
              <option
                value="cdrskillassessment"
                onClick={(e) => handleLeadSource(e.target.value)}              >
                CDR Skill Assesment
              </option>
              <option
                value="other"
                onClick={(e) => handleLeadSource(e.target.value)}              >
                other
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="difficulty">
            <Form.Label style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "700", color: "#64676B", marginTop: ".5rem" }}>
              Difficulty
            </Form.Label>
            <Row onChange={(e) => { handleDifficulty(e.target.value) }}>

              <Col className='py-1 ' md={4} onClick={() => { handleDifficulty('Moderate'); setActive('1') }} >
                <div style={{ color:active==='1'&& 'white',background:active==='1'&& '#1577d9' ,border: "1px solid gray", borderRadius: "3px", textAlign: "center" }}>  Moderate</div>
              </Col>
              <Col className='py-1 ' md={4} onClick={(e) => { handleDifficulty('Easy'); setActive('2') }} >
                <div style={{ color:active==='2'&& 'white',background:active==='2'&& '#1577d9' ,border: "1px solid gray", borderRadius: "3px", textAlign: "center" }}>Easy</div>
              </Col>
              <Col className='py-1' md={4} onClick={(e) => { handleDifficulty('Tough'); setActive('3') }} >
                <div style={{ color:active==='3'&& 'white',background:active==='3'&& '#1577d9' ,border: "1px solid gray", borderRadius: "3px", textAlign: "center" }}>Tough</div>
              </Col>

            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
 </div>
  )
}

export default PersonalContainer