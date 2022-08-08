import React, { useEffect,useState } from 'react';
import {Row,Col, Form, Button, } from 'react-bootstrap';

import Leadscharts from '../../components/leads/Leadscharts';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
 
const Leads = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {clientManager} = params;
  const [leads, setLeads] = useState([]);

//filter states
const [clientName, setClientName] = useState('');
const[status, setStatus] = useState('');
const[servicePlan, setServicePlan] = useState('');
const [date, setDate] = useState('');
const [source, setSource] = useState('');

const localUser = JSON.parse(localStorage.getItem('user'));


  const [potential,setPotential] = useState([]);
  const [message,setMessage] = useState('')
  const getAllLeadsOfAClientManager = ()  => {
    axios.get(`http://localhost:8080/api/lead/leads/getAllLeadsOfAClientManager/${clientManager}`).then(res => {
      setLeads(res.data.responseList);
    })
  }
  const handleInputChange=(e,leadId)=>{
    setPotential(e.target.value);
    axios.put(`http://localhost:8080/api/lead/leads/changepotential/${leadId}`,{potential:e.target.value}).then(res => {
      if(res.status==='ok'){
        setMessage("Difficulty Changed Successfully")
      }else{
        setMessage("There was a problem changing difficulty")

      }
    })
  }

  const applyFilter=()=>{

  }

  useEffect(() => {
    if(!localUser){
      navigate('/login')
    }else{
    if(localUser?.name!==clientManager || localUser?.role!=='admin'){
      navigate(`/leads/${localUser?.name}`)
    }}
  },[])


  useEffect(() => {
    getAllLeadsOfAClientManager();
  }, [])

 const totalLeads = leads?.length
 const totalFollowUps = leads.filter(lead => lead.nextFollowUpDate).length
  const leadConverted = leads.filter(lead => lead.potential === 'won').length
  const leadLost = leads.filter(lead => lead.potential === 'lost').length

   return (
    <Row style={{backgrund:"#F1F1FA"}}>
      <Col md={3} xl={2}>
        <Sidebar/> 
      </Col>
      <Col md={9} xl={10}>
   
<div className='ps-5'style={{background:"#F1F1FA"}} >
  <Leadscharts totalLeads={totalLeads}  totalFollowUps={totalFollowUps} leadConverted={leadConverted} leadLost={leadLost}   />

  <Form>   
<Row className='py-3 d-flex'>
<Col md={2}>
<select className="form-control" name="city" onChange={(e)=>setStatus(e.target.value)} style={{fontWeight:"700"}}>
                                      <option value="">Status</option>
                                      <option value="lost">Lost</option>
                                      <option value="cold">Cold</option>
                                      <option value="negotiating" style={{background:""}}>Negotiating</option>
                                      <option value="won">Won</option>
                                  </select>
</Col>

      

       <Col md={2}>
       <Form.Control  size="sm" name="foo" placeholder="Client Name" type="text" value={clientName} onChange={(e)=>setClientName(e.target.value)} style={{height:"50px"}} className="" /> 

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="Service Plan" type="text" value={servicePlan} onChange={(e)=>setServicePlan(e.target.value)}  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="Date" type="date" value={date} onChange={(e)=>setDate(e.target.value)}  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={1}>
       <Form.Control size="sm" name="foo" placeholder="Source" type="text" value={source} onChange={(e)=>setSource(e.target.value)}  style={{height:"50px"}}  className="" />

       </Col>
       <Col md={1}>
       <Button  style={{height:"50px", background:"#176EB3"}} type="reset" onClick={()=>{navigate(`/leads/${clientManager}`)}} className="">  Reset </Button>

       </Col>
       <Col md={1}>
       <Button   style={{height:"50px", background:"#222529"}} type="submit" onClick={applyFilter} className="ms-4" >Search </Button>

       </Col>

      </Row>
      </Form>

   
<Row style={{background:"#fff",height:"70px"}} className=" align-items-center mb-3">
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Lead Name
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Service Type
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  Contact Number
  </Col>

  <Col md={1} style={{fontWeight:"700",fontSize:"20px" }}>
    Status
  </Col>

  <Col md={1} style={{fontWeight:"700",fontSize:"20px" }}>
   Deal Value
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Last Followup
  </Col>
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Next Followup
  </Col>
</Row>
{leads?.map((l)=>

<Row key={l.id} style={{background:"#fff",height:"70px",color:"#64676B",fontFamily:"Arial"}} className="align-items-center mb-3">
  <Col md={2} style={{fontWeight:"",fontSize:"" }}>
  <Row> 
       
       <Col md={3} className="  ">
       <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {l.name.split(" ").map((n)=>n[0])}
          </div>
          </Col>
          <Col md={9} style={{color:"black",fontWeight:"900",fontSize:"20px"}}>
          {l.name}
          <div style={{color:"#666",fontWeight:"400",fontSize:"14px"}}>
           {l.email}
          </div>
          </Col>
          </Row>
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {l.serviceType}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }} >
 {l.phone}
  </Col>

  <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
    {/* <SelectComponent/> */}
    <div className="form-group ">
                                   <select className="form-control" name="city" onChange={(e)=>handleInputChange(e,l.id)} style={{fontWeight:"700"}}>
                                      
                                       <option value="lost">Lost</option>
                                       <option value="cold">Cold</option>
                                       <option value="negotiating" style={{background:""}}>Negotiating</option>
                                       <option value="won">Won</option>
                                   </select>
                               </div>
  </Col>

  <Col md={1} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
   ${l.dealValue}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
  
  {new Date(l.lastFollowUpDate).toLocaleDateString()} 
  
  </Col>
  
  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
  
  {new Date(l.nextFollowUpDate).toLocaleDateString()} 
  
  </Col>
</Row>

)}

</div>
</Col>
    </Row>
  )
}

export default Leads