import React, { useEffect, useState } from 'react';
import {Row,Col, DropdownButton, Dropdown, Form, Button, } from 'react-bootstrap';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Leadscharts from '../../components/leads/Leadscharts';
import SelectComponent from '../../components/SelectComponent';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const AdminAllLeads = () => {
  const navigate = useNavigate();
  const [displayList,setDisplayList] = useState([]);
  const [leads, setLeads] = useState([])
   

  //filter states
  const [clientName, setClientName] = useState("");
  const [status, setStatus] = useState("");
  const [servicePlan, setServicePlan] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [message,setMessage] = useState("")

const localUser = JSON.parse(localStorage.getItem('user'));


  const getAllLeads = ()  => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leads`).then(res => {
      setLeads(res.data.responseList);
      setDisplayList(res.data.responseList);

    })
  } 
 

  const applyFilter = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/lead/attributeSearch`,{
       leadName:clientName,
      serviceType:servicePlan,
      potential:status,
      date1:date,
      amount:amount,
    }).then((res) => {
      setDisplayList(res.data.responseList);
    })
  };

  useEffect(() => {
    getAllLeads();
    if( localUser?.role!=='admin' ){
      navigate("/")
    }
  }, [])
  return (
    <Row style={{backgrund:"#F1F1FA"}}>
      
      {localStorage.getItem('user')?.type!=='admin'&&<h1>Forbidden Access</h1>}

<div className='ps-5'style={{background:"#F1F1FA"}} >
  <Leadscharts/>

  <Form>   
<Row className='py-3 d-flex'>
<Col md={2}>
<DropdownButton
        
        
       size="lg"
          variant="outline-secondary"
          title="Team Lead"
          id="dropdown-basic"
          style={{width:"fit-content"}}
          
        
        >
          
          
          <Dropdown.Item href="#"><MonetizationOnIcon/>demo   </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><ArchiveIcon/>demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"> <EditIcon/>demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><DeleteIcon/>demo</Dropdown.Item>
        
        </DropdownButton>
</Col>

      

       <Col md={2}>
       <Form.Control  size="sm" name="foo" placeholder="Client Name" type="text"  style={{height:"50px"}} className="" /> 

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="Service Plan" type="text"  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="Date" type="date"  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={1}>
       <Form.Control size="sm" name="foo" placeholder="Source" type="text"  style={{height:"50px"}}  className="" />

       </Col>
       <Col md={1}>
       <Button  style={{height:"50px", background:"#176EB3"}} type="reset" className=""  >  Reset </Button>

       </Col>
       <Col md={1}>
       <Button   style={{height:"50px", background:"#222529"}} type="submit" className="ms-4" >Search </Button>

       </Col>

      </Row>
      </Form>

   
<Row style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3">
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Lead Name
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Service Type
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  Contact Number
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Difficulty
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Deal Value
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Last Followup
  </Col>
</Row>
{leads?.map((l,index)=>

<Row key={l.id} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3">
  <Col md={2} style={{fontWeight:"",fontSize:"" }}>
  <Row> 
       
       <Col md={3} className="d-flex justify-content-center align-items-center  ">
       <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {l.name.split(" ").map((n)=>n[0])}
          </div>
          </Col>
          <Col md={9} style={{color:"",fontWeight:"700"}}>
          {l.name}
          <div style={{color:"#666",fontWeight:"400"}}>
           {l.email}
          </div>
          </Col>
          </Row>
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {l.serviceType}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }} >
   <img src={l.contactImage} alt="country" className='img-fluid'/>{l.phone}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {/* <SelectComponent/> */}
    <div className="form-group ">
        {l.leadStatus}
                               </div>
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
   ${l.dealValue}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
   <Row>
    <Col md={7}>
  
  {new Date(l.lastFollowUpDate).toLocaleDateString()} 
  </Col>
  <Col md={5}>
   <DropdownButton
       size="sm"
          variant="outline-secondary"
          title=""
          id="dropdown-basic"
        
        >
          
          
          <Dropdown.Item href="#"><MonetizationOnIcon/> Convert to Deal</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><ArchiveIcon/>Archive</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"> <EditIcon/>Edit Lead Details</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><DeleteIcon/>Delete</Dropdown.Item>
        
        </DropdownButton>
        </Col>
        </Row>
  </Col>
</Row>

)}

{leads?.map((l,index)=>

<Row key={l.index} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3">
  <Col md={2} style={{fontWeight:"",fontSize:"" }}>
  <Row> 
       
       <Col md={3} className="d-flex justify-content-center align-items-center  ">
       <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {l.shortName}
          </div>
          </Col>
          <Col md={9} style={{color:"",fontWeight:"700"}}>
          {l.name}
          <div style={{color:"#666",fontWeight:"400"}}>
           {l.email}
          </div>
          </Col>
          </Row>
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {l.serviceType}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }} >
   <img src={l.contactImage} alt="country" className='img-fluid'/>{l.contactNo}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    <SelectComponent/>
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
   {l.dealValue}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
   <Row>
    <Col md={7}>
  
  {l.lastFollowup}  
  </Col>
  <Col md={5}>
   <DropdownButton
        pullLeft
       size="sm"
          variant="outline-secondary"
          title=""
          id="dropdown-basic"
        
        >
          
          
          <Dropdown.Item href="#"><MonetizationOnIcon/> Convert to Deal</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><ArchiveIcon/>Archive</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"> <EditIcon/>Edit Lead Details</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><DeleteIcon/>Delete</Dropdown.Item>
        
        </DropdownButton>
        </Col>
        </Row>
  </Col>
</Row>

)}

</div>
    </Row>
  )
}

export default AdminAllLeads