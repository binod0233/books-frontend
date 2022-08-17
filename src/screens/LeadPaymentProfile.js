import { div, Col, Form, Button, Row } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// import PaymentImg from '../../public/visa.png'
const LeadPaymentProfile = () => {
  const [paymentList, setPaymentList] = useState([]);
  const [leads, setLeads] = useState([])

  const [clientName, setClientName] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const { paymentId } = params;
  const { clientManager } = params;

  console.log(paymentId);
  const totalPayment =10;
  //  paymentList?.reduce((acc, i) => acc + i.amount, 0);

  const getAllThePayments = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/payment/paymentId/${paymentId}`
      )
      .then((res) => {
      setPaymentList([...paymentList, res.data]);
        console.log(paymentList);
      });
  };

  

  useEffect(() => {
 getAllThePayments();
  }, [])
 
  return (
    <div>
      <Row className="pt-4 mx-3">
        <Col style={{ background: "#F1F1FA" }}>
          <div
            style={{
              fontWeight: "700",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontStyle: "normal",
            }}
            className=" "
          >
            Nial Johnson Payment Sheet
          </div>
          <div
            style={{ color: "#64676B", fontWeight: "400", fontSize: "1.1rem" }}
            className="pb-3"
          >
            You are viewing Nial Johnson Payment Sheet
          </div>
        </Col>
        <Col className="" style={{ background: "#F1F1FA" }}>
          <div style={{ float: "right" }}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "14vw", marginRight: "" }}
            >
              <div
                style={{
                  color: "black",
                  fontWeight: "700",
                  fontSize: "1.2rem",
                  lineHeight: "1.2rem",
                  marginLeft: ".5rem",
                }}
              >
                Nial Johnson
                <div
                  style={{
                    color: "#666",
                    fontWeight: "400",
                    fontSize: ".8rem",
                  }}
                >
                  abc@gmail.com
                </div>
              </div>
              <div
                style={{
                  borderRadius: "50%",
                  background: "#ED6F47",
                  height: "45px",
                  width: "45px",
                  color: "#fff",
                  fontWeight: "400",
                  marginLeft: "5%",
                }}
                className="d-flex justify-content-center align-items-center "
              >
                AS
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{ background: "#FFF", padding: "2% 1%" }}>
        <Col md={4}>
          <div
            style={{ background: "#EEF5FF", borderRadius: "15px" }}
            className="px-4 pb-4"
          >
            <Row className="pt-4">
              <Col
                md={9}
                className="d-flex align-items-center"
                style={{
                  fontWeight: "700",
                  fontSize: "18 px",
                  color: "#3144E7",
                }}
              >
                TOTAL DEAL VALUE
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-end">
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50px",
                      background: "#3144E7",
                      fontWeight: "700",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="/images/dashboard/whiteThailo.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <span style={{ fontSize: "40px", fontWeight: "700" }}>
                  $500.00
                </span>
              </Col>
              <Col
                className="pt-4"
                style={{ color: "#64676B", fontSize: "16px" }}
              ></Col>
            </Row>
            <div style={{ fontSize: "16px", color: "#64676B" }}>
              It includes the total value of the deal.
            </div>

            <Button
              style={{ background: "#3144E7", fontWeight: "700" }}
              className="py-2 mt-3"
            >
              View Payment Sheet
            </Button>
          </div>
        </Col>

        <Col md={4}>
          <div
            style={{ background: "#FFF6FB", borderRadius: "15px" }}
            className="px-4 pb-4"
          >
            <Row className="pt-4">
              <Col
                md={9}
                className="d-flex align-items-center"
                style={{
                  fontWeight: "700",
                  fontSize: "18 px",
                  color: "#DD2A7B",
                }}
              >
                TOTAL PAYMENT
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-end">
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50px",
                      background: "#DD2A7B",
                      fontWeight: "700",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="/images/dashboard/whiteThailo.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <span style={{ fontSize: "40px", fontWeight: "700" }}>
                  ${totalPayment}
                </span>
              </Col>
              <Col
                className="pt-4"
                style={{ color: "#64676B", fontSize: "16px" }}
              ></Col>
            </Row>
            <div style={{ fontSize: "16px", color: "#64676B" }}>
              It includes the total Payment received.
            </div>

            <Button
              style={{
                background: "#DD2A7B",
                fontWeight: "700",
                border: "none",
              }}
              className="py-2 mt-3"
            >
              View Payment Sheet
            </Button>
          </div>
        </Col>

        <Col md={4}>
          <div
            style={{ background: "#FFF8EF", borderRadius: "15px" }}
            className="px-4 pb-4"
          >
            <Row className="pt-4">
              <Col
                md={9}
                className="d-flex align-items-center"
                style={{
                  color: "#64676B",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#F0A41F",
                }}
              >
                DUE PAYMENT
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-end">
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50px",
                      background: "#F0A41F",
                      fontWeight: "700",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="/images/dashboard/whiteThailo.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <span style={{ fontSize: "40px", fontWeight: "700" }}>
                  $700.00
                </span>
              </Col>
              <Col
                className="pt-4"
                style={{ color: "#64676B", fontSize: "16px" }}
              ></Col>
            </Row>
            <div style={{ fontSize: "16px", color: "#64676B" }}>
              It includes the total due left to pay.
            </div>

            <Button
              style={{
                background: "#F0A41F",
                fontWeight: "700",
                border: "none",
              }}
              className="py-2 mt-3"
            >
              View Payment Sheet
            </Button>
          </div>
        </Col>
      </Row>

      <Row style={{ background: "#f1f1fa", padding: "2% 1%",  }}>
        <Col md={4}>
          <div
            style={{ background: "#fff", borderRadius: "15px", height: '44vh' }}
            className="px-4 pb-4"
          >
            <Row className="pt-4">
              <Col
                md={9}
                className="d-flex align-items-center"
                style={{
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  color: "#000",
                }}
              >
                Lead Details
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-end">
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50px",
                      cursor:'pointer',
                      fontWeight: "700",
                      color: "#000",
                      fontSize: "20px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <SaveAsIcon />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "100%", marginRight: "" }}
            >
            <div
                style={{
                  borderRadius: "50%",
                  background: "#ED6F47",
                  height: "45px",
                  width: "45px",
                  color: "#fff",
                  fontWeight: "400",
                  marginRight: " 5%",
                }}
                className="d-flex justify-content-center align-items-center "
              >
                AS
              </div>
            <Col>
            <div
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "1.1rem",
              lineHeight: "1.2rem",
            }}
          >
            Nial Johnson 
          </div>
            </Col>
              
            </div>
            </Row>
                
            <Row className='mt-2 mb-2'>
            <Row className='mt-1 ' >
            <Col md={5}>
            Source:
            </Col>
            <Col md={7} style={{fontWeight:'700',fontSize:'1rem'}}>
            Source:
            </Col>
            </Row>
            <Row className='mt-1'>
            <Col md={5} style={{fontSize:'1rem'}}>
            Service Type:
            </Col>
            <Col md={7} style={{fontWeight:'700',fontSize:'1rem'}}>
            Service Type:
            </Col> 
             </Row>
            <Row className='mt-1'>
            <Col md={5} style={{fontSize:'1rem'}}>
            Service Plan:
            </Col>
            <Col md={7} style={{fontWeight:'700',fontSize:'1rem'}}>
            Service Plan:
            </Col> 
             </Row>
            <Row className='mt-1'>
            <Col md={5} style={{fontSize:'1rem'}} >
            Client Manager:
            </Col>
            <Col  md={7} style={{fontWeight:'700',fontSize:'1rem'}}>
            Client Manager:
            </Col>
            </Row>
            <Row className='mt-1'>
            <Col md={5} style={{fontSize:'1rem'}} >
            Team Name:
            </Col>
            <Col md={7} style={{fontWeight:'700',fontSize:'1rem'}}>
            Team Name:
            </Col>
            </Row>
        
            
            </Row>

          </div>
        </Col>
        <Col md={4}>
        <div
          style={{ background: "#fff", borderRadius: "15px" , height: '44vh'}}
          className="px-4 pb-4"
        >
          <Row className="pt-4">
            <Col
              md={9}
              className="d-flex align-items-center"
              style={{
                fontWeight: "700",
                fontSize: "1.1rem ",
                color: "#000",
              }}
            >
              Payment Type  
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-end">
                <div
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50px",
                    cursor:'pointer',
                    fontWeight: "700",
                    color: "#000",
                    fontSize: "1.1rem",
                  }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <SaveAsIcon />
                </div>
              </div>
            </Col>
            <Row style={{height:'18.5vh', width:'15vw',objectFit:'cover'}} >
        <div style={{width:'inherit', height:'inherit'}}>    <img style={{width:'inherit', height:'inherit'}} src='/visa.png'/></div>
            </Row>
            <Row className='mt-3'>
            <Col>Visa Card</Col>
            <Col>4567</Col>
            </Row>
            <Row>
            <Col>Exp. Date</Col>
            <Col>12/05</Col>

            </Row>
          </Row>
        </div>
      </Col>
      <Col md={4} style={{height:'44vh'}} >
      <div
        style={{ background: "#fff", borderRadius: "15px" ,  height: 'inherit' }}
        className="px-4 pb-4"
      >
        <Row className="pt-4" >
          <Col
            md={12}
            className="d-flex align-items-center"
            style={{
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "#000", 
            }}
          >
            Invoice Stats
          </Col>
         
        </Row>
      </div>
    </Col>
      </Row>

      <Row className='mx-3' style={{fontSize:'1.2rem',fontWeight:'700'}} md={12}>Payment History</Row>
      <Row className='mx-3 mt-3 mb-2' >
      <div className='d-flex align-items-center' style={{height:'8vh',width:'100%', background:'#fff'}}>
      <Row className='d-flex align-items-center' style={{fontSize:'1.2rem',fontWeight:'700', width:'inherit'}}>
      <Col md={2}>Lead Name</Col>
      <Col md={2}>Amount</Col>
      <Col md={2}>Status</Col>
      <Col md={2}>Recepient</Col>
      <Col md={2}>Due Date</Col>
      <Col md={2}>Payment Method</Col>
      </Row>
      </div>
      </Row>

{
  paymentList?.map((v,key)=>(
    <>
      <Row key={key} className='mx-3 mt-3 mb-2' >
      <div className='d-flex align-items-center' style={{height:'8vh',width:'100%', background:'#fff'}}>
      <Row className='d-flex align-items-center' style={{width:"inherit"}}>
      <Col md={2} style={{fontSize:'1.2rem',fontWeight:'700'}}>{v.payee}</Col>
      <Col md={2}>{v.amount}</Col>
      <Col md={2}>{v.status}</Col>
      <Col md={2}>{v.recipient}</Col>
      <Col md={2}>{new Date(v.paymentDate).toLocaleString()}</Col>
      <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center' }}><div>{v.paymentMethod}</div><div style={{borderRadius:'5px',height:'2.5rem',width:'2.5rem',background:'#F0F0F0',color:'white', display:'flex', alignItems:'center', justifyContent:'center',marginLeft:'5%',cursor:'pointer'}}><KeyboardArrowDown style={{color:"#64676B"}}/></div></Col>
      </Row>
      </div>
      </Row>
      </>
  )
 
  )
}


    </div>
  );
};

export default LeadPaymentProfile;


