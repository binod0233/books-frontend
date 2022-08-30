import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'
import PaymentRow from '../../components/dashboard/PaymentRow'
import EarningStats from '../../components/TeamLeadDashboard.js/EarningStats'
import TeamLeadProfile from '../../components/TeamLeadDashboard.js/TeamLeadProfile'

import axios from 'axios'

const TeamLeadLeadDashboard = () => {
  const params = useParams()

  const {teamLead} = params;

  const [leadList,setLeadList] = useState([])
  const [paymentList,setPaymentList] = useState([])
  const [clientManagerList,setClientManagersList] = useState([])
  const [clickedTime,setClickedTime] = useState("")
  const [displayList,setDisplayList] = useState([])



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

  const getTeamLeadProfile = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/teamlead/teamleadId/${teamLead}`)
    .then(res => {
      setClientManagersList(res.data.responseList)
    }
    )
  }

  const fetchDataOfGivenTimeInterval = (timeInterval) =>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/weekly-payments/team-lead/${timeInterval?.value}/${teamLead}`).then(res => {
      setDisplayList(res.data.responseList)
      setLeadList(res.data.responseList)
  })
  axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/weekly-payments/team-lead/${timeInterval?.value}/${teamLead}`).then(res => {
      setPaymentList(res.data.responseList)
  })

}


  useEffect(() => {
    getClientManagersOfATeamLead()
    getLeadsOfATeamLead()
    getPaymentsOfATeamLead()
    getTeamLeadProfile()

  },[])

  const totalDealValue = leadList?.reduce((acc,lead) => acc + lead.dealValue,0)
  const totalEarned = paymentList?.reduce((acc, payment) => acc + payment.amount, 0)
  const totalSales = leadList?.filter(l=>l.status==="won").length
  const totalLeads = leadList?.length
  const conversion = totalSales/totalLeads*100
  const totalDuePayment = totalDealValue - totalEarned
  const totalFollowUps = leadList?.filter((lead) => lead.nextFollowUpDate).length;
  const leadConverted = leadList?.filter((lead) => lead.potential === "won").length;
  const leadLost = leadList?.filter((lead) => lead.potential === "lost").length;
  const leadsFronWebsites = leadList?.filter((lead) => lead.source === "websites").length;
  const leadsFronLinkedin = leadList?.filter((lead) => lead.source === "linkedin").length;
  const leadsFronInstagram = leadList?.filter((lead) => lead.source === "instagram").length;
  const leadsFronOthers = leadList?.filter((lead) => lead.source === "others").length;
  const leadsFronFacebook = leadList?.filter((lead) => lead.source === "facebook").length;

  return (
    <Row style={{background:"#F1F1FA"}}>
      <div style={{display:"flex",justifyContent:"space-between, alignItems:'center'"}}>
        <div className="ps-5 pt-3 pb-2">
      <span style={{fontSize:'1.1rem'}}> Hello </span><span style={{fontWeight:'700', fontSize:'1.2rem'}}>{teamLead}</span><br/>
        <div style={{color:"#64676B"}}>
        Welcome to your Dashboard

        </div> 
        </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"300px",marginLeft:"auto", marginRight:"5vh"}}>
      <div>
        <Button style={{background:clickedTime==="weekly"?"black":"white",height:"35px",width:"fit-content",borderRadius:"2px",width:"90px",boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.05",border:"0.7px solid #D9D9D9",color:clickedTime==="weekly"?"white":"black"}} onClick={()=>{fetchDataOfGivenTimeInterval("weekly");setClickedTime("weekly")}}>7 days</Button>
      </div>
      <div>
        <Button style={{background:clickedTime==="semimonthly"?"black":"white",height:"35px",width:"fit-content",borderRadius:"2px",width:"90px",boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.05",border:"0.7px solid #D9D9D9",color:clickedTime==="semimonthly"?"white":"black"}} onClick={()=>{fetchDataOfGivenTimeInterval("semimonthly");setClickedTime("semimonthly")}}>15 days</Button>
      </div>
      <div>
        <Button style={{background:clickedTime==="monthly"?"black":"white",height:"35px",width:"fit-content",borderRadius:"2px",width:"90px",boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.05",border:"0.7px solid #D9D9D9",color:clickedTime==="monthly"?"white":"black"}} onClick={()=>{fetchDataOfGivenTimeInterval("monthly");setClickedTime("monthly")}}>Month</Button>
      </div>

      </div>
      </div>
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