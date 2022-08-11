import React,{useEffect,useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'

const LeadPaymentProfile = () => {

  const {id} = useParams()
  const [payment,setPayment] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/payment/paymentId/${id}`)
    .then(res => {
      setPayment(res.data.responseList)
    }
    )
  },[id])

  return (
    <div>LeadPaymentProfile</div>
  )
}

export default LeadPaymentProfile