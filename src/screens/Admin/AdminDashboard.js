import React, { useEffect,useState } from 'react'

import { Col, Row,Button} from 'react-bootstrap'
import PaymentRow from '../../components/dashboard/PaymentRow'

import EarningStats from '../../components/TeamLeadDashboard.js/EarningStats'

import axios from 'axios'
import Select from 'react-select'


const AdminDashboard = () => {

  const [teamLeads,setTeamLeads] = useState([])
  const [topClientManagers, setTopClientManagers] = useState([{
    name: 'hari sdfj',
    teamName: 'anup',
    email: 'sajd@gamil.com',
    numberOfLeads: 12,
    status: 'hsgf',
    weeks: 7,
    totalSales: 'static data'
  },
  {
    name: 'hari sdfjstha ',
    teamName: 'anup hfsdas',
    email: 'sajd@gamil.com',
    numberOfLeads: 1252,
    status: 'hsgfunfsdf',
    weeks: 7,
    totalSales: 'static data'
  },
  ])
  const [topLeads,setTopLeads] = useState([])
  const [teamLeadStats,setTeamLeadStats] = useState({})
  const [clientManagerStats,setClientManagerStats] = useState({})
  const [clickedTime,setClickedTime] = useState("")
  const [timeInterval, setTimeInterval] = useState(null)

  const options = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'semiMonthly', label: '15 days' },
    { value: 'weekly', label: 'Monthly' }
  ]


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
      // setTopClientManagers(res.data.responseList)
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
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/weekly-payments/${timeInterval?.value}`).then(res => {
      console.log(res.data.responseList)
  })
  axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/weekly-payments/${timeInterval?.value}`).then(res => {
    console.log(res.data.responseList)
  })

}

  return (
    <div className='px-4'>
      
      <Row style={{background:"#F1F1FA"}}>
      <div style={{ display: "flex", justifyContent: "space-between, alignItems:'center'" }}>
        <div className="ps-5 pt-3 pb-4">
          <span style={{ fontSize: '1.2rem', fontWeight:"700" }}> Hello Admin !! </span>
         
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "300px", marginLeft: "auto", marginRight: "5vh" }}>
          <div>
            <Button style={{ background: clickedTime === "weekly" ? "black" : "white", height: "35px", width: "fit-content", borderRadius: "2px", width: "90px", boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.05", border: "0.7px solid #D9D9D9", color: clickedTime === "weekly" ? "white" : "black" }} onClick={() => { fetchDataOfGivenTimeInterval("weekly"); setClickedTime("weekly") }}>7 days</Button>
          </div>
          <div>
            <Button style={{ background: clickedTime === "semimonthly" ? "black" : "white", height: "35px", width: "fit-content", borderRadius: "2px", width: "90px", boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.05", border: "0.7px solid #D9D9D9", color: clickedTime === "semimonthly" ? "white" : "black" }} onClick={() => { fetchDataOfGivenTimeInterval("semimonthly"); setClickedTime("semimonthly") }}>15 days</Button>
          </div>
          <div>
            <Button style={{ background: clickedTime === "monthly" ? "black" : "white", height: "35px", width: "fit-content", borderRadius: "2px", width: "90px", boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.05", border: "0.7px solid #D9D9D9", color: clickedTime === "monthly" ? "white" : "black" }} onClick={() => { fetchDataOfGivenTimeInterval("monthly"); setClickedTime("monthly") }}>Month</Button>
          </div>

        </div>
      </div>
     
        <EarningStats/>
              <PaymentRow/>
              <div className='bg-white mx-4 mb-3' style={{ width: '97%', margin: '0 auto' }}>
                  <div className='text-black ' style={{ fontSize: '1.3rem', fontWeight: "600", margin: ".8rem" }}>Top Team Leads</div>
              <Row  style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} className='d-flex justify-content-center' style={{fontWeight:"700",fontSize:"1.2rem" }}>
    Client Manager
  </Col>

  <Col md={2} className='d-flex justify-content-center' style={{fontWeight:"700",fontSize:"1.2rem" }}>
    Team Name
  </Col>

  <Col md={2} className='d-flex justify-content-center' style={{fontWeight:"700",fontSize:"1.2rem" }}>
  Client Managers
  </Col>

  <Col md={2} className='d-flex justify-content-center' style={{fontWeight:"700",fontSize:"1.2rem" }}>
    Status
  </Col>

  <Col md={2} className='d-flex justify-content-center' style={{fontWeight:"700",fontSize:"1.2rem" }}>
   Weeks
  </Col>

  <Col md={2} className='d-flex justify-content-center' style={{fontWeight:"700",fontSize:"1.2rem" }}>
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


{/* <div className='bg-white mx-4'>
<h5 className='text-black p-2'>Top Client Managers</h5>

  <Row  style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"700",fontSize:"1.2rem" }}>
    ClientManagers
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"1.2rem" }}>
    Team Name
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"1.2rem" }}>
  No. of Leads
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"1.2rem" }}>
   Status
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"1.2rem" }}>
   Weeks
  </Col>
  <Col md={2} style={{fontWeight:"700",fontSize:"1.2rem" }}>
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
</div> */}

<div className=' mx-4 row bg-white  ' style={{ width: '97%', margin: '0 auto',  background: "#fff" }}>
        <div style={{ display: 'flex', justifyContent: "space-between", paddingTop: "10px" }}>
          <span style={{ fontSize: '1.3rem', fontWeight: "600", margin: "" }}>Top Client Manager</span>

          <Select isClearable options={options} onChange={(e) => setTimeInterval(e)} />

        </div>

        <Row style={{ background: "", height: "70px" }} className="d-flex align-items-center justify-content-start mb-3  ">
          <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Client Manager
          </Col>

          <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Team Name
          </Col>

          <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            No. of leads
          </Col>

          <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Status
          </Col>

          <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Weeks
          </Col>

          <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Total Sales
          </Col>

        </Row>

        {topClientManagers?.map((l) =>

          <Row key={l.id} style={{ background: "#fff", height: "70px", marginBottom: '.5vh' }} className="d-flex align-items-center justify-content-start mb-3 ">
          

            <Row className='pb-2'>
              <Col md={2} className='d-flex justify-content-center'>
                <div style={{ fontWeight: "", fontSize: "", }}>
                  <div className="d-flex justify-content-start ">
                    <div className="  ">
                      <div
                        style={{
                          borderRadius: "50%",
                          background: "#ED6F47",
                          height: "45px",
                          width: "45px",
                          color: "#fff",
                          fontWeight: "400",
                        }}
                        className="d-flex justify-content-center align-items-center  "
                      // onClick={()=>navigate(`/lead/profile/${l.id}`)}
                      >
                        {l.name.split(" ").map((n) => n[0])}
                      </div>
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        lineHeight: "25px",
                        marginLeft: "8px",
                      }}
                    >
                      {l.name}
                      <div
                        style={{
                          color: "#666",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        {l.email}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "", fontSize: "1.2rem" }}>
                {l.teamName}
              </Col>

              <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "", fontSize: "1.2rem" }} >
                {l.numberOfLeads}
              </Col>

              <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "", fontSize: "1.2rem" }}>
                {l.status}
              </Col>

              <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "700", fontSize: "1.2rem" }} >
                {l.weeks}
              </Col>

              <Col md={2} className='d-flex justify-content-center' style={{ fontWeight: "", fontSize: "1.2rem" }}>
                {l.totalSales}
              </Col>
            <hr />
            
            </Row>
         
          

          </Row>

        )}
        <div className='d-flex justify-content-end align-items-center'>
<button  style={{ border:'none', background:'#3144E7', fontSize:'1.1rem', color:'white', borderRadius:'2px', padding:'6px 1.1rem',marginTop:'1rem', marginBottom:'1rem'}}>View All</button>
</div>

      </div>
    </Row>
      
      </div>
  )
} 

export default AdminDashboard