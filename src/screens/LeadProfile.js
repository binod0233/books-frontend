import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import BackgroundContainer from '../components/LeadProfile/BackgroundContainer'
import PaymentContainer from '../components/LeadProfile/PaymentContainer'
import PersonalContainer from '../components/LeadProfile/PersonalContainer'
import TotalDealContainer from '../components/LeadProfile/TotalDealContainer'
import Sidebar from '../components/Sidebar'

const LeadProfile = () => {
  return (
    <Row>
      <Col md={3} xl={2}>
        <Sidebar/>
        </Col>
        <Col md={9} xl={10}>
          <Header/>
          <Row className='p-4' style={{background:"#F1F1FA"}}>
              <Col md={4}>
                <PersonalContainer/>
              </Col>
              <Col md={8}>
                <Row>
                  <Col>
                  <BackgroundContainer/>
                  
                  </Col>
                  <Col>
                  <PaymentContainer/>
                  </Col>
                </Row>
                <Row>
                  <TotalDealContainer/>
                </Row>
              </Col>
              
            </Row>
        </Col>
    </Row> 
  )
}

export default LeadProfile