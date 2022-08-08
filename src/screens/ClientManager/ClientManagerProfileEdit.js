import React,{useState} from 'react'
import { Form,Button,Col,Row } from 'react-bootstrap'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const ClientManagerProfileEdit = () => {
  const [email,setEmail] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [phone,setPhone] = useState('')
  const [socialMedia,setSocialMedia] = useState('')
  const [platform,setPlatform] = useState('')
  const [leadName,setLeadName] = useState('')
  const [teamName,setTeamName] = useState('')
  const [visibleTo,setVisibleTo] = useState('')

  const editProfile=()=>{
    console.log("edit profile")
  } 
  return (
    <Row style={{background:"#F1F1FA"}}>
      <Col md={3} xl={2}>
        <Sidebar/>
      </Col>
      <Col>
      <div>
      <Header/>
      <div className='p-4 bg-white' style={{height:"85vh",fontFamily:"sans-serif",margin:"0 20px "}}>
        <Button style={{borderRadius:"50%",background:"whitesmoke",color:'black',outline:"none",border:"none"}}><i className="fa-solid fa-arrow-left"></i></Button>
        <span style={{marginLeft:"5vw",fontSize:"25px",fontFamily:"sans-serif",fontWeight:"400"}}>Edit Client Manager Information</span>
        <hr/>
        <Row>
          <Col md={6} style={{display:'flex',flexDirection:"column"}}>
            <span style={{fontSize:"21px",fontWeight:"700"}}>User Information</span>
            <span style={{fontSize:"18px",color:"#7B7B7B"}}>Enter the required information below to register.You can change it anytime you want.</span>
          </Col>
          <Col>
          <Row>
            <Col>
            Profile Photo

            </Col>
            <Col>
            <img src="/images/dashboard/avatar.png" alt="avatar" style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
            <Button style={{borderRadius:"50%",outline:"none",border:"none",marginLeft:"-5vh",marginTop:"10vh",fontSize:"8px"}}>
            <i className="fa-solid fa-pen text-white" ></i>
              
              </Button>

            </Col>
          </Row>
          </Col>
        </Row>
        <Row>
        <Form onSubmit={editProfile}>
              
                <Row>
                  <Col>
                 
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email"value={email} placeholder="bibek@copenned.com" onChange={(e)=>{setEmail(e.target.value)}} />
                </Form.Group>
                </Col>

                <Col>
                 <Row>
                  <Col>
                 <Form.Group controlId="name">
                   <Form.Label>First Name</Form.Label>
                   <Form.Control type="text" placeholder="Mukesh" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
                 </Form.Group>
                 </Col>
                 <Col>
                 <Form.Group controlId="lastname">
                   <Form.Label>Last Name</Form.Label>
                   <Form.Control type="text" placeholder="Mukesh" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
                 </Form.Group>
                 </Col>
                 </Row>
                
                 </Col>
                </Row>
             
              
             
            
            <Row className="pt-4">
                  <Col >
                  <Form.Group controlId="contactnumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="number" placeholder="+91 82128731892" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </Form.Group>
                  </Col>
                  <Col >
                  <Row>
                    <Col>
                    <Form.Group controlId="socialmedia">
                  <Form.Label>Social Media</Form.Label>
                  <Form.Control type="text" placeholder="@vecc" value={socialMedia} onChange={(e)=>setSocialMedia(e.target.value)} />
                </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="socialmedia" style={{marginTop:"4.75vh"}}>
                  <Form.Select value={platform} onChange={(e)=>setPlatform(e.target.value)} >

                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="youtube">Youtube</option>
                    <option value="whatsapp">Whatsapp</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
                    </Col>
                  </Row>
                  
                  </Col>
                
            </Row>
            <Row className=" pt-4">
              <Col className='pe-3'>
                  
                  <Form.Group controlId="leadname">
                  <Form.Label>Lead Name</Form.Label>
                  <Form.Select value={leadName} onChange={(e)=>setLeadName(e.target.value)} >
                  <option value="neha rathi">Neha Rathi</option>
                    <option value="sharmila dangol">Sharmila Dangol</option>
                    <option value="suman subedi">Suman Subedi</option>
                    </Form.Select>
                </Form.Group>
              </Col>

              <Col className='ps-3'>
                <Form.Group controlId="teamname">
                  <Form.Label>Team Name</Form.Label>
                  <div className='d-flex'>
                  <Form.Check className='mx-2' type="radio" name="teamname" label="Las Vegas" onClick={(e)=>setTeamName(e.target.value)} />
                  <Form.Check className='mx-2' type="radio" name="teamname" label="San Antonio" onClick={(e)=>setTeamName(e.target.value)} />
                  <Form.Check className='mx-2' type="radio" name="teamname" label="Houston" onClick={(e)=>setTeamName(e.target.value)} />
      </div>
                </Form.Group>
              </Col>

            </Row>
            <Row className=" pt-4">
            <Col>
            <Form.Group controlId="visibleto">
                  <Form.Label>Visible To</Form.Label>
                  <Form.Select  onChange={(e)=>setVisibleTo(e.target.value)} >
                  <option value="all">All</option>
                    <option value="admin">Admin</option>
                    <option value="teamLead">Team Lead</option>
                  </Form.Select>
                </Form.Group>
            </Col>
            <Col>
            <Button type='submit' className='btn btn-primary w-100' style={{marginTop:"4.75vh"}}>Confirm</Button>
            </Col>
            </Row>
          </Form>
        </Row>
      </div>
    </div>
      </Col>

    </Row>
 
  )
}

export default ClientManagerProfileEdit 