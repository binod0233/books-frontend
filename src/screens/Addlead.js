import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ReactFlagsSelect from "react-flags-select";
import Select from "react-select";

const Addlead = () => {
  const navigate = useNavigate()
  const [teamLeads, setTeamLeads] = useState([])
  const [clientManagers,setClientManagers] = useState([])
  const [activeTab, setActiveTab] = useState("1")
  const [fullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [work, setWork] = useState('')
  const [source, setSource] = useState('')
  const [communicationChannel, setCommunicationChannel] = useState('')
  const [gender,setGender] = useState('')
  const [leadBackground,setLeadBackground] = useState('')
  const [serviceType,setServiceType] = useState('')
  const [servicePlan,setServicePlan] = useState('')
  const [discipline,setDiscipline] = useState('')
  const [lastFollowUpDate,setLastFollowUpDate] = useState('')
  const [nextFollowUpDate,setNextFollowUpDate] = useState('')
  const [teamLead,setTeamLead] = useState('')
  const [clientManager,setClientManager] = useState(localStorage.getItem('user').userName)
  const [paymentStatus,setPaymentStatus] = useState('')
  const [paymentType,setPaymentType] = useState('')
  const [dealValue,setDealValue] = useState('')
  const [dueDate,setDueDate] = useState('')
  const [recepient,setRecepient] = useState('')
  const [payee,setPayee] = useState('')
const [activeGender, setActiveGender] = useState('1')

  //for react-flags-select
  const [select, setSelect] = useState("NP");
  const onSelect = (code) => setSelect(code);

  const options = [
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'messenger', label: 'Messenger' },
    { value: 'viber', label: 'Viber' }
  ]
const user = JSON.parse(localStorage.getItem('user'))
const clientManagerSelectList= []
const teamLeadSelectList= []


clientManagers?.map(c=>{
  clientManagerSelectList.push({value:c.userName,label:c.userName})
})

teamLeads?.map(c=>{
  teamLeadSelectList.push({value:c.userName,label:c.userName})
})

  const addALead = (e) => {
    e.preventDefault();

   console.log({name:fullName,email,phone:number,
    work,source,
    socialMedia:communicationChannel,
    gender,
    select,
    country:select,
    clientBackground:leadBackground,
    serviceType,
     servicePlan,discipline,
     lastFollowUpDate,
    nextFollowUpDate,teamLead,
    clientManager,paymentStatus,
    paymentMethod:paymentType,
    dealValue,dueDate,recepient,payee
})
    
    
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/lead/registerLead`,
    {name:fullName,email,phone:number,
      work,source,
      // socialMedia:communicationChannel,
      gender,
      select,
      country:select,
      clientBackground:leadBackground,
      serviceType,
       servicePlan,discipline,
       lastFollowUpDate,
      nextFollowUpDate,teamLead,
      clientManager,paymentStatus,
      paymentMethod:paymentType,
      dealValue,dueDate,recepient,payee
  }).then(res=>{if(res.status===200){
    if(user?.role==="admin"){
      navigate('/admin/allleads')
    }
    else if(user?.role==="teamlead"){
      navigate(`/teamlead/leads/${user.userName}`)
    }else if(user?.role==="clientmanager"){
      navigate(`/leads/${user?.userName}`)

    }
  }else{
    alert('Something went wrong')
  }
  }
  )
}

const getTeamLeads=()=>{
  axios.get(`http://localhost:8080/api/user/teamlead/getAll`)
  .then(res=>{
    setTeamLeads(res.data.responseList)
    
  })
}

const getClientManagers=()=>{
  axios.get(`http://localhost:8080/api/user/clientmanager/getAll`)
  .then(res=>{
    setClientManagers(res.data.responseList)
    
  })
}

useEffect(() => {
  getTeamLeads()
  getClientManagers()
}, [])
  return (
    <div className='d-flex justify-content-center ' style={{background:'#F1F1FA', height:'90vh'}} >
     
<div className=' d-flex flex-column justify-content-center' style={{width:'100%'}} >
  <div className=''>
  <div className='ps-4  ' style={{fontFamily:'Arial'}}>
       <h6 style={{fontWeight:'700'}}>Add New Lead</h6> 
       <p style={{color:"#7B7B7B",fontSize:'12px'}}>Add your New Lead here by filling up the form</p>
        </div>
        <div className="formContainer mx-5 my-3 bg-white p-4">
        <h6 style={{fontWeight:'700'}}>Quick Registration</h6> 
        <div  style={{height:"11vh",fontFamily:"sans-serif",fontSize:"20px",fontWeight:"600",background:"#FFE1EE",display:'flex',justifyContent:"space-between",alignItems:"center",padding:"0 20px"}}>
          <div style={{borderBottom:activeTab==="1"?"3px solid #DD2A7B":"none"}} onClick={()=>{setActiveTab("1")}}>
          <span className="me-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
</span>
          Basic Information</div>
          <div style={{borderBottom:activeTab==="2"?"3px solid #DD2A7B":"none"}} onClick={()=>{setActiveTab("2")}}>
          <span className="me-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
</span>
          Assessment Details</div>
          <div  style={{borderBottom:activeTab==="3"?"3px solid #DD2A7B":"none"}} onClick={()=>{setActiveTab("3")}}>
          <span className="me-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
</span>
          Payment Information</div>

        </div>
          <Form onSubmit={addALead}>
            {activeTab==="1"?
            <div>
              <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Form.Group controlId="leadname">
                  <Form.Label>Lead Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Nabin Chaudhary" value={fullName} onChange={(e)=>{
                    setFullName(e.target.value);
                    setPayee(e.target.value)
                    }} />
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
                   
<Form.Control type="select" placeholder="Engineer" value={work} onChange={(e)=>setWork(e.target.value)} />

                            <Form.Select
                              onChange={(e) => setWork(e.target.value)}
                            >
                              <option
                                value="none"
                                onClick={(e) => setWork(e.target.value)}
                              >
                                Engineer
                              </option>

                              <option
                                value="civil engineer"
                                onClick={(e) => setWork(e.target.value)}
                              >
                                Civil Engineer
                              </option>
                              <option
                                value="computer engineer"
                                onClick={(e) => setWork(e.target.value)}
                              >
                                Computer Engineer
                              </option>
                              <option
                                value="electrical engineer"
                                onClick={(e) => setWork(e.target.value)}
                              >
                                Electrical Engineer
                              </option>
                              <option
                                value="mechanical engineer"
                                onClick={(e) => setWork(e.target.value)}
                              >
                                Mechanical Engineer
                              </option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="ps-3">
                      <Row>
                        <Form.Label className="col-6">Gender</Form.Label>
                        <Form.Label className="col-6">Country</Form.Label>

                  <Col className='' md={1} >
                  <Form.Group controlId="email" >

                  <Button  className='bg-transparent text-black ' style={{border:activeGender==='1' && '1px solid #DD2A7B', color:activeGender==='1' && '#DD2A7B', background:activeGender==='1' && 'black'}} onClick={(e)=>{setGender("male"); setActiveGender('1')}} >Male</Button>
                </Form.Group>
                  </Col>
                  <Col className=' ms-4' md={2}  >
                  <Form.Group controlId="email"  style={{marginTop:''}}>
                  <Button  className='bg-transparent text-black ' style={{border:activeGender==='2' && '1px solid #DD2A7B', color:activeGender==='2' && '#DD2A7B', background:activeGender==='2' && 'black'}} onClick={(e)=>{setGender("female"); setActiveGender('2')}} >Female</Button>
                </Form.Group>
                  </Col>
                  <Col md={2}></Col>
                  <Col md={6}>
                  <Form.Group controlId="country">
                 
                <ReactFlagsSelect 
                style={{zIndex:'50'}} 
                selected={select}
                onSelect={onSelect}
                onChange={(e)=>setSelect(e.target.value)}
                fullWidth
                searchable
                searchPlaceholder='search countries...'
                />
                </Form.Group>
                  </Col>
                </Row>
               
              </Col>
            </Row>
            <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Row>
                  <Col md={6}>
                  <Form.Group controlId="leadsource">
                  <Form.Label>Lead Source</Form.Label>
            
            <Form.Control type="text" placeholder="Website/facebook" value={source} onChange={(e)=>setSource(e.target.value)} />
         
          <Form.Select  onChange={(e)=>setSource(e.target.value)} >
                <option value="none" onClick={(e)=>setSource(e.target.value)}>Website/facebook</option>
                
                  <option value="facebook" onClick={(e)=>setSource(e.target.value)}>Facebook</option>
                  <option value="linkedin" onClick={(e)=>setSource(e.target.value)}>Linkedin</option>
                  <option value="twitter" onClick={(e)=>setSource(e.target.value)}>Twitter</option>
                  <option value="instagram" onClick={(e)=>setSource(e.target.value)}>Instagram</option>
                
                
                </Form.Select>
                </Form.Group>
                  </Col>
                  <Col md={6}>
                  <Form.Group controlId="work">
                  <Form.Label>Communication</Form.Label>
                 
                
                 <Form.Control type="text" placeholder="WhatsApp" value={communicationChannel} onChange={(e)=>setCommunicationChannel(e.target.value)} />
                 <Form.Select  onChange={(e)=>setCommunicationChannel(e.target.value)} >
                 <option value="whatsapp" onClick={(e)=>setCommunicationChannel(e.target.value)}>WhatsApp</option>
                 
                 <option value="messenger" onClick={(e)=>setCommunicationChannel(e.target.value)}>Messenger</option>
                 <option value="viber" onClick={(e)=>setCommunicationChannel(e.target.value)}>Viber</option>
                 
                 
                 </Form.Select>
               
                <Select options={options} isMulti onChange={(e)=>setCommunicationChannel(e)}   />
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
            <Row className='mt-4' >
            <Col
            className="d-flex justify-content-end align-items-center"
            style={{ width: "100%" }}
            >
            <Button onClick={()=>{
               if(user?.role==="admin"){
                navigate('/admin/allleads')
              }
              else if(user?.role==="teamlead"){
                navigate(`/teamlead/leads/${user.name}`)
              }else if(user?.role==="clientmanager"){
                navigate(`/leads/${user?.name}`)
          
              }
            }}style={{border:"1px solid #DD2A7B"}} className='btn bg-white text-black mx-2 '>Cancel</Button>

            <Button onClick={()=>setActiveTab("2")} style={{background:"#DD2A7B",color:"white"}}  className='btn  mx-2 '>SAVE & NEXT</Button>
            </Col>
            </Row>
              </div>
              :activeTab==="2"?(
              <div>
              <Row className="mx-5 pt-3">
              <Col className='pe-3'>
                <Form.Group controlId="servicetype">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Select   value={serviceType} onChange={(e)=>setServiceType(e.target.value)}>
                  <option value="CDR Writing" onClick={(e)=>setRecepient(e.target.value)}>CDR Writing</option>
                  <option value="CDR Assessment" onClick={(e)=>setRecepient(e.target.value)}>CDR Assessment</option>
                  <option value="Assessment Review" onClick={(e)=>setRecepient(e.target.value)}>Assessment Review</option>

                </Form.Select>
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
                  <Row className='pt-4'>
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
             
              <Form.Select   onChange={(e)=>setTeamLead(e.target.value)}>
              <option  value="" onClick={(e)=>setTeamLead(e.target.value)}>Select...</option>

                {teamLeadSelectList?.map((item,index)=>
                 <option key={index} value={item.value} onClick={(e)=>setTeamLead(e.target.value)}>{item.label}</option>

                )}
              
            </Form.Select>
                </Form.Group>
                  </Col>
                  <Col >
                  <Form.Group controlId="clientmanager">
                  <Form.Label>Client Manager</Form.Label>
                  <Form.Select   onChange={(e)=>setClientManager(e.target.value)}>
              <option value="" onClick={(e)=>setClientManager(e.target.value)}>Select...</option>

                {clientManagerSelectList?.map((item,index)=>
                 <option key={index} value={item.value} onClick={(e)=>setClientManager(e.target.value)}>{item.label}</option>

                )}
              
            </Form.Select>
                </Form.Group>
                  </Col>
                  </Row>

                  <Row className="mt-4 mx-5">
                    <Col
                      className="d-flex justify-content-end align-items-center"
                      style={{ width: "100%" }}
                    >
                      <Button
                        style={{ border: "1px solid #DD2A7B" }}
                        onClick={() => {
                          setActiveTab("1");
                        }}
                        className="btn bg-white text-black mx-2"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => setActiveTab("3")}
                        style={{ background: "#DD2A7B", color: "white" }}
                        className="btn  mx-2"
                      >
                        SAVE & NEXT
                      </Button>
                    </Col>
                  </Row>
                </div>
              ) : (
                <div>
                  <Row className="mx-5 pt-4">
                    <div className="pe-3">
                      <Form.Group>
                        <Form.Label>Payment Method</Form.Label>
                        <div className=" d-flex justify-content-around align-items-center">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Form.Check
                              type="radio"
                              name="paymenttype"
                              label=""
                              value="Card Payment"
                              onChange={(e) => setPaymentType(e.target.value)}
                            />
                            <div
                              style={{
                                border: "1px solid #7B7B7B",
                                padding: ".5rem 4rem",
                                fontWeight: "700",
                                fontSize: "1.2em",
                              }}
                            >
                              Card Payment
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Form.Check
                              type="radio"
                              name="paymenttype"
                              label=""
                              value="Bank Transfer"
                              onChange={(e) => setPaymentType(e.target.value)}
                            ></Form.Check>
                            <div
                              style={{
                                border: "1px solid #7B7B7B",
                                padding: ".5rem 4rem",
                                fontWeight: "700",
                                fontSize: "1.2em",
                              }}
                            >
                              Bank Transfer
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Form.Check
                              type="radio"
                              name="paymenttype"
                              label=""
                              value="Apple Pay"
                              onChange={(e) => setPaymentType(e.target.value)}
                            ></Form.Check>
                            <div
                              style={{
                                border: "1px solid #7B7B7B",
                                padding: ".5rem 4rem",
                                fontWeight: "700",
                                fontSize: "1.2em",
                              }}
                            >
                              Apple Pay
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <Col className="ps-3 mt-4" md={6}>
                      <Form.Group controlId="payee">
                        <Form.Label>Payee</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nabin Chaudhary"
                          value={payee}
                          onChange={(e) => setPayee(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pe-3 mt-4" md={6}>
                      <Form.Group controlId="recepient">
                        <Form.Label>Recepient</Form.Label>
                        <Form.Select
                          onChange={(e) => setRecepient(e.target.value)}
                        >
                          <option
                            value=""
                            onClick={(e) => setRecepient(e.target.value)}
                          >
                            Choose One
                          </option>
                          <option
                            value="San Antonio"
                            onClick={(e) => setRecepient(e.target.value)}
                          >
                            San Antonio
                          </option>
                          <option
                            value="Houston"
                            onClick={(e) => setRecepient(e.target.value)}
                          >
                            Houston
                          </option>
                          <option
                            value="last vegas"
                            onClick={(e) => setRecepient(e.target.value)}
                          >
                            last Vegas
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mx-5 pt-4">
                    <Col className="ps-3">
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="amount">
                            <Form.Label>Deal Value</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="1200.50"
                              value={dealValue}
                              onChange={(e) => setDealValue(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="duedate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                              type="date"
                              value={dueDate}
                              onChange={(e) => setDueDate(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Form.Group controlId="paymentStatus">
                        <Form.Label>Payment Status</Form.Label>
                        <Form.Select
                          onChange={(e) => setPaymentStatus(e.target.value)}
                        >
                          {user?.role === "clientmanager" ? (
                            <>
                              <option
                                value="Unverified"
                                onClick={(e) =>
                                  setPaymentStatus(e.target.value)
                                }
                              >
                                Unverified
                              </option>
                            </>
                          ) : (
                            <>
                              <option
                                value="Remained"
                                onClick={(e) =>
                                  setPaymentStatus(e.target.value)
                                }
                              >
                                Remained
                              </option>
                              <option
                                value="Verified"
                                onClick={(e) =>
                                  setPaymentStatus(e.target.value)
                                }
                              >
                                Verified
                              </option>
                              <option
                                value="Unverified"
                                onClick={(e) =>
                                  setPaymentStatus(e.target.value)
                                }
                              >
                                Unverified
                              </option>
                            </>
                          )}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col
                      className="d-flex justify-content-end align-items-center"
                      style={{ width: "100%" }}
                    >
                      <Button
                        onClick={() => {
                          setActiveTab("1");
                        }}
                        style={{ border: "1px solid #DD2A7B" }}
                        className="btn bg-white text-black mx-2"
                      >
                        Cancel
                      </Button>

                      <Button
                        onClick={addALead}
                        style={{ background: "#DD2A7B", color: "white" }}
                        className="btn  mx-2"
                      >
                        SUBMIT
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addlead;
