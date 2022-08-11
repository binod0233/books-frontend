import React from 'react'
import {Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'


const TheRoutes = () => {

  return (
    <div>
        <div style={{ background: "#F1F1FA", display: "flex" }}>
        <div style={{ }}>
          <Sidebar />
        </div>
        <div
          style={{
           width:"85%",
            background: "#f1f1fA",
            marginLeft:"15vw",
            
          }}
        >
            <Header/>
            <div style={{marginTop:"10vh"}}>

           
            <Outlet />
           </div>
           </div>
           </div>
           
    </div>
  )
}

export default TheRoutes