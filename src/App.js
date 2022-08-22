import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login/Login';
import './App.css';
import TheRoutes from './components/Routes';

import Dashboard from './screens/ClientManager/Dashboard';
import Payment from './screens/ClientManager/Payment';
import AddPayment from './screens/AddPayment';
import TeamLeadPayment from './screens/TeamLead/TeamLeadPayment';
import TeamLeadLeadDashboard from './screens/TeamLead/TeamLeadLeadDashboard';
import TeamLeadAlllLeads from './screens/TeamLead/TeamLeadAlllLeads';
import AdminDashboard from './screens/Admin/AdminDashboard';
import AllClientManagers from './screens/Admin/AllClientManagers';
import AllTeamLeadClientManagers from './screens/TeamLead/AllTeamLeadClientManagers';
import ClientManagerProfileEdit from './screens/ClientManager/ClientManagerProfileEdit';
import LeadProfile from './screens/LeadProfile';
import TeamLeadLeadPaymentProfile from './screens/TeamLead/TeamLeadLeadPaymentProfile';
import AdminAllLeads from './screens/Admin/AdminAllLeads';
import AdminAllPayments from './screens/Admin/AdminAllPayments';
import Leads from './screens/ClientManager/Leads';
import Signupsuccess from './screens/Signup/Signupsuccess';
import Addlead from './screens/Addlead';
import Contacts from './screens/Contacts';
import Editlead from './screens/TeamLead/Editlead';
import Signup1 from './screens/Signup/Signup1';
import Signup3 from './screens/Signup/Signup3';
import LeadPaymentProfile from './screens/LeadPaymentProfile';
import AdminLeadEdit from './screens/TeamLead/AdminLeadEdit';


const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('user'));
  useEffect(() => {
    setLoggedIn(localStorage.getItem('user'));


  }, [localStorage.getItem('user')]);
  return (
<div  className='backgoundKo'>
    <Router>
  <Routes>
  <Route element={<TheRoutes/>}>

<Route path='/teamlead/dashboard/:teamLead' element={<TeamLeadLeadDashboard/>}/>
      <Route path='/teamlead/leads/:teamLead' element={<TeamLeadAlllLeads/>}/>
      <Route path='/teamlead/payment/:teamLead' element={<TeamLeadPayment/>}/>
      <Route path='/teamlead/lead/payment/:leadLead' element={<TeamLeadLeadPaymentProfile/>}/>

      <Route path='/signup1' element={<Signup1/>} />
     {/* <Route path='/signup2' element={<Signup2/>} /> */}
     <Route path='/signup3' element={<Signup3/>}/>

      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      <Route path='/admin/allleads' element={<AdminAllLeads/>}/>
      <Route path='/admin/allpayments' element={<AdminAllPayments/>}/>
      <Route path='/allclientmanagers' element={<AllClientManagers/>}/>
      <Route path='/teamlead/allclientmanagers' element={<AllTeamLeadClientManagers/>}/>
      <Route path='/clientManager/profile/:id' element={<ClientManagerProfileEdit/>}/>
      <Route path='/admin/edit-lead' element={<AdminLeadEdit/>}/>


      <Route path='/dashboard/:name' element={<Dashboard/>}/>
      <Route path='/leads/:clientManager' element={<Leads/>}/>
      <Route path='/signup-success' element={<Signupsuccess/>}/>
      <Route path='/add-lead' element={<Addlead/>}/>
      <Route path='/contact-us' element={<Contacts/>}/>
      <Route path='/edit-lead/:id' element={<Editlead/>}/>
      <Route path='/payment/:clientManager' element={<Payment/>}/>
      <Route path='/add-payment' element={<AddPayment/>}/>
      <Route path="/lead/profile/:id" element={<LeadProfile/>}/>
     <Route path='/payment/paymentId/:paymentId' element={<LeadPaymentProfile/>} />

 </Route>
       <Route path='/' element={<Login/>} /> 
          

       </Routes>
       
    </Router>
    

   
    </div>
  )
}

export default App