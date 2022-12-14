import React,{useState,useEffect} from 'react'
import OverviewRow from '../../components/dashboard/OverviewRow'
import PaymentRow from '../../components/dashboard/PaymentRow'
import StatsRow from '../../components/dashboard/StatsRow'
import {Row,Col, Button} from 'react-bootstrap';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'




const Dashboard = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {name} = params
  const {id} = params

  const [timeInterval,setTimeInterval] = useState(null)
  const [paymentList,setPaymentList] = useState([])
  const [leadList, setLeadList] = useState([])
  const [clientManager, setClientManager] = useState({})
  const [displayList,setDisplayList] = useState([])
  const localUser = JSON.parse(localStorage.getItem('user'))
  const [clickedTime,setClickedTime] = useState("")

const options=[
{value:'weekly', label:'Weekly'},
{value:'semiMonthly', label:'15 days'},
{value:'weekly', label:'Monthly'}
]

  useEffect(() => {
    if(!localUser){
      navigate('/login')
    }
  },[])

  const getAllLeadsOfAClientManager = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leads/getAllLeadsOfAClientManager/${name}`)
    .then(res => {
      setLeadList(res.data.responseList)
      setDisplayList(res.data.responseList)
    }
    )
  }

  const getAllPaymentsOfAClientManager = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/payments/getAllLeadsOfAClientManager/${name}`)
    .then(res => {
      setPaymentList(res.data.responseList)
    }
    )
  }

  const getClientManagerById = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/salesman/salesmanId/${name}`)
    .then(res => {
      setClientManager(res.data)
    }
    )
  }

  useEffect(() => {
    getAllLeadsOfAClientManager();
    getAllPaymentsOfAClientManager();
    getClientManagerById()
  },[])


console.log(timeInterval)

  const totalDealValue = leadList?.reduce((acc,lead) => acc + lead.dealValue,0)
  const totalEarned = paymentList?.reduce((acc, payment) => acc + payment.amount, 0)
  const totalSales = leadList?.filter(l=>l.potential==="won").length
  const totalLeads = leadList?.length
  const conversion = totalSales/totalLeads*100
  const totalDuePayment = totalDealValue - totalEarned

  const fromWebsite = leadList?.filter(l=>l.source==="website").length
  const fromLinkedIn = leadList?.filter(l=>l.source==="linkedin").length
  const fromFacebook = leadList?.filter(l=>l.source==="facebook").length
  const fromInstagram = leadList?.filter(l=>l.source==="instagram").length
  const fromOthers = leadList?.filter(l=>l.source==="others").length



  const fetchDataOfGivenTimeInterval = (timeInterval) =>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/weekly-payments/client-manager/${timeInterval}/${name}`).then(res => {
      setDisplayList(res.data.responseList)
      setLeadList(res.data.responseList)
  }
)

axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/weekly-payments/client-manager/${timeInterval}/${name}`).then(res => {
  setPaymentList(res.data.responseList)
})
}


  return (
    <Row >
      <div style={{display:"flex",justifyContent:"space-between, alignItems:'center'"}}>
        <div className="ps-5 pt-3">
      <span style={{fontSize:'1.1rem'}}> Hello </span><span style={{fontWeight:'700', fontSize:'1.2rem'}}>{name}</span><br/>
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
      
     
    <div className='px-4' style={{background:"#F1F1FA"}}>
      <Row>
        <Col md={9}>
        <StatsRow name={name} totalDealValue={totalDealValue} totalEarned={totalEarned} totalSales={totalSales} totalLeads={totalLeads} conversion={conversion}/>

        </Col>
        <Col md={3}>
        <OverviewRow teamLead={clientManager?.teamLead} teamName={clientManager?.teamName} totalSales={totalSales} totalEarned={totalEarned}  conversion={conversion} name={name} email={localUser.email}
        id={localUser.id} role={localUser.role}
        // teamName={leadList && leadList[0].teamLead } teamLead={paymentList && paymentList[0].recipient} 
         />

        </Col>

      </Row>
       <PaymentRow totalLeads={totalLeads} fromOthers={fromOthers} fromWebsite={fromWebsite} fromInstagram={fromInstagram} fromLinkedIn={fromLinkedIn} fromFacebook={fromFacebook} name={name} totalDealValue={totalDealValue} totalEarned={totalEarned?.toFixed(2)} totalDuePayment={totalDuePayment?.toFixed(2)}/>

       <div style={{background:"#fff"}} className='ms-4 ps-3 pe-3' >
        <div style={{display:'flex',justifyContent:"space-between",paddingTop:"10px"}}>
          <span style={{fontSize:'1.3rem',fontWeight:"600",margin:".8rem"}}>Top Leads </span>
     

        </div>

        <div
        className=""
        style={{
          fontSize: "1.2rem",
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
            fontSize: "1.1rem",
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


{displayList?.map((l) => (
  <>
  
  <div
  key={l.id}
  style={{
      background: "#fff",
      height: "70px",
      color: "#64676B",
      fontFamily: "Arial",
      cursor:"pointer"
    
    }}
    className="d-flex mt-1 mb-1 align-items-center"
  >
    <div style={{ fontWeight: "", fontSize: "1.1rem", width: "20%" }}>
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

    <div
      className="d-flex justify-content-start align-items-center"
      style={{
        width: "80%",
        textAlign: "center",
      }}
    >
      <div style={{ fontWeight: "", fontSize: "1.1rem", width: "14%" }}>
        {new Date(l.createdDate).toLocaleDateString()}
      </div>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ fontWeight: "", fontSize: "1.1rem", width: "14%" }}
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

      <div style={{ fontWeight: "700", fontSize: "1.1rem", width: "14%" }}>
      ${(l.dealValue).toFixed(2)}
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.1rem",
          width: "14%",
          display: "flex",
          fontWeight: "700"
        }}
      >
        <div>
        ${(paymentList.filter(p=>p.payee=== l.name).reduce((acc,p) => acc + p.amount,0).toFixed(2))}

        </div>
        </div>
        
        <div
        style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.1rem",
        width: "14%",
        fontWeight: "700",
        display: "flex"}} 
        >
        ${l.dealValue-(paymentList.filter(p=>p.payee=== l.name).reduce((acc,p) => acc + p.amount,0).toFixed(2))}
        </div>
    </div>
    </div>
    <hr style={{height:'.2em'}}/>
    </>
    
    ))}
    
    <div className='d-flex justify-content-end align-items-center'>
<button onClick={()=>navigate("/leads/name")} style={{ border:'none', background:'#3144E7', fontSize:'1.1rem', color:'white', borderRadius:'2px', padding:'6px 1.1rem',marginTop:'1rem', marginBottom:'1rem'}}>View All</button>
</div>



</div>

    </div>
    </Row>
  )
}

export default Dashboard