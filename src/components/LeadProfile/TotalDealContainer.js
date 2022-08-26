import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const TotalDealContainer = () => {
  return (
    <div >
      <Row style={{ height: "", marginTop: ".5rem", background: "white", padding: "1.3rem 0" }}>
        <Col >
          <div style={{ background: "#EEF5FF", height: "100%", borderRadius: ".8rem" }}>
            <div className="ps-1">
              <Row className="py-2">
                <Col md={8}  className="d-flex justify-content-between align-items-center ps-3 pe-2" style={{ color: "#64676B", fontSize: ".9rem" }}>
                  Total Deal Value
                </Col>
                <Col>
                  <div className="d-flex justify-content-center align-items-center">
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
                      <img src="/images/dashboard/whiteThailo.png" alt="dollar" />
                    </div>

                  </div>
                </Col>
              </Row>

              <Row >

                <span style={{ fontSize: "1.8rem",marginTop:'.7rem', fontWeight: "700" }}> $500.00</span>

              </Row>
              <div style={{ fontSize: ".8rem", color: "#64676B" }}>
                Payment Updated: July 05, 2020
              </div>

              <Button style={{ background: "#1577D9", fontWeight: "700", border: "none", fontSize: "1rem" }} className="py-1 mt-3 mb-4">
                See Deal Value
              </Button>

            </div>
          </div>
        </Col>
        <Col className="">
          <div style={{ background: "#FFF8EF", height: "100%", borderRadius: "0.8rem" }}>
            <div className="ps-1">
              <Row className="py-2">
                <Col md={8} className="d-flex justify-content-between align-items-center ps-3 pe-2" style={{ color: "#64676B", fontSize: "0.9rem" }}>
                  Total Payment
                </Col>
                <Col>
                  <div className="d-flex justify-content-center">
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
                      <img src="/images/dashboard/whiteThailo.png" alt="dollar" />
                    </div>

                  </div>
                </Col>
              </Row>

              <Row>

                <span style={{ fontSize: "1.8rem",marginTop:'.7rem', fontWeight: "700" }}> $0.00</span>

              </Row>
              <div style={{ fontSize: ".8rem", color: "#64676B" }}>
                Payment Updated: July 05, 2020
              </div>

              <Button style={{ background: "#DD2A7B", fontWeight: "700", border: "none", fontSize: "1rem" }} className="py-1 mt-3 mb-4">
                See Total Payment
              </Button>

            </div>
          </div>
        </Col>
        <Col >
          <div style={{ background: "#FFF8EF", height: "100%", borderRadius: ".8rem" }}>
            <div className="ps-1">
              <Row className="py-2">
                <Col md={8} className="d-flex justify-content-between align-items-center ps-3 pe-2" style={{ color: "#64676B", fontSize: ".9rem" }}>
                  Due Payment
                </Col>
                <Col>
                  <div className="d-flex justify-content-center">
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
                      <img src="/images/dashboard/whiteThailo.png" alt="dollar" />
                    </div>

                  </div>
                </Col>
              </Row>

              <Row>

                <span style={{ fontSize: "1.8rem",marginTop:'.7rem', fontWeight: "700" }}> $0.00</span>

              </Row>
              <div style={{ fontSize: ".8rem", color: "#64676B" }}>
                Payment Updated: July 05, 2020
              </div>

              <Button style={{ background: "#F0A41F", fontWeight: "700", border: "none", fontSize: "1rem" }} className="py-1 mt-3 mb-4">
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