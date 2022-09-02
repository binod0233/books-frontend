import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import Select from 'react-select'

const user = JSON.parse(localStorage.getItem("user"));
console.log(user)
const BackgroundContainer = ({servicePlan, serviceType, nextDate, handleServiceType, handleNextDateChange, handleLastDateChange, handleServicePlan, handleServiceWantedChange }) => {

  console.log(nextDate)

  const options = [
    { value: 'cdrwriting', label: 'CDR Writing' },
    { value: 'referenceletter', label: 'Reference Letter' },
    { value: 'resume', label: 'Resume' }
  ]
  return (
    <div  >
      <Row className="" style={{ background: "white", paddingTop: "10px" }}>
        <h5 style={{ marginTop: '.8rem', fontWeight: "700", fontSize: "1.2rem" }}>Client  Background and Needs</h5>
        <Form className="mt-3 mb-5">
          <Form.Group controlId="servicewanted">
            <Form.Label style={{ marginTop: ".5rem", fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "700", color: "#B5B5B5" }}>
              Service Wanted</Form.Label>
            {/* <Form.Control as="select" style={{ fontSize: "Arial", fontWeight: "700", fontSize: "1rem" }}>
              <option value="">CDR Writing</option>
              <option value="">Reference Letter</option>
              <option value="">Resume</option>
            </Form.Control> */}
            <Select options={options}
              isMulti
              style={{ background: "#1577D9", appearance: 'button', color: 'white', textAlign: 'center' }}
              placeholder='Multiple Selection'
              onChange={handleServiceWantedChange}
            />
          </Form.Group>
          <Form.Group controlId="servicetype" >
            <Form.Label style={{ marginTop: ".5rem", fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "700", color: "#B5B5B5" }}>
              Service Type</Form.Label>
            {/* <Form.Control as="select" style={{ fontSize: "Arial", fontWeight: "700", fontSize: "1rem" }}>
              <option value="">CDR Writing</option>
              <option value="">Reference Letter</option>
              <option value="">Resume</option>
            </Form.Control> */}
            <div style={{fontSize:'.7rem'}}> previous value: {serviceType}</div>
            <Form.Select
              onChange={(e) => handleServiceType(e.target.value)}
             
              style={{ background: "#1577D9", webkitAppearance: 'button', color: 'white', textAlign: 'center' }} >
              <option
                value='CDR Writing'
                onClick={(e) => handleServiceType(e.target.value)}
              >
                CDR Writing
              </option>

              <option
                value='Reference Letter'
                onClick={(e) => handleServiceType(e.target.value)}
              >
                Reference Letter
              </option>
              <option
                value='Resume'
                onClick={(e) => handleServiceType(e.target.value)}              >
                Resume
              </option>

            </Form.Select>
          </Form.Group>
          <Form.Group controlId="serviceplan">
            <Form.Label style={{ marginTop: ".5rem", fontFamily: "sans-serif", fontSize: "1rem", fontWeight: "700", color: "#B5B5B5" }}>
              Service Plan</Form.Label>
            {/* <Form.Control as="select" style={{ fontSize: "Arial", fontWeight: "700", fontSize: "1rem" }}>
              <option value="royal">Royal</option>
              <option value="premium">Premium</option>
              <option value="extended">Extended</option>
              <option value="basic">Basic</option>
            </Form.Control> */}
            <div style={{fontSize:'.7rem'}}> previous value: {servicePlan}</div>

            {user?.role === 'clientmanager' &&

              <Form.Select disabled onChange={(e) => handleServicePlan(e.target.value)} style={{ background: "#1577D9", appearance: 'button', color: 'white', textAlign: 'center' }} >
                <option
                  value='Royal'
                  onClick={(e) => handleServicePlan(e.target.value)} >
                  Royal
                </option>

                <option
                  value='Premium'
                  onClick={(e) => handleServicePlan(e.target.value)}              >
                  Premium
                </option>
                <option
                  value='Extended'
                  onClick={(e) => handleServicePlan(e.target.value)}              >
                  Extended
                </option>
                <option
                  value='Basic'
                  onClick={(e) => handleServicePlan(e.target.value)}              >
                  Basic
                </option>


              </Form.Select>
            }
             {user?.role === 'teamlead' &&

              <Form.Select onChange={(e) => handleServicePlan(e.target.value)} style={{ background: "#1577D9", appearance: 'button', color: 'white', textAlign: 'center' }} >
                <option
                  value='Royal'
                  onClick={(e) => handleServicePlan(e.target.value)} >
                  Royal
                </option>

                <option
                  value='Premium'
                  onClick={(e) => handleServicePlan(e.target.value)}              >
                  Premium
                </option>
                <option
                  value='Extended'
                  onClick={(e) => handleServicePlan(e.target.value)}              >
                  Extended
                </option>
                <option
                  value='Basic'
                  onClick={(e) => handleServicePlan(e.target.value)}              >
                  Basic
                </option>


              </Form.Select>
            }
            {user?.role === 'admin' &&

<Form.Select  onChange={(e) => handleServicePlan(e.target.value)} style={{ background: "#1577D9", appearance: 'button', color: 'white', textAlign: 'center' }} >
  <option
    value='Royal'
    onClick={(e) => handleServicePlan(e.target.value)} >
    Royal
  </option>

  <option
    value='Premium'
    onClick={(e) => handleServicePlan(e.target.value)}              >
    Premium
  </option>
  <option
    value='Extended'
    onClick={(e) => handleServicePlan(e.target.value)}              >
    Extended
  </option>
  <option
    value='Basic'
    onClick={(e) => handleServicePlan(e.target.value)}              >
    Basic
  </option>


</Form.Select>
}
          </Form.Group>

        </Form>
      </Row>
      <Row style={{ height: "", marginBottom: "", background: "white", paddingLeft: "", paddingTop: " ", }}>
        <div style={{ width: "98%", margin: '0 auto', padding: ".5rem 0", marginBottom: ".6rem", background: "#FFF8EF", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <div style={{ margin: "1vh", height: "5vh", width: "5vh", background: "#F0A41F", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <i style={{ color: "#ffffff", height: "2vh" }} className="fa-solid fa-calendar-days"></i>
          </div>
          <span style={{ fontWeight: "600", fontFamily: "sans-serif" }}>Last FollowUp</span>
          {/* <Button className='px-2' style={{ background: "#F0A41F", color: "white", fontWeight: "600", fontSize: "12px", height: "30px" }}>10 Aug 2018</Button> */}
          <input onChange={(e) => handleLastDateChange(e.target.value)} style={{ padding: '.2rem .4rem', border: 'none', borderRadius: '5px', color: 'white', background: '#F0A41F' }} type='datetime-local' />

        </div>
        <div style={{ width: "98%", margin: '0 auto', padding: ".5rem 0", marginBottom: ".6rem", background: "#EEF5FF", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <div style={{ margin: "1vh", height: "5vh", width: "5vh", background: "#1577D9", webkitAppearance: 'button', borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <i style={{ color: "#ffffff", height: "2vh" }} className="fa-solid fa-calendar-days"></i>
          </div>
          <span style={{ fontWeight: "600", fontFamily: "sans-serif" }}>Next FollowUp</span>
          

            <input
              onChange={(e) => handleNextDateChange(e.target.value)}
              value={nextDate}
              style={{ padding: '.2rem .4rem', border: 'none', borderRadius: '5px', color: 'white', background: '#1577D9', }}
              type="datetime-local" />
          

          {/* <Button className='px-2' style={{ background: "#1577D9", webkitAppearance: 'button', color: "white", fontWeight: "600", fontSize: "12px", height: "30px" }}>10 Aug 2018</Button> */}
          <Button className='px-2' style={{ background: "#1577D9", webkitAppearance: 'button', color: "white", fontWeight: "600", fontSize: "12px", height: "30px" }}><i className="fa-solid fa-rotate"></i></Button>

        </div>

      </Row>
    </div>
  )
}

export default BackgroundContainer