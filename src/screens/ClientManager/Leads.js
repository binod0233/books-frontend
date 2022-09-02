import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

import Leadscharts from "../../components/leads/Leadscharts";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./leads.css";
const Leads = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { clientManager } = params;
  const [leads, setLeads] = useState([])
   

 
  const [clientName, setClientName] = useState("");
  const [status, setStatus] = useState("");
  const [servicePlan, setServicePlan] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");

const localUser = JSON.parse(localStorage.getItem('user'));


  const [potential,setPotential] = useState([]);
  const [message,setMessage] = useState('')
  
  const getAllLeadsOfAClientManager = ()  => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leads/getAllLeadsOfAClientManager/${clientManager}`).then(res => {
      setLeads(res.data.responseList);
      console.log(leads)
    })
  }
  const handleInputChange=(e,leadId)=>{
    setPotential(e.target.value);
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/api/lead/leads/changepotential/${leadId}`, {
        potential: e.target.value,

      })
      .then((res) => {
        if (res.status === "ok") {
          setMessage("Difficulty Changed Successfully");
        } else {
          setMessage("There was a problem changing difficulty");
        }
      });
  };

  const applyFilter = (e) => {
    axios
    .put(`http://localhost:8080/api/lead/attributeSearch/clientManager`, {
      potential: e.target.value,

    })
    .then((res) => {
      if (res.status === "ok") {
        setMessage("Difficulty Changed Successfully");
      } else {
        setMessage("There was a problem changing difficulty");
      }
    });
  };

  useEffect(() => {
    if(!localUser){
      navigate('/login')
    }else{
    if(localUser?.userName!==clientManager || localUser?.role!=='admin'){
      navigate(`/leads/${localUser?.userName}`)
    }}
  },[])


  useEffect(() => {
    getAllLeadsOfAClientManager();
  }, [message]);

  const totalLeads = leads?.length;
  const totalFollowUps = leads.filter((lead) => lead.nextFollowUpDate).length;
  const leadConverted = leads.filter((lead) => lead.potential === "won").length;
  const leadLost = leads.filter((lead) => lead.potential === "lost").length;
