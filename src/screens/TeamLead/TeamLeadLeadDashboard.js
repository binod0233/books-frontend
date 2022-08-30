import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'
import PaymentRow from '../../components/dashboard/PaymentRow'
import EarningStats from '../../components/TeamLeadDashboard.js/EarningStats'
import TeamLeadProfile from '../../components/TeamLeadDashboard.js/TeamLeadProfile'
import Select from 'react-select'

import axios from 'axios'

const TeamLeadLeadDashboard = () => {
  const params = useParams()

  const { teamLead } = params;

  const [leadList, setLeadList] = useState([])
  const [paymentList, setPaymentList] = useState([])
  const [clientManagerList, setClientManagersList] = useState([{
    name: 'hari sdfj',
    teamName: 'anup',
    email: 'sajd@gamil.com',
    numberOfLeads: 12,
    status: 'hsgf',
    weeks: 7,
    totalSales: 'static data'
  },
  {
    name: 'hari sdfj',
    teamName: 'anup',
    email: 'sajd@gamil.com',
    numberOfLeads: 12,
    status: 'hsgf',
    weeks: 7,
    totalSales: 'static data'
  },
  ])
  const [clickedTime, setClickedTime] = useState("")
  const [displayList, setDisplayList] = useState([])
  const [timeInterval, setTimeInterval] = useState(null)

  const options = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'semiMonthly', label: '15 days' },
    { value: 'weekly', label: 'Monthly' }
  ]

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
        // setClientManagersList(res.data.responseList)
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

  const fetchDataOfGivenTimeInterval = (timeInterval) => {
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
    console.log(leadList)

  }, [])

  const totalDealValue = leadList?.reduce((acc, lead) => acc + lead.dealValue, 0)
  const totalEarned = paymentList?.reduce((acc, payment) => acc + payment.amount, 0)
  const totalSales = leadList?.filter(l => l.status === "won").length
  const totalLeads = leadList?.length
  const conversion = totalSales / totalLeads * 100
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
    <Row style={{ background: "#F1F1FA" }}>
      <div style={{ display: "flex", justifyContent: "space-between, alignItems:'center'" }}>
        <div className="ps-5 pt-3 pb-2">
          <span style={{ fontSize: '1.1rem' }}> Hello </span><span style={{ fontWeight: '700', fontSize: '1.2rem' }}>{teamLead}</span><br />
          <div style={{ color: "#64676B" }}>
            Welcome to your Dashboard

          </div>
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
      <TeamLeadProfile />
      <EarningStats />
      <PaymentRow name={teamLead} totalDealValue={totalDealValue} totalPayment={totalEarned} totalDuePayment={totalDuePayment} />
      <div className=' ms-4 mb-4 row bg-white me-4 ' style={{ width: '97%', margin: '0 auto',  background: "#fff" }}>
        <div style={{ display: 'flex', justifyContent: "space-between", paddingTop: "10px" }}>
          <span style={{ fontSize: '1.3rem', fontWeight: "600", margin: ".8rem" }}>Top Client Manager</span>

          <Select isClearable options={options} onChange={(e) => setTimeInterval(e)} />

        </div>

        <Row style={{ background: "", height: "70px" }} className="d-flex align-items-center justify-content-center mb-3 mx-2">
          <Col md={2} style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Client Manager
          </Col>

          <Col md={2} style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Team Name
          </Col>

          <Col md={2} style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            No. of leads
          </Col>

          <Col md={2} style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Status
          </Col>

          <Col md={2} style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Weeks
          </Col>

          <Col md={2} style={{ fontWeight: "700", fontSize: "1.2rem" }}>
            Total Sales
          </Col>

        </Row>

        {clientManagerList?.map((l) =>

          <Row key={l.id} style={{ background: "#fff", height: "70px", marginBottom: '.5vh' }} className="d-flex align-items-center justify-content-center mb-3 mx-2">
            {/* <Col md={2} style={{ fontWeight: "", fontSize: "" }}>
              <Row>

                <Col md={3} className="d-flex justify-content-center align-items-center  ">
                  <div style={{ borderRadius: "50%", background: "#ED6F47", height: "45px", width: "45px", color: "#fff", fontWeight: "400" }} className="d-flex justify-content-center align-items-center ">
                    { }
                  </div>
                </Col>
                <Col md={9} style={{ color: "", fontWeight: "700" }}>
                  { }
                  <div style={{ color: "#666", fontWeight: "400" }}>
                    {l.email}
                  </div>
                </Col>
              </Row>
            </Col> */}

            <Row className='pb-2'>
              <Col md={2}>
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

              <Col md={2} style={{ fontWeight: "", fontSize: "19px" }}>
                {l.teamName}
              </Col>

              <Col md={2} style={{ fontWeight: "", fontSize: "19px" }} >
                {l.numberOfLeads}
              </Col>

              <Col md={2} style={{ fontWeight: "", fontSize: "19px" }}>
                {l.status}
              </Col>

              <Col md={2} style={{ fontWeight: "700", fontSize: "19px" }} className="ps-4">
                {l.weeks}
              </Col>

              <Col md={2} style={{ fontWeight: "", fontSize: "19px" }}>
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



      <div className='bg-white mx-4' style={{ width: '97%', margin: '0 auto' }}>




        <div style={{ background: "#fff" }} className='' >
          <div style={{ display: 'flex', justifyContent: "space-between", paddingTop: "10px" }}>
            <span style={{ fontSize: '1.3rem', fontWeight: "600", margin: ".8rem" }}>Top Leads </span>

            <Select isClearable options={options} onChange={(e) => setTimeInterval(e)} />

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
              <div style={{ width: "14%", paddingRight: '.5rem' }}>Date</div>
              <div style={{ width: "14%", paddingRight: '.5rem' }}>Source</div>
              <div style={{ width: "14%", paddingLeft: '.5rem' }}>Team Name</div>
              <div style={{ width: "14%", paddingLeft: '2rem' }}>Status</div>
              <div style={{ width: "14%" }}>Deal Amount</div>
              <div style={{ width: "14%" }}>Total Amount</div>
              <div style={{ width: "14%" }}>Due Amount</div>
            </div>
          </div>


          {leadList?.map((l) => (
            <>

              <div
                key={l.id}
                style={{
                  background: "#fff",
                  height: "70px",
                  color: "#64676B",
                  fontFamily: "Arial",
                  cursor: "pointer"

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
                      ${l.dealValue - paymentList.filter(p => p.payee === l.name).amount}
                    </div>
                  </div>

                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "1.1rem",
                      width: "14%",
                      fontWeight: "700",
                      display: "flex"
                    }}
                  >
                    ${paymentList.filter(p => p.payee === l.name).amount}
                  </div>
                </div>
              </div>
              <hr style={{ height: '.2em' }} />
            </>

          ))}

          <div className='d-flex justify-content-end align-items-center'>
            <button style={{ border: 'none', background: '#3144E7', fontSize: '1.1rem', color: 'white', borderRadius: '2px', padding: '6px 1.1rem', marginTop: '1rem', marginBottom: '1rem' }}>View All</button>
          </div>



        </div>
      </div>
    </Row>
  )
}

export default TeamLeadLeadDashboard