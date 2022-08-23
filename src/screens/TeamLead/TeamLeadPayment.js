import React, {useState,useEffect} from 'react'
import {   Form } from 'react-bootstrap'
import PaymentTop from '../../components/payments/PaymentTop'
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom'
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const TeamLeadPayment = () => {

  const [paymentList, setPaymentList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [clientName, setClientName] = useState('');
  const [amount,setAmount] = useState(0)
  const [serviceType,setServiceType] = useState("")
  const [recipient,setRecipient] = useState("")
  const [paymentMethod,setPaymentMethod] = useState("")
  const [data,setDate] = useState("")
  const navigate = useNavigate();
  const params = useParams();
  const { teamLead } = params;


  useEffect(() => {
    getAllThePayments();
  }, []);

  const getAllThePayments = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/payment/payments/getAllLeadsOfATeamLead/${teamLead}`
      )
      .then((res) => {
        setPaymentList(res.data.responseList);
        setDisplayList(res.data.responseList);
      });
  };
  const totalPayment = paymentList?.reduce((acc, i) => acc + i.amount, 0);

  const current = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const date = `${current}`;

  const filterPayment = (e) =>{
    e.preventDefault()
    axios.post(`http://booksbackenddev-env.eba-j6i2gjpq.us-east-1.elasticbeanstalk.com/api/payment/attributeSearch`,{
      leadName:clientName,
      serviceType,
      amount1:amount,
      amount2:999999,
      paymentMethod,
      date1:date,
      date2:date,
      teamLead,


    }).then(res=>{
      setDisplayList(res.data.responseList)
    })
  }


  return (
    <div style={{ background: "#F1F1FA" }}>
    <div className="">
      <div className="ps-4 pe-3">
        <PaymentTop totalPayment={totalPayment} />
      </div>
      <div>
        <Form onSubmit={filterPayment} className="mx-4">
          <div
            style={{
              // background: "red",
              height: "70px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // marginRight:'10px'
            }}
          >
            <div
              className="input-group "
              style={{
                height: "45px",
                background: "white",
                border: "0.7px solid grey",
                width: "229px",
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
                height: "45px",
                background: "white",
                border: "0.7px solid grey",
                width: "195px",
              }}
            >
              <div className="d-flex justify-content-center align-items-center px-2">
                <i className="fa-solid fa-user-large"></i>
              </div>
              
                <select
              className="form-select"
              name="Service Type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
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
            <div
              className="input-group"
              style={{
                height: "45px",
                background: "white",
                border: "0.7px solid grey",
                width: "165px",
              }}
            >
              <span className="d-flex justify-content-center align-items-center p-2">
                $
              </span>
              <input
                type="text"
                style={{ border: "none", background:'none' }}
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
              />
            </div>
            <div
              className="input-group"
              style={{
                height: "45px",
                //  background: "white",
                border: "0.7px solid grey",
                width: "152px",
                background: "#FFC3DE",
                color: "#DD2A7B",
              }}
            >
              <div
                style={{}}
                className="d-flex justify-content-center align-items-center px-2"
              >
                <i className="fa-solid fa-user-large"></i>
              </div>
              <input
                type="text"
                style={{
                  border: "none",
                  width: "5px",
                  background: "#FFC3DE",
                  color: "#DD2A7B",
                }}
                placeholder="Recepient"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="form-control"
              />
            </div>
            <div
              className="input-group"
              style={{
                height: "45px",
                background: "white",
                border: "0.7px solid grey",
                width: "210px",
              }}
            >
              <div className="d-flex justify-content-center align-items-center px-2">
                <i className="fa-solid fa-user-large"></i>
              </div>
             
                <select
              className="form-select"
              name="Payment Method"
              onChange={(e) => setPaymentMethod(e.target.value)}
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
              <option value="Visa Card">Visa Card</option>
              <option value="Paypal">Paypal"</option>
             
              
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
                  height: "45px",
                  border: "0.7px solid grey",
                  width: "185px",
                }}
                className=""
              />
            </div>
            <div>
              <button
                style={{
                  height: "45px",
                  background: "#FFC3DE",
                  width: "52px",
                  border: "none",
                  borderRadius: "5px",
                }}
                type="submit"
                
                className=""
              >
                <FilterAltOutlinedIcon style={{ background: "#FFC3DE" }} />
              </button>
            </div>
          </div>
        </Form>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "22px",
            fontWeight: "700",
          }}
          className="transaction-records mt-2 mx-4"
        >
          <div style={{}}>{date}</div>
          <div
            style={{
              display: "flex",
              color: "#64676B",
              width: "48%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Number of Transactions: 05</div>
            <div>Transactions value: $5000</div>
          </div>
        </div>

        <div className="mx-4" style={{ background: "#fff", height: "70px" }}>
          <div
            style={{
              height: "70px",
              fontWeight: "700",
              fontSize: "22px",
              width: "92%",
              paddingLeft: "1%",
            }}
            className="d-flex align-items-center justify-content-between  mt-3"
          >
            <div style={{ width: "15%" }}>Lead Name</div>
            <div style={{ width: "37%" }}>
              <div
                className="d-flex align-items-center justify-content-between "
                style={{}}
              >
                <div style={{}}>Amount</div>
                <div style={{}}>Payment Date</div>
                <div style={{}}>Service Type</div>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ width: "45%" }}
            >
              <div style={{}}>Recipient</div>
              <div style={{}}>Payment</div>
              <div style={{}}>Receipt</div>
              <div style={{}}>Remark</div>
            </div>
          </div>
        </div>

                {displayList?.map((payment, key) => (
                  <div  key={payment.id}
                    className="d-flex mx-4 p-1 mt-3"
                    style={{
                      height: "70px",
                      // width: "92%",
                      fontSize: "1.3rem",
                      // fontWeight: "700",
                      background:'#FFF',
                      cursor:'pointer'
                    }}
                  
                  >
                    <div
                      className="d-flex align-items-center justify-content-start"
                      style={{ width: "14vw", marginRight: "" }}
                      onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          background: "#ED6F47",
                          height: "45px",
                          width: "45px",
                          color: "#fff",
                          fontWeight: "400",
                          margin: "0 5%",
                        }}
                        className="d-flex justify-content-center align-items-center "
                        onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                      >
                        {payment.payee.split(" ").map((n) => n[0])}
                      </div>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                        md={9}
                        style={{ color: "", fontWeight: "700", fontSize: "22px" }}
                      >
                        {payment.payee}
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-start"
                      style={{ width: "10vw", color:'#64676B'}}
                      onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                    >
                      <div>${payment.amount}.00</div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-start"
                      style={{ width: "10vw", background: "" ,color:'#64676B'}}
                        onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                    >
                      {new Date(payment.paymentDate).toLocaleDateString()}
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ width: "12vw", background: "",color:'#64676B' }}
                      onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                    >
                      {payment.serviceType}
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-start"
                      style={{ width: "10vw", background: "",color:'#64676B' }}
                      onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                    >
                      {payment.recipient}
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-start"
                      style={{ width: "10vw", background: "",color:'#64676B' }}
                      onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                    >
                      {payment.status}
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-start"
                      style={{ width: "10vw", background: "",color:'#64676B' }}
                      onClick={()=>navigate(`/payment/paymentId/${payment.paymentId}`)}
                    >
                      {payment.receipt}
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-end"
                      style={{ width: "15vw", background: "",color:'#64676B' }}
                  
                    >
                    <div style={{display:'flex',justifyContent:'space-between',marginRight:'1rem'}}>  {payment.remarks}</div>
                    <div onClick={()=>navigate(`/add-payment/${payment.paymentId}`)} style={{borderRadius:'5px',height:'40px',width:'40px',background:'#176EB3',color:'white', display:'flex', alignItems:'center', justifyContent:'center',marginRight:'5px',cursor:'pointer'}}><AddIcon/></div>
                    <div  style={{borderRadius:'5px',height:'40px',width:'40px',background:'#F0F0F0',color:'white', display:'flex', alignItems:'center', justifyContent:'center',marginRight:'5px',cursor:'pointer'}}><KeyboardArrowDown style={{color:"#64676B"}}/></div>
                    </div>

                  </div>
                ))}
      </div>
    </div>
  </div>
  )
}

export default TeamLeadPayment 