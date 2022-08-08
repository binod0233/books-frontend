import React, { useState,useEffect } from 'react'
import {  Col, Dropdown, DropdownButton, Form, Row, Table } from 'react-bootstrap'
import PaymentTop from '../../components/payments/PaymentTop'
import Sidebar from '../../components/Sidebar'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';

const Payment = () => {
const [paymentList,setPaymentList] = useState([])
const navigate = useNavigate() 
const params = useParams()
const {clientManager} = params
console.log(clientManager)
useEffect(()=>{
  getAllThePayments()
},[])

const getAllThePayments =  ()=>{
   axios.get(`http://localhost:8080/api/payment/payments/getAllLeadsOfAClientManager/${clientManager}`)
  .then(res=>{
    setPaymentList(res.data.responseList)
    
  })
  
}
const totalPayment = paymentList?.reduce((acc,i)=>acc+i.amount,0)
  return (
    <Row  style={{background:"#F1F1FA"}} >
     <Col md={3} xl={2}>
     <Sidebar/> 
     </Col>
    
    <Col md={9} xl={10}>
    <div className='ps-4 pe-3'>
      <PaymentTop totalPayment={totalPayment}/>


      <Form className='pt-5'>   
<Row className='py-3'>
<Col>
<DropdownButton
        
        
       size="lg"
          variant="outline-secondary"
          title="Team Lead"
          id="dropdown-basic"
          style={{width:"fit-content"}}
          
        
        >
          
          
          <Dropdown.Item href="#"><MonetizationOnIcon/>demo   </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><ArchiveIcon/>demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"> <EditIcon/>demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"><DeleteIcon/>demo</Dropdown.Item>
        
        </DropdownButton>
</Col>
<Col>
<Form.Control  size="sm" name="foo" placeholder="Client Name" type="name"  style={{height:"50px"}} className="ms-2" /> 

</Col>
<Col>
<Form.Control size="sm" name="foo" placeholder="Service Plan" type="name"  style={{height:"50px"}} className="ms-2"  />

</Col>
<Col>
<Form.Control size="sm" name="foo" placeholder="Recepient" type="name"  style={{height:"50px"}} className="ms-2"  />

</Col>
<Col>
<Form.Control size="sm" name="foo" placeholder="Payment Method" type="name"  style={{height:"50px"}}  />

</Col>
<Col >
<Form.Control size="sm" name="foo" placeholder="Date" type="name"  style={{height:"50px"}}  />

</Col>
        
       
      </Row>
      </Form>
      <Row style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3">
  <Col md={2} style={{fontWeight:"700",fontSize:"18px" }}>
    Lead Name
  </Col>
  <Col md={1} style={{fontWeight:"700",fontSize:"18px" }}>
    Amount
  </Col>
  

  <Col md={1} style={{fontWeight:"700",fontSize:"18px" }}>
  Payment Date
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"18px" }}>
    Service Type
  </Col>
  <Col md={1} style={{fontWeight:"700",fontSize:"18px" }}>
    Recepient
  </Col>
  <Col md={1} style={{fontWeight:"700",fontSize:"18px" }}>
    Payment
  </Col>


  <Col md={1} style={{fontWeight:"700",fontSize:"18px" }}>
   Receipt
  </Col>

  <Col md={3} style={{fontWeight:"700",fontSize:"18px" }}>
   Remark
  </Col>
</Row>
{paymentList?.map((payment)=><Row key={payment.id} style={{background:"#fff",height:"70px",color:"#64676B"}} className="d-flex align-items-center justify-content-center mb-3">
<Col md={2} style={{fontWeight:"400",fontSize:"14px" }}>
<Row> 
       
       <Col md={3} className="d-flex justify-content-center align-items-center  ">
       <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {payment.payee.split(" ").map((n)=>n[0])}
          </div>
          </Col>
          <Col className='d-flex justify-content-center align-items-center' md={9} style={{color:"",fontWeight:"700"}}>
          {payment.payee}
         
          </Col>
          </Row>
  </Col>
  <Col md={1} style={{fontWeight:"400",fontSize:"14px" }}>
    {payment.amount}
  </Col>
  

  <Col md={1} style={{fontWeight:"400",fontSize:"14px" }}>
  {payment.paymentDate}
  </Col>

  <Col md={2} style={{fontWeight:"400",fontSize:"14px" }}>
    {payment.serviceType}
  </Col>
  <Col md={1} style={{fontWeight:"400",fontSize:"14px" }}>
    {payment.recipient}
  </Col>
  <Col md={1} style={{fontWeight:"400",fontSize:"14px" }}>
    {payment.status}
  </Col>


  <Col md={1} style={{fontWeight:"400",fontSize:"14px" }}>
   {payment.receipt}
  </Col>

  <Col md={3} style={{fontWeight:"400",fontSize:"14px" }}>
   {payment.remarks}
  </Col>
</Row>
)}
</div>
    </Col>
   
      </Row>
  )
}

export default Payment