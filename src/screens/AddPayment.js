import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
 
const AddPayment = () => {
  const navigate = useNavigate()
  const [date,setDate] = useState(null)
  const [remarks,setRemarks] = useState('')
  const [payee, setPayee] = useState('')
  const [recipient, setRecepient] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [receiptImage, setReceiptImage] = useState('')
  const [amount, setAmount] = useState(0)

const user = JSON.parse(localStorage.getItem('user'))

  const addAPayment=(e)=>{
    e.preventDefault()
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',    },
    }
      axios.post(`http://localhost:8080/api/payment/registerPayment`,
    {paymentDate:date,userId:3,remarks,updatedBy:"John abraham",amount,payee,recipient,serviceType,receiptImage,modifiesBy:"clientManager1",createdBy:"clientManager1"},config
  ).then(res=>{if(res.status===200){
    navigate(`/payment/${user?.name}`)
  }else{
    alert('Something went wrong')
  }})
  }

 

  return (
    <div className='d-flex' style={{width:'100%'}} >
    <Sidebar/> 
<div className=' py-5 d-flex flex-column' style={{width:'100%'}} >
  <Header/>
  <div style={{background:'#F1F1FA'}}>
  <div className='ps-4 py-4 ' style={{fontFamily:'Arial'}}>
       <h6 style={{fontWeight:'700'}}>Add New Payment</h6> 
       <p style={{color:"#7B7B7B",fontSize:'12px'}}>Payment From Lead</p>
        </div>
        <div className="formContainer mx-5 my-3 bg-white p-4">
        <h6 style={{fontWeight:'700'}}>Quick Registration</h6> 

          <Form onSubmit={addAPayment}>
            <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                <Row>
                  <Col>
                 
                <Form.Group controlId="leadname">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number"value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
                </Form.Group>
                </Col>

                <Col>
                 
                 <Form.Group controlId="leadname">
                   <Form.Label>Date</Form.Label>
                   <Form.Control type="date"value={date} onChange={(e)=>{setDate(e.target.value)}} />
                 </Form.Group>
                 </Col>
                </Row>
              </Col>
              
              <Col className='ps-3'>
                <Form.Group controlId="email">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control type="remarks" placeholder="First Payment" value={remarks} onChange={(e)=>setRemarks(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mx-5 pt-4">
                  <Col >
                  <Form.Group controlId="contactnumber">
                  <Form.Label>Payee</Form.Label>
                  <Form.Control type="text" placeholder="Ramesh" value={payee} onChange={(e)=>setPayee(e.target.value)} />
                </Form.Group>
                  </Col>
                  <Col >
                  <Form.Group controlId="work">
                  <Form.Label>Recipient</Form.Label>
                  <Form.Control type="text" placeholder="Sharmila Dangal" value={recipient} onChange={(e)=>setRecepient(e.target.value)} />
                </Form.Group>
                  </Col>
                
            </Row>
            <Row className="mx-5 pt-4">
              <Col className='pe-3'>
                  
                  <Form.Group controlId="work">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Control type="text" placeholder="CDR Assessment" value={serviceType} onChange={(e)=>setServiceType(e.target.value)} />
                </Form.Group>
               
              </Col>
              <Col className='ps-3'>
                <Form.Group controlId="clentbackground">
                  <Form.Label>Receipt</Form.Label>
                  <Form.Control type="file"value={receiptImage} onChange={(e)=>setReceiptImage(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Button type='submit' className='btn btn-primary mx-5 mt-4'>Add Payment</Button>
            <Button onClick={()=>navigate("/leads")}>Cancel</Button>
          </Form>
        </div>
  </div>
  </div>
  </div>
  )
}

export default AddPayment