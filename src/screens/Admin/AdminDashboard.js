import React, { useEffect } from 'react'
import AccumulationDoughnut from '../../components/components/DonotChart'
import Line  from '../../components/components/LineChart'
import Pie from '../../components/components/PieChart'
import { Col, Row,Table,Dropdown,DropdownButton, } from 'react-bootstrap'
import PaymentRow from '../../components/dashboard/PaymentRow'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import EarningStats from '../../components/TeamLeadDashboard.js/EarningStats'
import TeamLeadProfile from '../../components/TeamLeadDashboard.js/TeamLeadProfile'
import OverallEarningStats from '../../components/AdminDashboard.js/OverallEarningStats'
import axios from 'axios'

const AdminDashboard = () => {

  const [clientManagers,setClientManagers] = useState([])
  const [teamLeads,setTeamLeads] = useState([])
  const [teamLeadStats,setTeamLeadStats] = useState({})
  const [clientManagerStats,setClientManagerStats] = useState({})

  const leadsdataList=[{shortName:" NJ",name:"  Niall Johnson",email:"nialljohnson@gmail.com",serviceType:"CDR Writing",contactImage:"/c1.png",contactNo:"+27 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" HS",name:"  Harjeet Singh ",email:"harjeet@gmail.com",serviceType:"CDR Writing",contactImage:"/india.png",contactNo:"+91 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" RG",name:"  Ramana Greg ",email:"ramana@gmail.com",serviceType:"CDR Writing",contactImage:"/c2.png",contactNo:"+968 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},{shortName:" NJ",name:"  Niall Johnson",email:"nialljohnson@gmail.com",serviceType:"CDR Writing",contactImage:"/c1.png",contactNo:"+27 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" HS",name:"  Harjeet Singh ",email:"harjeet@gmail.com",serviceType:"CDR Writing",contactImage:"/india.png",contactNo:"+91 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" RG",name:"  Ramana Greg ",email:"ramana@gmail.com",serviceType:"CDR Writing",contactImage:"/c2.png",contactNo:"+968 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"}]
  

  useEffect(() => {
    getTopClientManagers()
    getTopTeamLeads()
    getTeamLeadStats()
    getClientManagerStats()

  },[])

  const getTopClientManagers = () => {
    axios.get('http://localhost:5000/api/salesman/getTopClientManagers').then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }
  const getTopTeamLeads = () => {
    axios.get('http://localhost:5000/api/teamlead/getTopTeamLeads').then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }
  const getTeamLeadStats = () => {
    axios.get('http://localhost:5000/api/teamlead/getTeamLeadStats').then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }
  const getClientManagerStats = () => {
    axios.get('http://localhost:5000/api/teamlead/getClientManagerStats').then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    }
    )
  }

  return (
    <div>
      
      <Row style={{background:"#F1F1FA"}}>
      <Col md={3} xl={2}>
      <Sidebar/>
      </Col>
      <Col md={9} xl={10}>
        <Header/>
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


{leadsdataList.map((l,index)=>

<Row key={l.index} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
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


{leadsdataList.map((l,index)=>

<Row key={l.index} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
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
      </Col>
    </Row>
      
      </div>
  )
} 

export default AdminDashboard