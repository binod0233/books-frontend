import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import BackgroundContainer from '../components/LeadProfile/BackgroundContainer'
import PaymentContainer from '../components/LeadProfile/PaymentContainer'
import PersonalContainer from '../components/LeadProfile/PersonalContainer'
import TotalDealContainer from '../components/LeadProfile/TotalDealContainer'

const LeadProfile = () => {
  const [communicationChannel, setCommunicationChannel] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [servicePlan, setServicePlan] = useState('')
  const [leadStatus, setLeadStatus] = useState('')
  const [leadSource, setLeadSource] = useState('')
  const [screenshot, setScreenshot] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [nextDate, setNextDate] = useState('')
  const [lastDate, setLastDate] = useState('')
  const [descipline, setDescipline] = useState('')
  const [serviceWanted, setServiceWanted] = useState('')
  
  const [leads, setLeads] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/lead/leadId/${id}`)
        .then((res) => {
          setLeads(res.data);
          setNextDate(res.data.nextFollowUpDate)
          setServiceType(res.data.serviceType)
          setServicePlan(res.data.servicePlan)
          setLeadSource(res.data.source)
          setLeadStatus(res.data.potential)
          setCommunicationChannel(res.data.socialMedia)
          setDescipline(res.data.descipline)
        });
      }, [id]);
      
      console.log(leads);

  const handleServiceType = (serviceType) => {
    setServiceType(serviceType);
  }
  const handleServicePlan = (servicePlan) => {
    setServicePlan(servicePlan);
  }
  const handleLeadStatus = (leadStatus) => {
    setLeadStatus(leadStatus);
  }
  const handleLeadSource = (leadSource) => {
    setLeadSource(leadSource);
  }
  const handleDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  }
  const handleScreenshot = (screenshot) => {
    setScreenshot(screenshot);
  }
  const handleCommunicationChannel = (communicationChannel) => {
    setCommunicationChannel(communicationChannel);
  }
  const handleNextDateChange = (nextDate) => {
    setNextDate(nextDate)
  }
  const handleLastDateChange = (lastDate) => {
    setLastDate(lastDate)
  }
  const handleDescipline = (descipline) => {
    setDescipline(descipline)
  }
  const handleServiceWantedChange=(serviceWanted)=>{
    setServiceWanted(serviceWanted)
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(servicePlan)
  console.log(serviceType);
  console.log(leadSource)
  console.log(leadStatus);
  console.log(difficulty)
  console.log(screenshot);
  console.log(communicationChannel);
  console.log(lastDate)
  console.log(nextDate)
  console.log(descipline)
  console.log(serviceWanted)
  }

  return (
    <Row>

    <Form onSubmit={handleSubmit}>
    <Row className='p-4' style={{ background: "#F1F1FA" }}>
        <Col md={4} >
          <PersonalContainer
            handleLeadSource={handleLeadSource}
            handleLeadStatus={handleLeadStatus}
            handleDifficulty={handleDifficulty}
            handleCommunicationChannel={handleCommunicationChannel}
            handleScreenshot={handleScreenshot}
          leadSource={leadSource}
          communicationChannel={communicationChannel}
          leadStatus={leadStatus}
          leads={leads}

          />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <BackgroundContainer
                handleServiceType={handleServiceType}
                handleServicePlan={handleServicePlan}
                handleNextDateChange={handleNextDateChange}
                nextDate={nextDate}
                serviceType={serviceType}
                servicePlan={servicePlan}

            handleLastDateChange={handleLastDateChange}
            handleServiceWantedChange={handleServiceWantedChange}
              />

            </Col>
            <Col md={6}>
              <PaymentContainer 
              handleDescipline={handleDescipline} 
              descipline={descipline}
              leads={leads}

              />
            </Col>
          </Row>
          <Row md={12}>
            <TotalDealContainer />
          </Row>
        </Col>

      </Row>
      <button type='submit'>Submit</button>


      

      
    </Form>

    </Row>
  )
}

export default LeadProfile