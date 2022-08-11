import React,{useState,useEffect} from 'react'
import OverviewRow from '../../components/dashboard/OverviewRow'
import PaymentRow from '../../components/dashboard/PaymentRow'
import StatsRow from '../../components/dashboard/StatsRow'
import Header from '../../components/Header'
import {Row,Col, DropdownButton, Dropdown} from 'react-bootstrap';
import Sidebar from '../../components/Sidebar'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'bootstrap'



const Dashboard = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {name} = params

  const [paymentList,setPaymentList] = useState([])
  const [leadList, setLeadList] = useState([])
  const [user, setUser] = useState({})
  const localUser = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if(!localUser){
      navigate('/login')
    }else{
    if(   localUser?.name!==name || localUser?.role!=='admin'){
      navigate(`/dashboard/${localUser?.name}`)
    }}
  },[])

  const getAllLeadsOfAClientManager = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leads/getAllLeadsOfAClientManager/${name}`)
    .then(res => {
      setLeadList(res.data.responseList)
      console.log(leadList)
    }
    )
  }

  const getAllPaymentsOfAClientManager = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/payments/getAllPaymentsOfAClientManager/${name}`)
    .then(res => {
      setPaymentList(res.data.responseList)
    }
    )
  }

  const getUser = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/appUser/byname/${name}`)
    .then(res => {
      setUser(res.data)
    }
    )
  }

  useEffect(() => {
    getAllLeadsOfAClientManager();
    getAllPaymentsOfAClientManager();
    getUser()
  },[])

  console.log(name,paymentList,leadList,user)

  const totalDealValue = leadList.reduce((acc,lead) => acc + lead.dealValue,0)
  const totalEarned = paymentList?.reduce((acc, payment) => acc + payment.amount, 0)
  const totalSales = leadList?.filter(l=>l.status==="won").length
  const totalLeads = leadList?.length
  const conversion = totalSales/totalLeads*100
  const totalDuePayment = totalDealValue - totalEarned


  return (
    <Row >
     
    <div className='px-4' style={{background:"#F1F1FA"}}>
      <Row>
        <Col md={9}>
        <StatsRow totalEarned={totalEarned} totalSales={totalSales} totalLeads={totalLeads} conversion={conversion}/>

        </Col>
        <Col md={3}>
        <OverviewRow totalSales={totalSales} totalEarned={totalEarned}  conversion={conversion} name={localUser.name} email={localUser.email}
        // teamName={leadList && leadList[0].teamLead } teamLead={paymentList && paymentList[0].recipient} 
         />

        </Col>

      </Row>
       <PaymentRow totalDealValue={totalDealValue} totalPayment={totalEarned} totalDuePayment={totalDuePayment}/>

       <div style={{background:"#fff"}} className='mx-4 ps-3 pe-3' >
        <div style={{display:'flex',justifyContent:"space-between",paddingTop:"10px"}}>
          <span style={{fontSize:'22px',fontWeight:"600",margin:"10px"}}>Top Leads </span>
          <DropdownButton
        
        
       size="sm"
          variant="outline-secondary"
          title="Monthly"
          id="dropdown-basic"
          style={{width:"fit-content"}}
          
        
        >
          
          
          <Dropdown.Item href="#">demo   </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"> demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">demo</Dropdown.Item>
        
        </DropdownButton>
        </div>

        <div
        className="mt-3"
        style={{
          fontSize: "22px",
          fontWeight: "700",
          background: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "20%" }}>Lead Name</div>
        <div
          className=""
          style={{
            width: "80%",
            fontSize: "20px",
            fontWeight: "700",
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            
          }}
        >
          <div style={{ width: "14%", paddingRight:'.5rem' }}>Date</div>
          <div style={{ width: "14%",paddingRight:'.5rem' }}>Source</div>
          <div style={{ width: "14%",paddingLeft  :'.5rem' }}>Team Name</div>
          <div style={{ width: "14%",paddingLeft:'2rem' }}>Status</div>
          <div style={{ width: "14%" }}>Deal Amount</div>
          <div style={{ width: "14%" }}>Total Amount</div>
          <div style={{ width: "14%" }}>Due Amount</div>
        </div>
      </div>


{leadList?.map((l, key) => (
  <>
  
  <div
  key={l.id}
  onClick={()=>navigate(`/lead/profile/${l.id}`)}
  style={{
      background: "#fff",
      height: "70px",
      color: "#64676B",
      fontFamily: "Arial",
    
    }}
    className="d-flex mt-2 mb-2 align-items-center"
  >
    <div style={{ fontWeight: "", fontSize: "18px", width: "20%" }}>
      <div className="d-flex justify-content-start align-items-center ">
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
          >
            {l.name.split(" ").map((n) => n[0])}
          </div>
        </div>
        <div
          style={{
            color: "black",
            fontWeight: "700",
            fontSize: "22px",
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

    <div
      className="d-flex justify-content-start align-items-center"
      style={{
        width: "80%",
        textAlign: "center",
      }}
    >
      <div style={{ fontWeight: "", fontSize: "18px", width: "14%" }}>
        {new Date(l.createdDate).toLocaleDateString()}
      </div>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ fontWeight: "", fontSize: "18px", width: "14%" }}
      >
        <div>{l.source}</div>
      </div>

      <div style={{ fontWeight: "", fontSize: "19px", width: "18%" }}>
       
      {l.teamLead}
      </div>

      <div
        style={{
          fontWeight: "700",
          fontSize: "19px",
          width: "14%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className=""
      >

      {l.paymentStatus}
      </div>

      <div style={{ fontWeight: "700", fontSize: "18px", width: "14%" }}>
      ${l.dealValue}
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          width: "14%",
          display: "flex",
          fontWeight: "700"
        }}
      >
        <div>
        ${l.dealValue - paymentList.filter(p=>p.payee=== l.name).amount}
        </div>
        </div>
        
        <div
        style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        width: "14%",
        fontWeight: "700",
        display: "flex"}} 
        >
        ${paymentList.filter(p=>p.payee=== l.name).amount}
        </div>
    </div>
    </div>
    <hr style={{height:'.2em'}}/>
    </>
    
    ))}
    
    <div className='d-flex justify-content-end align-items-center'>
<button style={{ border:'none', background:'#3144E7', fontSize:'20px', color:'white', borderRadius:'2px', padding:'6px 20px',marginTop:'1rem', marginBottom:'3rem'}}>View All</button>
</div>



{/*

{leadList?.map((l)=> 

  <Row key={l.id} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
    <Col md={3} style={{fontWeight:"",fontSize:"" }}>
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
  
    <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
      {new Date(l.createdDate).toLocaleDateString()}
    </Col>
    <Col md={1} style={{fontWeight:"",fontSize:"19px" }} >
     {l.source}
    </Col>
  
    <Col md={1} style={{fontWeight:"",fontSize:"19px" }} >
     {l.teamLead}
    </Col>
  
    
    <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
      {l.potential}
    </Col>
    <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
      ${l.dealValue}
    </Col>
  
    <Col md={2} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
     {paymentList.filter(p=>p.payee=== l.name).amount}
    </Col>
  
    <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {l.dealValue - paymentList.filter(p=>p.payee=== l.name).amount}
    </Col>
  </Row>
  )}
*/}

</div>

    </div>
    </Row>
  )
}

export default Dashboard