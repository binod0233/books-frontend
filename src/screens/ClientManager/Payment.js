import React, { useState, useEffect } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import PaymentTop from "../../components/payments/PaymentTop";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Payment = () => {
  const [paymentList, setPaymentList] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const { clientManager } = params;
  console.log(clientManager);
  useEffect(() => {
    getAllThePayments();
  }, []);

  const getAllThePayments = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/payment/payments/getAllLeadsOfAClientManager/${clientManager}`
      )
      .then((res) => {
        setPaymentList(res.data.responseList);
        console.log(paymentList)
      });
  };
  const totalPayment = paymentList?.reduce((acc, i) => acc + i.amount, 0);

  const current = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const date = `${current}`;

  return (
    <div style={{ background: "#F1F1FA" }}>
      <div className="">
        <div className="ps-4 pe-3">
          <PaymentTop totalPayment={totalPayment} />
        </div>
        <div>
          <Form className="mx-4">
            <div
              style={{
                // background: "red",
                height: "70px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // marginRight:'10px'
              }}
            >
              <div
                className="input-group "
                style={{
                  height: "45px",
                  background: "white",
                  border: "0.7px solid grey",
                  width: "229px",
                }}
              >
                <div className="d-flex justify-content-center align-items-center px-2">
                  <i className="fa-solid fa-user-large"></i>
                </div>
                <input
                  type="text"
                  style={{ border: "none", width: "5px" }}
                  placeholder="Lead Name"
                  // value={clientName}
                  // onChange={(e) => setClientName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div
                className="input-group"
                style={{
                  height: "45px",
                  background: "white",
                  border: "0.7px solid grey",
                  width: "195px",
                }}
              >
                <div className="d-flex justify-content-center align-items-center px-2">
                  <i className="fa-solid fa-user-large"></i>
                </div>
                <input
                  type="text"
                  style={{ border: "none", width: "5px" }}
                  placeholder="Service Type"
                  // value={clientName}
                  // onChange={(e) => setClientName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div
                className="input-group"
                style={{
                  height: "45px",
                  background: "white",
                  border: "0.7px solid grey",
                  width: "165px",
                }}
              >
                <span className="d-flex justify-content-center align-items-center p-2">
                  $
                </span>
                <input
                  type="text"
                  style={{ border: "none" }}
                  placeholder="Amount"
                  // value={source}
                  // onChange={(e) => setSource(e.target.value)}
                  className="form-control"
                />
              </div>
              <div
                className="input-group"
                style={{
                  height: "45px",
                  //  background: "white",
                  border: "0.7px solid grey",
                  width: "152px",
                  background: "#FFC3DE",
                  color: "#DD2A7B",
                }}
              >
                <div
                  style={{}}
                  className="d-flex justify-content-center align-items-center px-2"
                >
                  <i className="fa-solid fa-user-large"></i>
                </div>
                <input
                  type="text"
                  style={{
                    border: "none",
                    width: "5px",
                    background: "#FFC3DE",
                    color: "#DD2A7B",
                  }}
                  placeholder="Recepient"
                  // value={clientName}
                  // onChange={(e) => setClientName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div
                className="input-group"
                style={{
                  height: "45px",
                  background: "white",
                  border: "0.7px solid grey",
                  width: "210px",
                }}
              >
                <div className="d-flex justify-content-center align-items-center px-2">
                  <i className="fa-solid fa-user-large"></i>
                </div>
                <input
                  type="text"
                  style={{ border: "none", width: "5px" }}
                  placeholder="Payment Method "
                  // value={clientName}
                  // onChange={(e) => setClientName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div>
                <Form.Control
                  size="sm"
                  name="foo"
                  placeholder="Date"
                  type="date"
                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
                  style={{
                    textAlign: "center",
                    height: "45px",
                    border: "0.7px solid grey",
                    width: "185px",
                  }}
                  className=""
                />
              </div>
              <div>
                <button
                  style={{
                    height: "45px",
                    background: "#FFC3DE",
                    width: "52px",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  type="reset"
                  onClick={() => {
                    navigate(`/leads/${clientManager}`);
                  }}
                  className=""
                >
                  <FilterAltOutlinedIcon style={{ background: "#FFC3DE" }} />
                </button>
              </div>
            </div>
          </Form>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "22px",
              fontWeight: "700",
            }}
            className="transaction-records mt-2 mx-4"
          >
            <div style={{}}>{date}</div>
            <div
              style={{
                display: "flex",
                color: "#64676B",
                width: "48%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>Number of Transactions: 05</div>
              <div>Transactions value: $5000</div>
            </div>
          </div>

          <div className="mx-4" style={{ background: "#fff", height: "70px" }}>
            <div
              style={{
                height: "70px",
                fontWeight: "700",
                fontSize: "22px",
                width: "92%",
                paddingLeft: "1%",
              }}
              className="d-flex align-items-center justify-content-between  mt-3"
            >
              <div style={{ width: "15%" }}>Lead Name</div>
              <div style={{ width: "37%" }}>
                <div
                  className="d-flex align-items-center justify-content-between "
                  style={{}}
                >
                  <div style={{}}>Amount</div>
                  <div style={{}}>Payment Date</div>
                  <div style={{}}>Service Type</div>
                </div>
              </div>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ width: "45%" }}
              >
                <div style={{}}>Recipient</div>
                <div style={{}}>Payment</div>
                <div style={{}}>Receipt</div>
                <div style={{}}>Remark</div>
              </div>
            </div>
          </div>

                  {paymentList?.map((payment) => (
                    <div
                      className="d-flex mx-4 p-1 mt-3"
                      style={{
                        height: "70px",
                        // width: "92%",
                        fontSize: "1.3rem",
                        // fontWeight: "700",
                        background:'#FFF'
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-start"
                        style={{ width: "14vw", marginRight: "" }}
                      >
                        <div
                          style={{
                            borderRadius: "50%",
                            background: "#ED6F47",
                            height: "45px",
                            width: "45px",
                            color: "#fff",
                            fontWeight: "400",
                            margin: "0 5%",
                          }}
                          className="d-flex justify-content-center align-items-center "
                        >
                          {payment.payee.split(" ").map((n) => n[0])}
                        </div>
                        <div
                          className="d-flex justify-content-center align-items-center"
                          md={9}
                          style={{ color: "", fontWeight: "700", fontSize: "22px" }}
                        >
                          {payment.payee}
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-start"
                        style={{ width: "10vw", color:'#64676B'}}
                      >
                        <div>${payment.amount}.00</div>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-start"
                        style={{ width: "10vw", background: "" ,color:'#64676B'}}
                      >
                        {new Date(payment.paymentDate).toLocaleDateString()}
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ width: "12vw", background: "",color:'#64676B' }}
                      >
                        {payment.serviceType}
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-start"
                        style={{ width: "10vw", background: "",color:'#64676B' }}
                      >
                        {payment.recipient}
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-start"
                        style={{ width: "10vw", background: "",color:'#64676B' }}
                      >
                        {payment.status}
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-start"
                        style={{ width: "10vw", background: "",color:'#64676B' }}
                      >
                        {payment.receipt}
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-end"
                        style={{ width: "15vw", background: "",color:'#64676B' }}
                      >
                      <div style={{display:'flex',justifyContent:'space-between',marginRight:'1rem'}}>  {payment.remarks}</div>
                      <div onClick={()=>navigate("/add-payment")} style={{borderRadius:'5px',height:'40px',width:'40px',background:'#176EB3',color:'white', display:'flex', alignItems:'center', justifyContent:'center',marginRight:'5px',cursor:'pointer'}}><AddIcon/></div>
                      <div  style={{borderRadius:'5px',height:'40px',width:'40px',background:'#F0F0F0',color:'white', display:'flex', alignItems:'center', justifyContent:'center',marginRight:'5px',cursor:'pointer'}}><KeyboardArrowDown style={{color:"#64676B"}}/></div>
                      </div>

                    </div>
                  ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;

{
  /*

// {paymentList?.map((payment) => (
//           <div
//             key={payment.id}
//             style={{  background: "#fff", height: "70px" }}
//             className='mx-4'
//           >
//             <div
//               style={{
//                 height: "70px",
                
//                 fontSize: "22px",
//                 width: "92%",
//               }}
//               className="d-flex align-items-center justify-content-between  mt-3"
//             >
//               <div style={{ width: "15%", display:'flex' }}>
//                 <div
//                   style={{
//                     borderRadius: "50%",
//                     background: "#ED6F47",
//                     height: "45px",
//                     width: "45px",
//                     color: "#fff",
//                     fontWeight: "400",
//                     margin:'0 10%'
//                   }}
//                   className="d-flex justify-content-center align-items-center "
//                 >
//                   {payment.payee.split(" ").map((n) => n[0])}
//                 </div>
//                 <div
//                 className="d-flex justify-content-center align-items-center"
//                 md={9}
//                 style={{ color: "", fontWeight: "700", fontSize:'24px' }}
//               >
//                 {payment.payee}
//               </div>
//               </div>
//               <div style={{ width: "37%" , color:'#64676B', fontSize:'24px'}}>
//                 <div
//                   className="d-flex align-items-center justify-content-between "
                  
//                 >
//                  <div style={{width:'10%', display:'flex',justifyContent:'center', alignItems:'center'}}> <div >${payment.amount}.00</div></div>
//                   <div style={{width:'50%', display:'flex', alignItems:'center'}}><div >  {payment.paymentDate}</div></div>
//                   <div style={{width:'40%', display:'flex', alignItems:'center'}}><div > {payment.serviceType}</div></div>
//                 </div>
//               </div>
//               <div
//                 className="d-flex align-items-center justify-content-between"
//                 style={{ width: "45%", color:'#64676B', fontSize:'24px' }}
//               >
//                <div 
//                className="d-flex align-items-center justify-content-between"
//                style={{ width: "100%" }}
               
//                >
//                <div style={{width:'17%,'}}>  {payment.recieptent}</div>
//                <div style={{width:'32%,'}} > {payment.status}</div>
//                <div style={{width:'17%,'}} > {payment.receipt}</div>
//                <div style={{width:'32%,'}}>   {payment.remarks}</div>
//                </div>
//               </div>
//             </div>
//           </div>
//         ))}
*/
}

{
  /*
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
   axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/payments/getAllLeadsOfAClientManager/${clientManager}`)
  .then(res=>{
    setPaymentList(res.data.responseList)
    
  })
  
}
const totalPayment = paymentList?.reduce((acc,i)=>acc+i.amount,0)
  return (
    <Row  style={{background:"#F1F1FA"}} >
     
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
  {new Date(payment.paymentDate).toLocaleDateString()}
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
   
      </Row>
  )
}

export default Payment

*/
}
