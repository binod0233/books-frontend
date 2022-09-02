import React, { useEffect,useState } from 'react'

import { Col, Row,} from 'react-bootstrap'
import PaymentRow from '../../components/dashboard/PaymentRow'

import EarningStats from '../../components/TeamLeadDashboard.js/EarningStats'

import axios from 'axios'

const AdminDashboard = () => {

  const [clientManagers,setClientManagers] = useState([])
  const [topLeads,setTopLeads] = useState([])
  const [teamLeadStats,setTeamLeadStats] = useState({})
  const [clientManagerStats,setClientManagerStats] = useState({})

 

  useEffect(() => {
    getTopClientManagers()
    getTopLeads()
    getTeamLeadStats()
    getClientManagerStats()

  },[])

  const getTopClientManagers = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/salesman/salesmen`).then(res => {
      setClientManagers(res.data.responseList)
    }).catch(err => {
      console.log(err)
    }
    )
  }
  const  getTopLeads = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leads`).then(res => {
      setTopLeads(res.data.responseList)
    }).catch(err => {
      console.log(err)
    }
    )
  }
  const getTeamLeadStats = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/teamlead/getTeamLeadStats`).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }
  const getClientManagerStats = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/teamlead/getClientManagerStats`).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }

  return (
    <div className='px-4'>
      
      <Row style={{background:"#F1F1FA"}}>
     
     
        <EarningStats/>
              <PaymentRow/>
              <div className='bg-white mx-4'>
                  <h5 className='text-black p-2'>Top Client Manager</h5>
              <Row  style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Client Manager
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Team Name
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  No. of leads
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Status
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Weeks
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Total Sales
  </Col>
  
</Row>


{clientManagers?.map((l)=>

<Row key={l.id} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
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

        </Col>
        </Row>
  </Col>
</Row>

)}
</div>



<div className='bg-white mx-4'>
<h5 className='text-black p-2'>Top Leads</h5>

              <Row  style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Lead Name
  </Col>

  <Col md={1} style={{fontWeight:"700",fontSize:"20px" }}>
    Date
  </Col>

  <Col md={1} style={{fontWeight:"700",fontSize:"20px" }}>
  Source
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Team Name
  </Col>

  <Col md={1} style={{fontWeight:"700",fontSize:"20px" }}>
   Status
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Deal Amount
  </Col>
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Total Amount
  </Col>
  <Col md={1} style={{fontWeight:"700",fontSize:"20px" }}>
   Due Amount
  </Col>
</Row>


{topLeads?.map((l)=>

<Row key={l.id} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
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

        </Col>
        </Row>
  </Col>
</Row>

)}
</div>
    </Row>
      
      </div>
  )
} 

export default AdminDashboard