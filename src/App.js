import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login/Login';
import './App.css';


import "./App.css"

import TheRoutes from './components/Routes';


const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('user'));
  useEffect(() => {
    setLoggedIn(localStorage.getItem('user'));


  }, [localStorage.getItem('user')]);
  return (
<div  className='backgoundKo'>
    <Router>
         
    {loggedIn ? <TheRoutes /> :  <Routes>
       
       <Route path='/' element={<Login/>} /> 
          

       </Routes>}
       
    </Router>
    

   
    </div>
  )
}

export default App