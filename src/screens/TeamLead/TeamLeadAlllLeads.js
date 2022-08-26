import React, {useEffect,useState} from 'react'
import {Row ,Col,Button,Form,Dropdown,DropdownButton} from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
import Leadscharts from '../../components/leads/Leadscharts'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';


const TeamLeadAlllLeads = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { teamLead }  = params;
  const [displayList,setDisplayList] = useState([]);
  const [leads, setLeads] = useState([])
   

  //filter states
  const [clientName, setClientName] = useState("");
  const [status, setStatus] = useState("");
  const [servicePlan, setServicePlan] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);

const localUser = JSON.parse(localStorage.getItem('user'));


  const [message,setMessage] = useState('')
  
  const getAllLeadsOfATeamLead = ()  => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/lead/leads/getAllLeadsOfATeamLead/${teamLead}`).then(res => {
      setLeads(res.data.responseList);
      setDisplayList(res.data.responseList);
    })
  }
  // const handleInputChange=(e,leadId,teamLead,leadName,clientManager)=>{
  //   axios
  //     .put(`REACT_APP_BASE_URL/api/lead/leads/changepotential/${leadId}`, {
  //       potential: e.target.value,
  //       teamLead,
  //       leadId,
  //       leadName,
  //       clientManager


  //     })
  //     .then((res) => {
  //       if (res.status === "ok") {
  //         setMessage("Difficulty Changed Successfully");
  //       } else {
  //         setMessage("There was a problem changing difficulty");
  //       }
  //     });
  // };

  const applyFilter = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/lead/attributeSearch`,{
       leadName:clientName,
      serviceType:servicePlan,
      potential:status,
      date1:date,
      amount:amount,
      teamLead
    }).then((res) => {
      setDisplayList(res.data.responseList);
    })
  };

  useEffect(() => {
    if(!localUser){
      navigate('/login')
    }else{
    if(localUser?.userName!==teamLead || localUser?.role!=='admin' ){
      navigate(`/teamLead/leads/${localUser?.userName}`)
    }}
  },[])


  useEffect(() => {
    getAllLeadsOfATeamLead();
  }, []);
  const totalLeads = leads?.length;
  const totalFollowUps = leads?.filter((lead) => lead.nextFollowUpDate).length;
  const leadConverted = leads?.filter((lead) => lead.potential === "won").length;
  const leadLost = leads?.filter((lead) => lead.potential === "lost").length;
  const leadsFronWebsites = leads?.filter((lead) => lead.source === "websites").length;
  const leadsFronLinkedin = leads?.filter((lead) => lead.source === "linkedin").length;
  const leadsFronInstagram = leads?.filter((lead) => lead.source === "instagram").length;
  const leadsFronOthers = leads?.filter((lead) => lead.source === "others").length;
  const leadsFronFacebook = leads?.filter((lead) => lead.source === "facebook").length;
  return (
    <Row style={{backgrund:"#F1F1FA"}}>
    
 
<div className='ps-5'style={{background:"#F1F1FA"}} >
<Leadscharts/>

<Form 
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
              }}
            >
              <span className="d-flex justify-content-center align-items-center p-2">
                <i className="fa-solid fa-user-large"></i>
              </span>
             <select
                className="form-select"
                name="Service Type"
                onChange={(e) => setServicePlan(e.target.value)}
                style={{
                  textAlign: "center",
                  height: "5vh",
                  border: "none"
                }}
                aria-label="Default select"
              >
                <option selected value="">
                  Service Type
                </option>
                <option value="CDR Assessment">CDR Assessment</option>
                <option value="CDR Report">CDR Report"</option>
                <option value="CDR Review" >
                CDR Review
                </option>
                
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
              }}
            >
              <span className="d-flex justify-content-center align-items-center p-2">
                $
              </span>
              <input
                type="number"
                style={{ border: "none" }}
                placeholder="Deal Value"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control mb-1"
              />
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
                  setDisplayList(leads);
                  navigate(`/teamLead/leads/${teamLead}`);
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
                onClick={applyFilter}
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
{displayList?.map((l) => (
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
                    {l.leadStatus}
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
                  <div style={{ width: "40px", marginLeft: "2px" }}  onClick={() => {
                    navigate(`/edit-lead/${l.id}`);
                  }}>
                    <button
                      style={{
                        width: "inherit",
                        height: "2.2rem",
                        borderRadius:'8px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#176EB3",
                        border: "none",
                      }}
                    >
                    <EditIcon style={{color:'white'}}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}


</div>

  </Row>
  )
}

export default TeamLeadAlllLeads