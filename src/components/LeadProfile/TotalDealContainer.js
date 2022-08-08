import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'

const TotalDealContainer = () => {
  return (
    <div>
        <Row style={{height:"30vh",margintop:"10px",background:"white",padding:"10px"}}>
        <Col className="pe-2">
            <div style={{background:"#EEF5FF",height:"100%",borderRadius:"10px"}}>
            <div className="px-4">
           <Row className="pt-2">
            <Col md={8} style={{color:"#64676B",fontSize:"14px"}}>
            Total Deal Value
            </Col>
            <Col>
           <div className="d-flex justify-content-end">
                    <div
                      style={{
                        height: "5vh",
                        width: "5vh",
                        borderRadius: "50%",
                        background: "#1577D9",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img src="/images/dashboard/whiteThailo.png" alt="dollar"/>
                    </div>
                    
                  </div>
                  </Col>
                  </Row>

                  <Row>
                    
                    <span style={{fontSize:"30px",fontWeight:"700"}}> $500.00</span>
                    
                  </Row>
                  <div style={{fontSize:"10px",color:"#64676B"}}>
                  Payment Updated: July 05, 2020
                  </div>

                  <Button style={{background:"#1577D9",fontWeight:"700",border:"none",fontSize:"15px"}} className="py-1 mt-3">
                     See Deal Value
                  </Button>
                
           </div>
            </div>
        </Col>
        <Col className="pe-2">
        <div style={{background:"#FFF8EF",height:"100%",borderRadius:"10px"}}>
        <div className="px-4">
           <Row className="pt-2">
            <Col md={8} style={{color:"#64676B",fontSize:"14px"}}>
            Total Payment
            </Col>
            <Col>
           <div className="d-flex justify-content-end">
                    <div
                      style={{
                        height: "5vh",
                        width: "5vh",
                        borderRadius: "50%",
                        background: "#DD2A7B",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img src="/images/dashboard/whiteThailo.png" alt="dollar"/>
                    </div>
                    
                  </div>
                  </Col>
                  </Row>

                  <Row>
                    
                    <span style={{fontSize:"30px",fontWeight:"700"}}> $0.00</span>
                    
                  </Row>
                  <div style={{fontSize:"10px",color:"#64676B"}}>
                  Payment Updated: July 05, 2020
                  </div>

                  <Button style={{background:"#DD2A7B",fontWeight:"700",border:"none",fontSize:"15px"}} className="py-1 mt-3">
                     See Total Payment
                  </Button>
                
           </div>
            </div>
        </Col>
        <Col >
        <div style={{background:"#FFF8EF",height:"100%",borderRadius:"10px"}}>
        <div className="px-4">
           <Row className="pt-2">
            <Col md={8} style={{color:"#64676B",fontSize:"14px"}}>
            Due Payment
            </Col>
            <Col>
           <div className="d-flex justify-content-end">
                    <div
                      style={{
                        height: "5vh",
                        width: "5vh",
                        borderRadius: "50%",
                        background: "#F0A41F",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img src="/images/dashboard/whiteThailo.png" alt="dollar"/>
                    </div>
                    
                  </div>
                  </Col>
                  </Row>

                  <Row>
                    
                    <span style={{fontSize:"30px",fontWeight:"700"}}> $0.00</span>
                    
                  </Row>
                  <div style={{fontSize:"10px",color:"#64676B"}}>
                  Payment Updated: July 05, 2020
                  </div>

                  <Button style={{background:"#F0A41F",fontWeight:"700",border:"none",fontSize:"15px"}} className="py-1 mt-3">
                     Update Next Payment
                  </Button>
                
           </div>
            </div>
        </Col>
</Row>
    </div>
  )
}

export default TotalDealContainer