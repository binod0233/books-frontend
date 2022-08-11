import React, { useState,useEffect } from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Form, Row, Table } from 'react-bootstrap'
import PaymentTop from '../../components/payments/PaymentTop'
import Sidebar from '../../components/Sidebar'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';

const AdminAllPayments = () => {
const [paymentList,setPaymentList] = useState([])
const navigate = useNavigate()
const params = useParams()
const {clientManager} = params
useEffect(()=>{
  getAllThePayments()
},[])

const getAllThePayments =  ()=>{
   axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/payments`)
  .then(res=>{console.log(res.data);setPaymentList(res.data.responseList)})
  
}
  return (
    <Row  style={{background:"#F1F1FA"}} >
   
    
    <div className='ps-4'>
      <PaymentTop/>


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
      <Table striped bordered hover  className="pt-5">
  <thead >
    <tr>
      
      <th>Lead Name</th>
      <th>Amount</th>
      <th>Payment Date</th>
      <th>Recipient</th>
      <th>Service Type</th>
      <th>Service Type</th>
      <th>Verification</th>
      <th>Payment Method</th>
    </tr>
  </thead>
  <tbody >
  {paymentList?.map((payment)=>(
     <tr key={payment.id}>
      
      
    <td style={{height:"70px"}} >
    
        <Row> 
       
          <Col md={2} className="d-flex justify-content-center align-items-center  ">
          <div style={{borderRadius:"50px",background:"#ED6F47",height:"35px",width:"35px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {payment.payee?.split(" ").map((n)=>n[0])}
             </div>
             </Col>
             <Col md={10} style={{color:"",fontWeight:"700"}}>
             {payment.payee}
           
             </Col>
             </Row>
           
             </td>
             <td >{payment.amount}</td>
      <td>{payment.paymentDate}</td>
      <td>{payment.recipient}</td>
      <td>{payment.serviceType}</td>
      <td style={{fontWeight:"700"}}>{payment.status}</td>
      <td style={{fontWeight:"700"}}>{payment.paymentMethod}</td>
      <td style={{fontWeight:"700"}}>{payment.status}</td>
     
    </tr>))}
  
    
   
  </tbody>
</Table>

</div>
   
      </Row>
  )
}

export default AdminAllPayments