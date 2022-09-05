import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import SaveAsIcon from "@mui/icons-material/SaveAs";

const PaymentContainer = ({ leads,descipline,handleDescipline }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className='ps-3'>
      <Row style={{ height: "", marginBottom: ".6rem", background: "white" }}>

        <Col>
          <div
            style={{ background: "#FFF6FB", borderRadius: "1rem", height: '' }}
            className="px-4 mb-3"
          >
            <Row className="pt-3">
              <Col
                md={9}
                className="d-flex align-items-center"
                style={{
                  fontWeight: "700",
                  fontSize: "1.2rem ",
                  color: "#000",

                }}
              >
                Payment Type
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-end">
                  <div
                    style={{
                      height: "3rem",
                      width: "3rem",
                      borderRadius: "5px",
                      cursor: 'pointer',
                      fontWeight: "700",
                      color: "#000",
                      fontSize: "1.1rem",
                      background: '#f3f3f3'

                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <SaveAsIcon />
                  </div>
                </div>
              </Col>
              <Row style={{ height: '18.5vh', width: '15vw', objectFit: 'cover' }} >
                <div style={{ width: 'inherit', height: 'inherit' }}>    <img style={{ width: 'inherit', height: 'inherit' }} src='/visa.png' /></div>
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


      </Row>

      <Row className="py-3" style={{ height: "", marginBottom: ".5rem", background: "white" }}>
        <Col md={7}>
          <Row><div style={{ fontSize: "1.1rem", fontWeight: "700" }}>Descipline</div></Row>
          <Row><div>Lead Focused Discipline</div></Row>
        </Col>
        <Col md={5}>
        <div style={{fontSize:'.7rem'}}> previous  value: {leads.discipline}</div>
        
{user?.role==='clientmanager' &&
          <Form.Select
          disabled
            onChange={(e) => handleDescipline(e.target.value)}
            style={{ background: "#1577D9", color: 'white', textAlign: 'center',webkitAppearance: 'button' }} >
            <option
              value="Chemical"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Chemical
            </option>

            <option
              value="Reference letter"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Reference Letter
            </option>
            <option
              value="resume"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Resume
            </option>

          </Form.Select>
          }
          {user?.role==='teamlead' &&
          <Form.Select
          
            onChange={(e) => handleDescipline(e.target.value)}
            style={{ background: "#1577D9", color: 'white', textAlign: 'center',webkitAppearance: 'button' }} >
            <option
              value="Chemical"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Chemical
            </option>

            <option
              value="Reference letter"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Reference Letter
            </option>
            <option
              value="resume"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Resume
            </option>

          </Form.Select>
          }
          {user?.role==='admin' &&
          <Form.Select
          
            onChange={(e) => handleDescipline(e.target.value)}
            style={{ background: "#1577D9", color: 'white', textAlign: 'center',webkitAppearance: 'button' }} >
            <option
              value="Chemical"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Chemical
            </option>

            <option
              value="Reference letter"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Reference Letter
            </option>
            <option
              value="resume"
              onClick={(e) => handleDescipline(e.target.value)}
            >
              Resume
            </option>

          </Form.Select>
          }
        </Col>
      </Row>
      <Row className="py-3" style={{ height: "", background: "white" }}>
        <Row><div style={{ fontSize: "1.1rem", fontWeight: "700" }}>Remarks</div></Row>

        <Row><div className='mx-2 ' style={{ border: '.7px solid #DEDEDE', padding: ' .1rem .4rem', fontSize: '.9rem' }}>Will do his PTE in July and will contact after that. Needs the letter in the first of July. Will be followed by Jenny Chhetri.</div></Row>
      </Row>
    </div >
  )
}

export default PaymentContainer