console.log(servicePlan)
  return (
    <>
      <div style={{ backgrund: "#F1F1FA", display: "flex" }}>
       
        <div
          style={{
            width: "100%",
            background: "#f1f1fA",
          }}
        >

          <div
            className="content mx-3"
            style={{ background: "#F1F1FA", overflow: "hidden" }}
          >
            <Leadscharts
              totalLeads={totalLeads}
              totalFollowUps={totalFollowUps}
              leadConverted={leadConverted}
              leadLost={leadLost}
            />
          </div>
        <div className='leadInputs mx-3 mb-2 ' >
        <Form 
        onSubmit={applyFilter}
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
        >
        <div 
       className=''
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
        >
            <div
              className="input-group"
              style={{
                height: "6vh",
                background: "white",
                border: "0.7px solid grey",
                width: "18vw",
              }}
            >
              <div className="d-flex justify-content-center align-items-center px-2">
                <i className="fa-solid fa-user-large"></i>
              </div>
              <input
                type="text"
                style={{ border: "none", width: "5px" }}
                placeholder="Lead Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="form-control"
              />
            </div>

            <div
              className="input-group"
              style={{
                height: "6vh",
                background: "white",
                border: "0.7px solid grey",
                width: "18vw",
                padding:"1px"
              }}
            >
              <span className="d-flex justify-content-center align-items-center p-2">
                <i className="fa-solid fa-user-large"></i>
              </span>
              
              <select
                className="form-select"
                name="city"
                onChange={(e) => setServicePlan(e.target.value)}
                style={{
                  textAlign: "center",
                  height: "fit-content",
                  border: "none",
                  marginTop:"-1px"
                }}
                aria-label="Default select"
              >
                <option selected value="">
                  Service Type
                </option>
                <option value="Basic">Basic</option>
                <option value="Extended">Extended</option>
                <option value="Premium" style={{ background: "" }}>
                  Premium
                </option>
                <option value="Royal">Royal</option>
              </select>
            </div>

            <div className="selection">
              <select
                className="form-select"
                name="city"
                onChange={(e) => setStatus(e.target.value)}
                style={{
                  textAlign: "center",
                  height: "6vh",
                  border: "0.7px solid grey",
                }}
                aria-label="Default select"
              >
                <option selected value="">
                  Lead Status
                </option>
                <option value="lost">Lost</option>
                <option value="cold">Cold</option>
                <option value="negotiating" style={{ background: "" }}>
                  Negotiating
                </option>
                <option value="won">Won</option>
              </select>
            </div>

            <div>
              <Form.Control
                size="sm"
                name="foo"
                placeholder="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  textAlign: "center",
                  height: "6vh",
                  border: "0.7px solid grey",
                  width: "9vw",
                }}
                className=""
              />
            </div>
            <div
              className="input-group"
              style={{
                height: "6vh",
                background: "white",
                border: "0.7px solid grey",
                width: "7vw",
                padding:"2px"
              }}
            >
              {/* <span className="d-flex justify-content-center align-items-center p-2">
                $
              </span>
               */}
              <select
                className="form-select"
                name="source"
                onChange={(e) => setSource(e.target.value)}
                style={{
                  textAlign: "center",
                  border: "none",
                  height:"5vh"
                }}
                aria-label="Default select"
              >
                <option selected value="">
                  Source
                </option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="google" >
                  Google
                </option>
                <option value="referral">Referral</option>


                
              </select>
            </div>

            <div>
              <Button
                style={{
                  height: "6vh",
                  background: "#176EB3",
                  width: "5vw",
                }}
                type="reset"
                onClick={() => {
                  navigate(`/leads/${clientManager}`);
                }}
                className=""
              >
                {" "}
                Reset{" "}
              </Button>
            </div>
            <div>
              <Button
                style={{
                  height: "6vh",
                  background: "#222529",
                  width: "8vw",
                }}
                type="submit"
                className=""
              >
                <i
                  className="fa-solid fa-magnifying-glass "
                  style={{ marginRight: "4px" }}
                ></i>
                Search{" "}
              </Button>
            </div>
            </div>
          </Form>
        </div>
          <div
            className="mx-3 mt-3"
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              background: "white",
              height: "9vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "20%", paddingLeft: "1.2rem" }}>Lead Name</div>
            <div
              className="tab-title"
              style={{
                width: "80%",
                fontSize: "1.2rem",
                fontWeight: "700",
                // background: "white",
                // marginLeft:'40px',
                height: "9vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ width: "16%" }}>Service Type</div>
              <div style={{ width: "16%" }}>Contact Number</div>
              <div style={{ width: "16%" }}>Lead Status</div>
              <div style={{ width: "16%" }}>Deal Value</div>
              <div style={{ width: "16%" }}>Last Follow Up</div>
              <div style={{ width: "16%" }}>Next Follow Up</div>
            </div>
          </div>

          {leads?.map((l, key) => (
            <div
              key={l.id}
              style={{
                background: "#fff",
                height: "9vh",
                color: "#64676B",
                fontFamily: "Arial",
                paddingLeft: "1.2rem",
              }}
              className="d-flex mt-3 mx-3 align-items-center"
            >
              <div style={{ fontWeight: "", fontSize: "", width: "20%" }}>
                <div className="d-flex justify-content-start align-items-center ">
                  <div className="  ">
                    <div
                      style={{
                        borderRadius: "50%",
                        background: "#ED6F47",
                        height: "45px",
                        width: "45px",
                        color: "#fff",
                        fontWeight: "400",
                      }}
                      className="d-flex justify-content-center align-items-center  "
                    >
                      {l.name.split(" ").map((n) => n[0])}
                    </div>
                  </div>
                  <div
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      lineHeight: "25px",
                      marginLeft: "8px",
                    }}
                  >
                    {l.name}
                    <div
                      style={{
                        color: "#666",
                        fontWeight: "400",
                        fontSize: "14px",
                      }}
                    >
                      {l.email}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-title d-flex justify-content-between align-items-center"
                style={{
                  width: "80%",
                  //   marginRight:'15px'
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: "", fontSize: "19px", width: "13%" }}>
                  {l.serviceType}
                </div>

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ fontWeight: "", fontSize: "19px", width: "20%" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "16px", width: "26px" }}
                  >
                    {/* <img
                      src={l.contactImage}
                      alt="country"
                      className="images"
                      style={{ height: "inherit" }}
                    /> */}
                  </div>
                  <div>{l.phone}</div>
                </div>

                <div style={{ fontWeight: "", fontSize: "19px", width: "16%" }}>
                  {/* <SelectComponent/> */}
                  <div className="form-group ">
                    <select
                      className="selection "
                      name="city"
                      onChange={(e) => handleInputChange(e, l.id)}
                      style={{
                        fontWeight: "bold",
                        width: "130px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center ",
                      }}
                    >
                      <option
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center ",
                        }}
                        value={l.potential}
                      >{l.potential}</option>
                      <option
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center ",
                        }}
                        value="Negotiating"
                      >
                        Negotiating
                      </option>
                      <option value="cold">Cold</option>
                      <option value="lost" style={{ background: "" }}>
                        Lost
                      </option>
                      <option value="won">Won</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "19px",
                    width: "13%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className=""
                >
                  {l.dealValue}
                </div>

                <div style={{ fontWeight: "", fontSize: "19px", width: "16%" }}>
                  {new Date(l.lastFollowup).toLocaleDateString()}
                </div>

                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "19px",
                    width: "16%",
                    display: "flex",
                  }}
                >
                  <div>{new Date(l.nextFollowUp).toLocaleDateString()}</div>
                  <div style={{ width: "40px", marginLeft: "2px" }}>
                    <button
                      style={{
                        width: "inherit",
                        height: "37px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#176EB3",
                        border: "none",
                      }}
                    >
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-ellipsis"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <footer
            className="mx-3 mt-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center ",
            }}
          >
            <div className="pagination m-5">
              <a href="#">
                <i className="fa-solid fa-less-than" />
              </a>
              <a href="#">1</a>
              <a className="active" href="#">
                2
              </a>
              <a href="#">3</a>

              <a href="#">
                <i className="fa-solid fa-greater-than" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Leads;
