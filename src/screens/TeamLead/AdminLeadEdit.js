import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./editLead.css";

const AdminLeadEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadName, setLeadName] = useState("");
  const [teamLead, setTeamLead] = useState("");
  const [phone, setPhone] = useState("");
  const [social, setSocial] = useState("");
  const [visible, setVisible] = useState("");
  const [teamName, setTeamName] = useState("");


const handleSubmit = (e)=>{
  e.preventDefault();
console.log(name)
console.log(teamName)
console.log(leadName)
console.log(visible)
console.log(phone)
console.log(leadName)
console.log(social)
console.log(email)
console.log(teamLead)

}
  return (
    <div className="heading pt-5" style={{height:'90vh'}}>
    <Row className="bg-transparent d-flex align-items-center justify-content-center">
    <div className=" d-flex flex-column align-items-center justify-content-center mb-4">
    <div style={{fontSize:"2.3rem" , fontWeight:"400"}}>
    Edit Lead Details
    </div>
    <div style={{color:"#7B7B7B"}}>
    Edit the details of Lead here and press Save changes
    </div>
    </div>
    </Row>
      <form onSubmit={handleSubmit}>
        <Row className="mx-5" style={{ background: "#fff" }}>
         
          <Row className="p-5">
            <Col md={6}>
            <Row>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: "400" }}>
                Lead Full Name
              </div>
              <div > <span ><input className='ps-2' style={{width:'100% ', height:'5vh'}} type='text' placeholder="Nial Johnson" onChange={(e)=>setName(e.target.value)}/></span>
              </div>
            </div>
          </Row>
              <Row className="mt-3">
                <Col md={9}>
                  <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                    Contact Number
                  </div>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      border: "1px solid grey",
                      padding: "0 5px",
                      borderRadius: "5px",
                      height: "5vh",
                      width: "100%"

                    }}
                  >
                  <PhoneInput
                  international  
                  defaultCountry="RU"
                  value={phone}
                  onChange={setPhone}
                 
                />
                  </div>
                </Col>
                <Col md={3} style={{    display: "flex",
                justifyCcontent: "center",
                alignItems: "end",}}  >
                <Form.Select onChange={(e) => setName(e.target.value)}>
                <option
                  value="work"
                  onClick={(e) => setName(e.target.value)}
                >
                  Work
                </option>

                <option
                  value="home"
                  onClick={(e) => setName(e.target.value)}
                >
                  Home
                </option>
                <option
                  value="office"
                  onClick={(e) => setName(e.target.value)}
                >
                  Office
                </option>
              </Form.Select>
                </Col>
              </Row>
             
              <Row className="mt-3">
                <div>
                  <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                    Lead Name
                  </div>
                  <Form.Select onChange={(e) => setLeadName(e.target.value)}>
                    <option
                      value="whatsapp"
                      onClick={(e) => setLeadName(e.target.value)}
                    >
                     Nail Johnson
                    </option>

                    <option
                      value="messenger"
                      onClick={(e) => setLeadName(e.target.value)}
                    >
                      Usha Upreti
                    </option>
                    <option
                      value="viber"
                      onClick={(e) => setLeadName(e.target.value)}
                    >
                      Roshan
                    </option>
                  </Form.Select>
                </div>
              </Row>
              <Row className="mt-3">
                <div>
                  <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                    Team Lead
                  </div>
                  <Form.Select onChange={(e) => setTeamLead(e.target.value)}>
                    <option
                      value="whatsapp"
                      onClick={(e) => setTeamLead(e.target.value)}
                    >
                      Neha Rathi
                    </option>

                    <option
                      value="messenger"
                      onClick={(e) => setTeamLead(e.target.value)}
                    >
                      Usha Upreti
                    </option>
                    <option
                      value="viber"
                      onClick={(e) => setTeamLead(e.target.value)}
                    >
                      Roshan
                    </option>
                  </Form.Select>
                </div>
              </Row>
             
            </Col>
            <Col md={6}>
            <Row>
                <Col ms={9}>
                  <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                    Email Address
                  </div>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      border: "1px solid grey",
                      padding: "0 5px",
                      borderRadius: "5px",
                      height: "5vh",
                      width: "100%"

                    }}
                  >
                  <input
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                  }}
                  type="email"
                  placeholder="siddhartha@copenned.com"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
                  </div>
                </Col>
                <Col md={3} style={{    display: "flex",
                justifyCcontent: "center",
                alignItems: "end",}}  >
                <Form.Select onChange={(e) => setName(e.target.value)}>
                <option
                  value="work"
                  onClick={(e) => setName(e.target.value)}
                >
                  Work
                </option>

                <option
                  value="home"
                  onClick={(e) => setName(e.target.value)}
                >
                  Home
                </option>
                <option
                  value="office"
                  onClick={(e) => setName(e.target.value)}
                >
                  Office
                </option>
              </Form.Select>
                </Col>
              </Row>
              <Row className="mt-3" onChange={(e)=>setSocial(e.target.value)}>
              <Col ms={9}>
                <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                 Social Media
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    border: "1px solid grey",
                    padding: "0 5px",
                    borderRadius: "5px",
                    height: "5vh",
                    width: "100%"

                  }}
                >
                <input
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
                type="text"
                placeholder="siddhartha12"
                required
                onChange={(e)=>setSocial(e.target.value)}
              />
                </div>
              </Col>
              <Col md={3} style={{    display: "flex",
              justifyCcontent: "center",
              alignItems: "end",}}  >
              <Form.Select onChange={(e)=>setSocial(e.target.value)}>
              <option
                value="linkedin"
                onClick={(e) => setSocial(e.target.value)}
              >
                Linkedin
              </option>

              <option
                value="facebook"
                onClick={(e) => setSocial(e.target.value)}
              >
                Facebook
              </option>
              <option
                value="instagram"
                onClick={(e) => setSocial (e.target.value)}
              >
                Instagram
              </option>
            </Form.Select>
              </Col>
            </Row>
            <Row className="mt-3">
            <div>
              <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                Visible to
              </div>
              <Form.Select onChange={(e) => setVisible(e.target.value)}>
                <option
                  value="admin"
                  onClick={(e) => setVisible(e.target.value)}
                >
                  Admin
                </option>

                <option
                  value="clientManager"
                  onClick={(e) => setVisible(e.target.value)}
                >
                  Client Manager
                </option>
                <option
                  value="teamLead"
                  onClick={(e) => setVisible(e.target.value)}
                >
                  Team Lead
                </option>
              </Form.Select>
            </div>
          </Row>
         
          <Row className="mt-3">
            <div>
              <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                Team Name
              </div>
              <Form.Select onChange={(e) => setTeamName(e.target.value)}>
                <option
                  value="lasVegas"
                  onClick={(e) => setTeamName(e.target.value)}
                >
                Las Vegas
                </option>

                <option
                  value="sanAntorio"
                  onClick={(e) => setTeamName(e.target.value)}
                >
                  San Antonio
                </option>
                <option
                  value="viber"
                  onClick={(e) => setTeamName(e.target.value)}
                >
                  Roshan
                </option>
              </Form.Select>
            </div>
          </Row>
        
            </Col>
          </Row>
          <Row   >
         <Col className="d-flex align-items-center justify-content-center mb-5"> <Button type='submit'>Save Changes</Button></Col>
          </Row>
        </Row>
      </form>
    </div>
  );
};

export default AdminLeadEdit;
