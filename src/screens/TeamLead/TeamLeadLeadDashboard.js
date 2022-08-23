import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import PaymentRow from '../../components/dashboard/PaymentRow'
import EarningStats from '../../components/TeamLeadDashboard.js/EarningStats'
import TeamLeadProfile from '../../components/TeamLeadDashboard.js/TeamLeadProfile'

import axios from 'axios'

const TeamLeadLeadDashboard = () => {

  const {teamLead} = useParams()

  const [leadList,setLeadList] = useState([])
  const [paymentList,setPaymentList] = useState("")
  const [clientManagerList,setClientManagersList] = useState([])

  const user = JSON.parse(localStorage.getItem("user"))

  const getLeadsOfATeamLead = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leads/getAllLeadsOfATeamLead/${teamLead}`)
    .then(res => {
      setLeadList(res.data.responseList)
    }
    )
  }

  const getPaymentsOfATeamLead = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/payments/getAllPaymentsOfATeamLead/${teamLead}`)
    .then(res => {
      setPaymentList(res.data.responseList)
    }
    )
  }
  const getClientManagersOfATeamLead = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/salesman/salesmen/getAllClientManagersOfATeamLead/${teamLead}`)
    .then(res => {
      setClientManagersList(res.data.responseList)
    }
    )
  }


  useEffect(() => {
    getClientManagersOfATeamLead()
    getLeadsOfATeamLead()
    getPaymentsOfATeamLead()

  },[])

  

  return (
    <Row style={{background:"#F1F1FA"}}>
     
        <TeamLeadProfile/>
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

{clientManagerList?.map((l)=>

<Row key={l.id} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"",fontSize:"" }}>
  <Row> 
       
       <Col md={3} className="d-flex justify-content-center align-items-center  ">
       <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {}
          </div>
          </Col>
          <Col md={9} style={{color:"",fontWeight:"700"}}>
          {}
          <div style={{color:"#666",fontWeight:"400"}}>
           {l.email}
          </div>
          </Col>
          </Row>
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {l.teamName}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }} >
   <img src={l.numberOfLeads} alt="country" className='img-fluid'/>{l.contactNo}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {l.status}
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
   {l.weeks}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
   {l.totalSales}
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
{leadList?.map((l)=>

<Row key={l.id} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"",fontSize:"" }}>
  <Row> 
       
       <Col md={3} className="d-flex justify-content-center align-items-center  ">
       <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {l.name.split(" ").map((n)=>n[0]).join("")}
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

  <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
    {l.Date}
  </Col>

  <Col md={1} style={{fontWeight:"",fontSize:"19px" }} >
   <img src={l.source} alt="country" className='img-fluid'/>{l.contactNo}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
  {l.teamName}

  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
    {l.status}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
  {l.dealAmount}
  </Col>
  <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
  {l.dueAmount}
  </Col>
</Row>

)}


</div>
    </Row>
  )
}

export default TeamLeadLeadDashboard