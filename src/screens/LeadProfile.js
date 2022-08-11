import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import BackgroundContainer from '../components/LeadProfile/BackgroundContainer'
import PaymentContainer from '../components/LeadProfile/PaymentContainer'
import PersonalContainer from '../components/LeadProfile/PersonalContainer'
import TotalDealContainer from '../components/LeadProfile/TotalDealContainer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const LeadProfile = () => {
  const {id} = useParams()
  const [lead, setLead] = useState({})

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leadId/${id}`)
    .then(res => {
      setLead(res.data.response)
      console.log(res.data)
    }
    )

  },[id])

  return (
    <Row>
     
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
    </Row> 
  )
}

export default LeadProfile