import { Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./editLead.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Editlead = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadName, setLeadName] = useState("");
  const [phone, setPhone] = useState("");
  const [social, setSocial] = useState("");
  const [visible, setVisible] = useState("");
  const [active, setActive] = useState("0");
  const [selected, setSelected] = useState("");
  const [teamName, setTeamName] = useState("");
  const [service, setService] = useState("");
  const [leads, setLeads] = useState({});

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/lead/leadId/${id}`)
      .then((res) => {
        setLeads(res.data.data);
      });
    console.log(leads);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://booksbackenddev-env.eba-j6i2gjpq.us-east-1.elasticbeanstalk.com/api/lead/teamlead/update`,
        {
          email,
          name,
          visible,
          service,
          phone,
          social,
          leadName,
          teamName,
        }
      )
      .then((res) => {
        console.log(res);
        if ((res.data.status = 200)) {
          alert("Profile Updated Successfully");
        }
      });
  };
  return (
    <div className="heading pt-5" style={{ height: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <Row className="mx-5 pt-4" style={{ background: "#fff" }}>
          <Row className="pb-3">
            <Col
              md={1}
              className="d-flex justify-content-center align-items-center"
              onClick={() => navigate(-1)}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  cursor: "pointer",
                  background: "rgb(222 222 222)",
                  borderRadius: "50%",
                  color: "#757D8A",
                  height: "50px",
                  width: "50px",
                }}
              >
                <KeyboardBackspaceIcon />
              </div>
            </Col>
            <Col md={11} style={{ fontSize: "1.7rem", fontWeight: "400" }}>
              Edit Lead Information
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <Row>
                <div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      color: "#404D61",
                    }}
                  >
                    Lead Information
                  </div>
                  <div style={{ width: "100%", fontSize: "1.2rem" }}>
                    Edit the Lead Information here. You can change it anytime
                    you want.
                  </div>
                </div>
              </Row>
              <Row className="mt-3">
                <div>
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
                      width: "100%",
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
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div style={{ fontSize: "1.6rem", color: "grey" }}>@</div>
                  </div>
                </div>
              </Row>
              <Row className="mt-3" onChange={(e) => setPhone(e.target.value)}>
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
                      width: "100%",
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
                <Col
                  md={3}
                  style={{
                    display: "flex",
                    justifyCcontent: "center",
                    alignItems: "end",
                  }}
                >
                  <Form.Select onChange={(e) => setPhone(e.target.value)}>
                    <option
                      value="work"
                      onClick={(e) => setPhone(e.target.value)}
                    >
                      Work
                    </option>

                    <option
                      value="home"
                      onClick={(e) => setPhone(e.target.value)}
                    >
                      Home
                    </option>
                    <option
                      value="office"
                      onClick={(e) => setPhone(e.target.value)}
                    >
                      Office
                    </option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mt-3">
                <div>
                  <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                    Team Lead Name
                  </div>
                  <Form.Select onChange={(e) => setLeadName(e.target.value)}>
                    <option
                      value="nailjohnson"
                      onClick={(e) => setLeadName(e.target.value)}
                    >
                      Nail Johnson
                    </option>

                    <option
                      value="UshaUpreti"
                      onClick={(e) => setLeadName(e.target.value)}
                    >
                      Usha Upreti
                    </option>
                    <option
                      value="Roshan"
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
            </Col>
            <Col md={6} className="mt-3">
              <Row>
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: "400" }}>
                    Lead Full Name
                  </div>
                  <div>
                    <div>
                      <input
                        className="ps-2"
                        style={{ width: "100% ", height: "5vh" }}
                        type="text"
                        placeholder="Nial Johnson"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="mt-4">
                <div>
                  <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                    Service Type
                  </div>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      border: "1px solid grey",
                      padding: "0 5px",
                      borderRadius: "5px",
                      height: "5vh",
                    }}
                  >
                    <div>
                      <input
                        style={{
                          width: "100%",
                          border: "none",
                          outline: "none",
                        }}
                        type="text"
                        placeholder="CDR Writing"
                        required
                        onChange={(e) => setService(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="mt-3" onChange={(e) => setSocial(e.target.value)}>
                <Col md={9}>
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
                      width: "100%",
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
                      onChange={(e) => setSocial(e.target.value)}
                    />
                  </div>
                </Col>
                <Col
                  md={3}
                  style={{
                    display: "flex",
                    justifyCcontent: "center",
                    alignItems: "end",
                  }}
                >
                  <Form.Select onChange={(e) => setSocial(e.target.value)}>
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
                      onClick={(e) => setSocial(e.target.value)}
                    >
                      Instagram
                    </option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mt-3">
                <Row>
                  <div style={{ fontWeight: "400", fontSize: "1.2rem" }}>
                    Team Name
                  </div>
                  <Row
                    className="d-flex justify-content-center"
                    style={{ width: "100%" }}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <Col
                      md={4}
                      className="d-flex align-items-center justify-content-between "
                    >
                      <div
                        className="form-check"
                        onClick={() => {
                          setActive("1");
                          setTeamName("LasVegas");
                        }}
                        style={{
                          border:
                            active === "1"
                              ? "1px solid #176EB3"
                              : "1px solid grey",
                          color: active === "1" && "#176EB3",
                          background: active === "1" && "#E1F2FF",
                          borderRadius: "5px",
                          padding: "1vh 2vw",
                        }}
                      >
                        <input
                          type="radio"
                          className="form-check-input"
                          id="radio1"
                          name="optradio"
                          value="Las Vegasa"
                        />
                        <label className="form-check-label" for="radio1">
                          Las Vegasa
                        </label>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      className="d-flex align-items-center justify-content-between "
                    >
                      <div
                        className="form-check"
                        onClick={() => {
                          setActive("2");
                          setTeamName("sanAntonio");
                        }}
                        style={{
                          border:
                            active === "2"
                              ? "1px solid #176EB3"
                              : "1px solid grey",
                          color: active === "2" && "#176EB3",
                          background: active === "2" && "#E1F2FF",
                          borderRadius: "5px",
                          padding: "1vh 2vw",
                        }}
                      >
                        <input
                          type="radio"
                          className="form-check-input"
                          id="radio2"
                          name="optradio"
                          value="San Antonio"
                        />
                        <label className="form-check-label" for="radio2">
                          San Antonio
                        </label>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      className="d-flex align-items-center justify-content-between "
                    >
                      <div
                        className="form-check"
                        onClick={() => {
                          setActive("3");
                          setTeamName("Houston");
                        }}
                        style={{
                          border:
                            active === "3"
                              ? "1px solid #176EB3"
                              : "1px solid grey",
                          color: active === "3" && "#176EB3",
                          background: active === "3" && "#E1F2FF",
                          borderRadius: "5px",
                          padding: "1vh 2vw",
                        }}
                      >
                        <input
                          type="radio"
                          className="form-check-input"
                          id="radio3"
                          name="optradio"
                          value="Houston"
                        />
                        <label className="form-check-label" for="radio3">
                          Houston
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </Row>
              <Row className="mx-4 mt-4 mb-5">
                <Button style={{ marginTop: "3%" }} type="submit">
                  Confirm
                </Button>
              </Row>
            </Col>
          </Row>
        </Row>
      </form>
    </div>
  );
};

export default Editlead;
