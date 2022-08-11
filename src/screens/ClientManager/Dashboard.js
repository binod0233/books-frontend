import React, { useState, useEffect } from "react";
import OverviewRow from "../../components/dashboard/OverviewRow";
import PaymentRow from "../../components/dashboard/PaymentRow";
import StatsRow from "../../components/dashboard/StatsRow";
import Header from "../../components/Header";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const leadsdataList = [
  {
    shortName: " NJ",
    name: "  Niall Johnson",
    email: "nialljohnson@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/c1.png",
    contactNo: "+27 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "19 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " RG",
    name: "  Ramana Greg ",
    email: "ramana@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/c2.png",
    contactNo: "+968 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " NJ",
    name: "  Niall Johnson",
    email: "nialljohnson@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/c1.png",
    contactNo: "+27 9825364545",
    dealValue: "$600",
    NextFollowup: "30 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "10 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
  {
    shortName: " HS",
    name: "  Harjeet Singh ",
    email: "harjeet@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/india.png",
    contactNo: "+91 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },

  {
    shortName: " RG",
    name: "  Ramana Greg ",
    email: "ramana@gmail.com",
    serviceType: "CDR Writing",
    contactImage: "/c2.png",
    contactNo: "+968 9825364545",
    dealValue: "$600",
    NextFollowup: "12 sept 2022",
    lastFollowup: " 10 Aug 2018",
  },
];

const Dashboard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { name } = params;

  const [paymentList, setPaymentList] = useState([]);
  const [leadList, setLeadList] = useState([]);
  const [user, setUser] = useState({});
  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!localUser) {
      navigate("/login");
    } else {
      if (localUser?.name !== name || localUser?.role !== "admin") {
        navigate(`/dashboard/${localUser?.name}`);
      }
    }
  }, []);

  const getAllLeadsOfAClientManager = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/lead/leads/getAllLeadsOfAClientManager/${name}`
      )
      .then((res) => {
        setLeadList(res.data.responseList);
      });
  };

  const getAllPaymentsOfAClientManager = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/payment/payments/getAllPaymentsOfAClientManager/${name}`
      )
      .then((res) => {
        setPaymentList(res.data.responseList);
      });
  };

  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/user/appUser/byname/${name}`)
      .then((res) => {
        setUser(res.data);
      });
  };

  useEffect(() => {
    getAllLeadsOfAClientManager();
    getAllPaymentsOfAClientManager();
    getUser();
  }, []);

  console.log(name, paymentList, leadList, user);

  const totalDealValue = leadList.reduce(
    (acc, lead) => acc + lead.dealValue,
    0
  );
  const totalEarned = paymentList?.reduce(
    (acc, payment) => acc + payment.amount,
    0
  );
  const totalSales = leadList?.filter((l) => l.status === "won").length;
  const totalLeads = leadList?.length;
  const conversion = (totalSales / totalLeads) * 100;
  const totalDuePayment = totalDealValue - totalEarned;

  return (
    <Row>
      <div className="px-4" style={{ background: "#F1F1FA" }}>
        <Row>
          <Col md={9}>
            <StatsRow
              totalEarned={totalEarned}
              totalSales={totalSales}
              totalLeads={totalLeads}
              conversion={conversion}
            />
          </Col>
          <Col md={3}>
            <OverviewRow
              totalSales={totalSales}
              totalEarned={totalEarned}
              conversion={conversion}
              name={user.name}
              email={user.email}
              // teamName={leadList && leadList[0].teamLead } teamLead={paymentList && paymentList[0].recipient}
            />
          </Col>
        </Row>
        <PaymentRow
          totalDealValue={totalDealValue}
          totalPayment={totalEarned}
          totalDuePayment={totalDuePayment}
        />

        <div style={{ background: "#fff" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: "10px",
            }}
          >
            <span style={{ fontWeight: "600", margin: "10px" }}>
              Top Leads{" "}
            </span>
            <DropdownButton
              size="sm"
              variant="outline-secondary"
              title="Monthly"
              id="dropdown-basic"
              style={{ width: "fit-content" }}
            >
              <Dropdown.Item href="#">demo </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">demo</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#"> demo</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">demo</Dropdown.Item>
            </DropdownButton>
          </div>
          <Row
            style={{ background: "#fff", height: "70px" }}
            className="d-flex align-items-center justify-content-center mb-3 mx-2"
          >
            <Col md={3} style={{ fontWeight: "700", fontSize: "20px" }}>
              Lead Name
            </Col>

            <Col md={1} style={{ fontWeight: "700", fontSize: "20px" }}>
              Date
            </Col>

            <Col md={1} style={{ fontWeight: "700", fontSize: "20px" }}>
              Source
            </Col>

            <Col md={1} style={{ fontWeight: "700", fontSize: "20px" }}>
              Team Name
            </Col>

            <Col md={1} style={{ fontWeight: "700", fontSize: "20px" }}>
              Status
            </Col>

            <Col md={1} style={{ fontWeight: "700", fontSize: "20px" }}>
              Deal Amount
            </Col>
            <Col md={2} style={{ fontWeight: "700", fontSize: "20px" }}>
              Total Amount
            </Col>
            <Col md={2} style={{ fontWeight: "700", fontSize: "20px" }}>
              Due Amount
            </Col>
          </Row>

          {/* {leadsdataList.map((l,index)=>

<Row key={l.index} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={3} style={{fontWeight:"",fontSize:"" }}>
  <Row> 
       
       <Col md={3} className="d-flex justify-content-center align-items-center  ">
       <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
          {l.shortName}
          </div>
          </Col>
          <Col md={9} style={{color:"",fontWeight:"700"}}>
          {l.name}
          <div style={{color:"#666",fontWeight:"400"}}>
           {l.email}
          </div>
          </Col>
          </Row>
  </Col>

  <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
    {l.serviceType}
  </Col>

  <Col md={1} style={{fontWeight:"",fontSize:"19px" }} >
   <img src={l.contactImage} alt="country" className='img-fluid'/>{l.contactNo}
  </Col>

  <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
    Active
  </Col>
  <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
    Active
  </Col>
  <Col md={1} style={{fontWeight:"",fontSize:"19px" }}>
    Active
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
   {l.dealValue}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
   <Row>
    <Col md={7}>
  
  {l.lastFollowup}  
  </Col>
  <Col md={5}>
 
        </Col>
        </Row>
  </Col>
</Row>

)} */}

          {leadList?.map((l, index) => (
            <Row
              key={l.id}
              style={{ background: "#fff", height: "70px" }}
              className="d-flex align-items-center justify-content-center mb-3 mx-2"
            >
              <Col md={3} style={{ fontWeight: "", fontSize: "" }}>
                <Row>
                  <Col
                    md={3}
                    className="d-flex justify-content-center align-items-center  "
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        background: "#ED6F47",
                        height: "45px",
                        width: "45px",
                        color: "#fff",
                        fontWeight: "400",
                      }}
                      className="d-flex justify-content-center align-items-center "
                    >
                      {l.shortName}
                    </div>
                  </Col>
                  <Col md={9} style={{ color: "", fontWeight: "700" }}>
                    {l.name}
                    <div style={{ color: "#666", fontWeight: "400" }}>
                      {l.email}
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col md={1} style={{ fontWeight: "", fontSize: "19px" }}>
                {new Date(l.createdDate).toLocaleDateString()}
              </Col>
              <Col md={1} style={{ fontWeight: "", fontSize: "19px" }}>
                {l.source}
              </Col>

              <Col md={1} style={{ fontWeight: "", fontSize: "19px" }}>
                {l.teamLead}
              </Col>

              <Col md={1} style={{ fontWeight: "", fontSize: "19px" }}>
                {l.potential}
              </Col>
              <Col md={1} style={{ fontWeight: "", fontSize: "19px" }}>
                ${l.dealValue}
              </Col>

              <Col
                md={2}
                style={{ fontWeight: "700", fontSize: "19px" }}
                className="ps-4"
              >
                {paymentList.filter((p) => p.payee === l.name).amount}
              </Col>

              <Col md={2} style={{ fontWeight: "", fontSize: "19px" }}>
                {l.dealValue -
                  paymentList.filter((p) => p.payee === l.name).amount}
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </Row>
  );
};

export default Dashboard;
