import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Form,Button,Col,Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ClientManagerProfileEdit = () => {

  const {id} = useParams()

  

  const [email,setEmail] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [phone,setPhone] = useState('')
  const [socialMedia,setSocialMedia] = useState('')
  const [platform,setPlatform] = useState('')
  const [teamLead,setTeamLead] = useState('')
  const [teamName,setTeamName] = useState('')
  const [visibleTo,setVisibleTo] = useState('')
  const [makeDisabled,setMakeDisabled] = useState(false)

  useEffect(()=>{
setMakeDisabled(JSON.parse(localStorage.getItem('user')).role!=="admin")
    axios.get(`${process.env.REACT_APP_API_URL}/api/salesman/salesmanId/${id}`)

    .then(res=>{
      setEmail(res.data.email)
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setPhone(res.data.phone)
      setSocialMedia(res.data.socialMedia)
      setPlatform(res.data.platform)
      setTeamLead(res.data.teamLead)
      setTeamName(res.data.teamName)
    })
  },[id])
 

  const editProfile=()=>{
    axios.post(`${process.env.REACT_APP_API_URL}/api/salesman/edit/${id}`,{
      email,
      firstName,
      lastName,
      phone,
      // socialMedia,
      platform,
      teamLead,
      team:teamName,
      visibleTo,

    }).then(res=>{
      if(res.data.status=200){
        alert('Profile Updated Successfully')
        
      }
    }
    )
  } 
  return (
    <Row style={{background:"#F1F1FA"}}>
    
      <div style={{width:"85%"}}>
      <div>
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
                  <Form.Control disabled={makeDisabled} type="email"value={email} placeholder="bibek@copenned.com" onChange={(e)=>{setEmail(e.target.value)}} />
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
                  <Form.Label>Team Lead</Form.Label>
                  <Form.Select disabled={makeDisabled} value={teamLead} onChange={(e)=>setTeamLead(e.target.value)} >
                  <option value="admin">Select</option>
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
                  <Form.Check disabled={makeDisabled} className='mx-2' type="radio" name="teamname" value="Las Vegas"  label="Las Vegas"  />
                  <Form.Check disabled={makeDisabled} className='mx-2' type="radio" name="teamname"  value="San Antonio" label="San Antonio"  />
                  <Form.Check disabled={makeDisabled} className='mx-2' type="radio" name="teamname"  value="Houston" label="Houston" />
      </div>
                </Form.Group>
              </Col>

            </Row>
            <Row className=" pt-4">
            <Col>
            <Form.Group controlId="visibleto">
                  <Form.Label>Visible To</Form.Label>
                  <Form.Select disabled={makeDisabled}  onChange={(e)=>setVisibleTo(e.target.value)} >
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
      </div>

    </Row>
 
  )
}

export default ClientManagerProfileEdit 