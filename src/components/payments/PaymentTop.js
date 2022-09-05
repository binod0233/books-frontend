import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentTop = ({totalEarned, totalDealValue, totalDuePayment}) => {
const navigate = useNavigate()

  return (
    <div className='pe-3'>
      <Row>

        <Col className=" ">
        <div style={{ fontWeight: "700", fontSize: "18px" }} className="pt-5">
        Payment Dashboard
      </div>
      <div
        style={{ color: "#666", fontWeight: "500", fontSize: "18px" }}
        className="pb-3"
      >
        Total Payment value generated Overview
      </div>
  
        </Col>
        <Col className="pt-5 me-5" style={{background:"#F1F1FA"}}>
          {/*  <Button onClick={()=>navigate("/add-payment")}
             style={{background:"#176EB3",float:"right"}}
            >
                Add New Payment +
                </Button>
  */}
            </Col>
      </Row>
     <Row>
     <div style={{ fontWeight: "700", fontSize: "20px", background:'#FFF' }} className="pt-3 px-5">
     Lead Payment Overview
   </div>
     </Row>
      <Row style={{background:'#FFF', padding:'2% 1%'}}>
     
        <Col md={4}>
          <div
            style={{ background: "#EEF5FF", borderRadius:'15px' }}
            className="px-4 pb-4"
          >
            <Row className="pt-4">
              <Col  md={9} className='d-flex align-items-center' style={{fontWeight:'700', fontSize: "18 px", color: "#3144E7" }}>
                TOTAL DEAL VALUE
              </Col>
              <Col md={3} >
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
                    
                  ${totalDealValue?.toFixed(2)}
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
            style={{ background: "#FFF6FB", borderRadius:'15px' }}
            className="px-4 pb-4"
          >
            <Row className="pt-4">
              <Col md={9} className='d-flex align-items-center' style={{ fontWeight:'700', fontSize: "18 px", color: "#DD2A7B" }}>
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
                 
                ${totalEarned?.toFixed(2)}

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
            style={{ background: "#FFF8EF" ,  borderRadius:'15px'}}
            className="px-4 pb-4"
          >
            <Row className="pt-4">
              <Col md={9}  className='d-flex align-items-center' style={{ color: "#64676B",fontWeight:'700', fontSize: "18px", color: "#F0A41F", }}>DUE PAYMENT</Col>
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
                
                ${totalDuePayment?.toFixed(2)}

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
    </div>
  );
};

export default PaymentTop;
