import axios from 'axios'
import React, {  useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'

 
const Addlead = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("1")
  const [fullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [work, setWork] = useState('')
  const [source, setSource] = useState('')
  const [communicationChannel, setCommunicationChannel] = useState('')
  const [gender,setGender] = useState('')
  const [country,setCountry] = useState('')
  const [leadBackground,setLeadBackground] = useState('')
  const [serviceType,setServiceType] = useState('')
  const [servicePlan,setServicePlan] = useState('')
  const [discipline,setDiscipline] = useState('')
  const [lastFollowUpDate,setLastFollowUpDate] = useState('')
  const [nextFollowUpDate,setNextFollowUpDate] = useState('')
  const [teamLead,setTeamLead] = useState('')
  const [clientManager,setClientManager] = useState('')
  const [paymentStatus,setPaymentStatus] = useState('')
  const [paymentType,setPaymentType] = useState('')
  const [dealValue,setDealValue] = useState('')
  const [dueDate,setDueDate] = useState('')
  const [recepient,setRecepient] = useState('')
  const [payee,setPayee] = useState('')


  const addALead=(e)=>{
    e.preventDefault()
    
    const user = JSON.parse(localStorage.getItem('user'))
    
    
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/lead/registerLead`,
    {name:fullName,email,phone:number,
      work,source,
      socialMedia:communicationChannel,
      gender,
      country,
      clientBackground:leadBackground,
      serviceType,
       servicePlan,discipline,
       lastFollowUpDate,
      nextFollowUpDate,teamLead,
      clientManager,paymentStatus,
      paymentType,
      dealValue,dueDate,recepient,payee
  }).then(res=>{if(res.status===200){
    navigate(`/leads/${user?.name}`)
  }else{
    alert('Something went wrong')
  }
  }
  )
}

  return (
    <div className='d-flex' style={{width:'100%'}} >
     
<div className=' py-5 d-flex flex-column' style={{width:'100%'}} >
  <div style={{background:'#F1F1FA'}}>
  <div className='ps-4 py-4 ' style={{fontFamily:'Arial'}}>
       <h6 style={{fontWeight:'700'}}>Add New Lead</h6> 
       <p style={{color:"#7B7B7B",fontSize:'12px'}}>Add your New Lead here by filling up the form</p>
        </div>
        <div className="formContainer mx-5 my-3 bg-white p-4">
        <h6 style={{fontWeight:'700'}}>Quick Registration</h6> 
        <div  style={{height:"11vh",fontFamily:"sans-serif",fontSize:"20px",fontWeight:"600",background:"#FFE1EE",display:'flex',justifyContent:"space-between",alignItems:"center",padding:"0 20px"}}>
          <span style={{borderBottom:activeTab==="1"?"3px solid #DD2A7B":"none"}} onClick={()=>{setActiveTab("1")}}>Basic Information</span>
          <span style={{borderBottom:activeTab==="2"?"3px solid #DD2A7B":"none"}} onClick={()=>{setActiveTab("2")}}>Assessment Details</span>
          <span  style={{borderBottom:activeTab==="3"?"3px solid #DD2A7B":"none"}} onClick={()=>{setActiveTab("3")}}>Payment Information</span>

        </div>
          <Form onSubmit={addALead}>
            {activeTab==="1"?
            <div>
              <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Form.Group controlId="leadname">
                  <Form.Label>Lead Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Nabin Chaudhary" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                </Form.Group>
              </Col>
              <Col className='ps-3'>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Nabin Chaudhary@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Row>
                  <Col md={8}>
                  <Form.Group controlId="contactnumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" placeholder="+91 8218374652" value={number} onChange={(e)=>setNumber(e.target.value)} />
                </Form.Group>
                  </Col>
                  <Col md={4}>
                  <Form.Group controlId="work">
                  <Form.Label>Work</Form.Label>
                  <Form.Control type="text" placeholder="Engineer" value={work} onChange={(e)=>setWork(e.target.value)} />
                </Form.Group>
                  </Col>
                </Row>
               
              </Col>
              <Col className='ps-3'>
                <Row>
                  <Col md={3}>
                  <Form.Group controlId="email">
                  <Form.Label>Gender</Form.Label>
                  <Button className='bg-transparent text-black' style={{border:'1px solid grey'}} onClick={(e)=>setGender("male")} >Male</Button>
                </Form.Group>
                  </Col>
                  <Col md={3}>
                  <Form.Group controlId="email" style={{marginTop:'30px'}}>
                  <Button className='bg-transparent text-black ' style={{border:'1px solid grey'}} onClick={(e)=>setGender("female")} >Female</Button>
                </Form.Group>
                  </Col>
                  <Col md={6}>
                  <Form.Group controlId="email">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="email" placeholder="India" value={country} onChange={(e)=>setCountry(e.target.value)} />
                </Form.Group>
                  </Col>
                </Row>
               
              </Col>
            </Row>
            <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Row>
                  <Col md={8}>
                  <Form.Group controlId="leadsource">
                  <Form.Label>Lead Source</Form.Label>
                  <Form.Control type="text" placeholder="Website/facebook" value={source} onChange={(e)=>setSource(e.target.value)} />
                </Form.Group>
                  </Col>
                  <Col md={4}>
                  <Form.Group controlId="work">
                  <Form.Label>Communication</Form.Label>
                  <Form.Control type="text" placeholder="WhatsApp" value={communicationChannel} onChange={(e)=>setCommunicationChannel(e.target.value)} />
                </Form.Group>
                  </Col>
                </Row>
               
              </Col>
              <Col className='ps-3'>
                <Form.Group controlId="clentbackground">
                  <Form.Label>Client Background and Need</Form.Label>
                  <Form.Control type="text" placeholder="Done mechanicalengineering and now wants to..." value={leadBackground} onChange={(e)=>setLeadBackground(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <div style={{float:"right"}}>
            <Button onClick={()=>{
              navigate('/leads')
            }}style={{border:"1px solid #DD2A7B"}} className='btn bg-white text-black mx-5 mt-4'>Cancel</Button>

            <Button onClick={()=>setActiveTab("2")} style={{background:"#DD2A7B",color:"white"}}  className='btn  mx-5 mt-4'>SAVE & NEXT</Button>
            
            </div>
              </div>
              :activeTab==="2"?<div>
              <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Form.Group controlId="servicetype">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Control type="text" placeholder="CDR Writing" value={serviceType} onChange={(e)=>setServiceType(e.target.value)} />
                </Form.Group>
              </Col>
              <Col className='ps-3'>
                <Form.Group controlId="serviceplan">
                  <Form.Label>Service Plan</Form.Label>
                  <Form.Select  onChange={(e)=>setServicePlan(e.target.value)} >
                  <option value="none" onClick={(e)=>setServicePlan(e.target.value)}>Choose one</option>

                    <option value="basic" onClick={(e)=>setServicePlan(e.target.value)}>Basic</option>
                    <option value="extended" onClick={(e)=>setServicePlan(e.target.value)}>Extended</option>
                    <option value="premium" onClick={(e)=>setServicePlan(e.target.value)}>Premium</option>
                    <option value="royal" onClick={(e)=>setServicePlan(e.target.value)}>Royal</option>


                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mx-5 pt-4">
                  <Col >
                  <Form.Group controlId="discipline">
                  <Form.Label>Discipline</Form.Label>
                  <Form.Control type="text" placeholder="Civil Engineer" value={discipline} onChange={(e)=>setDiscipline(e.target.value)} />
                </Form.Group>
                  </Col>
                  <Row>
                  <Col >
                  <Form.Group controlId="work">
                  <Form.Label>Last Follow Up Date</Form.Label>
                  <Form.Control type="datetime-local" placeholder="Engineer" value={lastFollowUpDate} onChange={(e)=>setLastFollowUpDate(e.target.value)} />
                </Form.Group>
                  </Col>
                  <Col >
                  <Form.Group controlId="work">
                  <Form.Label>Next Follow Up Date</Form.Label>
                  <Form.Control type="datetime-local" placeholder="Engineer" value={nextFollowUpDate} onChange={(e)=>setNextFollowUpDate(e.target.value)} />
                </Form.Group>
                  </Col>
                  </Row>
                 
               
              
            </Row>
            <Row className="mx-5 pt-4">
                  <Col >
                  <Form.Group controlId="teamlead">
                  <Form.Label>Team Lead</Form.Label>
                  <Form.Control type="text" placeholder="San Antonio" value={teamLead} onChange={(e)=>setTeamLead(e.target.value)} />
                </Form.Group>
                  </Col>
                  <Col >
                  <Form.Group controlId="clientmanager">
                  <Form.Label>Client Manager</Form.Label>
                  <Form.Control type="text" placeholder="Hemanta karki" value={clientManager} onChange={(e)=>setClientManager(e.target.value)} />
                </Form.Group>
                  </Col>
                  </Row>
            <div style={{float:"right"}}>
            <Button style={{border:"1px solid #DD2A7B"}} onClick={()=>{
              setActiveTab("1")
            }}  className='btn bg-white text-black mx-5 mt-4'>Cancel</Button>
            <Button onClick={()=>setActiveTab("3")} style={{background:"#DD2A7B",color:"white"}}  className='btn  mx-5 mt-4'>SAVE & NEXT</Button>
           

            </div>
              </div>
              :<div>
              <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Form.Group >
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Check type="radio" name="paymenttype" label="Card Payment" value="Card Payment" onChange={(e)=>setPaymentType(e.target.value)}/>
                  <Form.Check type="radio" name="paymenttype" label="Bank Transfer" value="Bank Transfer" onChange={(e)=>setPaymentType(e.target.value)}/>
                  <Form.Check type="radio" name="paymenttype" label="Apple Pay" value="Apple Pay" onChange={(e)=>setPaymentType(e.target.value)}/>
                
                </Form.Group>
              </Col>
              <Col className='ps-3'>
                <Form.Group controlId="payee">
                  <Form.Label>Payee</Form.Label>
                  <Form.Control type="text" placeholder="Nabin Chaudhary" value={payee} onChange={(e)=>setPayee(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Form.Group controlId="recepient">
                  <Form.Label>Recepient</Form.Label>
                  <Form.Select   onChange={(e)=>setRecepient(e.target.value)}>
                    <option value="San Antonio" onClick={(e)=>setRecepient(e.target.value)}>San Antinio</option>
                    <option value="Houston" onClick={(e)=>setRecepient(e.target.value)}>Houston</option>
                    <option value="Los Angelos" onClick={(e)=>setRecepient(e.target.value)}>Los Angelos</option>

                  </Form.Select>
                </Form.Group>
                 
                
               
              </Col>
              <Col className='ps-3'>
                <Row>
                  <Col md={6}>
                  <Form.Group controlId="amount">
                  <Form.Label>Deal Value</Form.Label>
                  <Form.Control type="number" placeholder="1200.50" value={dealValue} onChange={(e)=>setDealValue(e.target.value)} />
                </Form.Group>
                 </Col>
                  <Col md={6}>
                  <Form.Group controlId="duedate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
                </Form.Group>
                  </Col>
                </Row>
               
              </Col>
              <Col>
              <Form.Group controlId="paymentStatus">
                  <Form.Label>Payment Status</Form.Label>
                  <Form.Select onChange={(e)=>setPaymentStatus(e.target.value)}>
                    <option value="Remained" onClick={(e)=>setPaymentStatus(e.target.value)}>Remained</option>
                    <option value="Verified" onClick={(e)=>setPaymentStatus(e.target.value)}>Verified</option>
                    <option value="Unverified" onClick={(e)=>setPaymentStatus(e.target.value)}>Unverified</option>
                  </Form.Select>                </Form.Group>
              </Col>
            </Row>
            
            <div style={{float:"right"}}>
            <Button onClick={()=>{
              setActiveTab("1")
            }}  style={{border:"1px solid #DD2A7B"}} className='btn bg-white text-black mx-5 mt-4'>Cancel</Button>

            <Button onClick={addALead} style={{background:"#DD2A7B",color:"white"}} className='btn  mx-5 mt-4'>SUBMIT</Button>
            
            </div>
              </div>}
            
            
          </Form>
        </div>
  </div>
  </div>

  </div>
  )
}

export default Addlead