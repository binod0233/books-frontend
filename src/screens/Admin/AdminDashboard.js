import React, { useEffect,useState } from 'react'

import { Col, Row,Button} from 'react-bootstrap'
import PaymentRow from '../../components/dashboard/PaymentRow'

import EarningStats from '../../components/TeamLeadDashboard.js/EarningStats'

import axios from 'axios'

const AdminDashboard = () => {

  const [teamLeads,setTeamLeads] = useState([])
  const [topClientManagers, setTopClientManagers] = useState([])
  const [topLeads,setTopLeads] = useState([])
  const [teamLeadStats,setTeamLeadStats] = useState({})
  const [clientManagerStats,setClientManagerStats] = useState({})
  const [clickedTime,setClickedTime] = useState("")


  useEffect(() => {
    getTopTeamLeads()
    getTopLeads()
    getTeamLeadStats()
    getClientManagerStats()
    getTopClientManagers()

  },[])

  const getTopTeamLeads = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/teamLead/teamLeads`).then(res => {
      setTeamLeads(res.data.responseList)
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

  const  getTopClientManagers = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/salesman/salesmen`).then(res => {
      setTopClientManagers(res.data.responseList)
    }).catch(err => {
      console.log(err)
    }
    )
  }

  const getTeamLeadStats = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/teamlead/getTeamLeadStats`).then(res => {
      setTeamLeadStats(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }
  const getClientManagerStats = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/teamlead/getClientManagerStats`).then(res => {
      setClientManagerStats(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }

  const fetchDataOfGivenTimeInterval = (timeInterval) =>{
    axios.get(`REACT_APP_BASE_URL/api/lead/weekly-payments/${timeInterval?.value}`).then(res => {
      console.log(res.data.responseList)
      console.log(res.data.responseList)
  })
  axios.get(`REACT_APP_BASE_URL/api/payment/weekly-payments/${timeInterval?.value}`).then(res => {
    console.log(res.data.responseList)
  })

}


  return (
    <div className='px-4'>
      
      <Row style={{background:"#F1F1FA"}}>
      <div className='pb-3' style={{display:"flex",justifyContent:"space-between"}}>
        <div className="ps-5 pt-3">
           <strong>Welcome Admin !</strong><br/>
          
        </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"300px",marginLeft:"auto", marginRight:"5vh",marginTop:"3vh"}}>
        <Button style={{background:clickedTime==="weekly"?"black":"white",height:"35px",width:"fit-content",borderRadius:"2px",width:"90px",boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.05",border:" 0.7px solid #D9D9D9",color:clickedTime==="weekly"?"white":"black"}} onClick={()=>{fetchDataOfGivenTimeInterval("weekly");setClickedTime("weekly")}}>7 days</Button>
        <Button style={{background:clickedTime==="semimonthly"?"black":"white",height:"35px",width:"fit-content",borderRadius:"2px",width:"90px",boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.05",border:"0.7px solid #D9D9D9",color:clickedTime==="semimonthly"?"white":"black"}} onClick={()=>{fetchDataOfGivenTimeInterval("semimonthly");setClickedTime("semimonthly")}}>15 days</Button>
        <Button style={{background:clickedTime==="monthly"?"black":"white",height:"35px",width:"fit-content",borderRadius:"2px",width:"90px",boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.05",border:"0.7px solid #D9D9D9",color:clickedTime==="monthly"?"white":"black"}} onClick={()=>{fetchDataOfGivenTimeInterval("monthly");setClickedTime("monthly")}}>Month</Button>
      </div>
      </div>
     
        <EarningStats/>
              <PaymentRow/>
              <div className='bg-white mx-4'>
                  <h5 className='text-black p-2'>Top Team Leads</h5>
              <Row  style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Client Manager
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Team Name
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  Client Managers
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Status
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Weeks
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Total Earnings
  </Col>
  
</Row>


{teamLeads?.map((l)=>

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
<h5 className='text-black p-2'>Top Client Managers</h5>

  <Row  style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    ClientManagers
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Team Name
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  No. of Leads
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


{topClientManagers?.map((l)=>

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