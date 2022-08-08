import React from 'react'
import {Row,Col, Button} from 'react-bootstrap'


const OverviewRow = ({name,email,totalSales,conversion,totalEarned}) => {
  return (
    <div className='py-4'>
    <Row  style={{height:"82vh",background:"white"}}>
      <Row style={{height:"48vh"}}>
        <Row style={{height:"11vh",background:"#DD2A7B",borderRadius:"2vh",marginLeft:"2vh",marginTop:"2vh"}}>
        </Row>
        <div className="d-flex justify-content-center ">

        <img src="/images/dashboard/avatar.png" alt="avatar" style={{height:"13vh",width:"15.5vh",marginTop:"-9vh",marginBottom:"3vh",marginLeft:"3vh"}} />
        </div>
        <div className="d-flex flex-column align-items-center" style={{marginTop:"-4vh",marginLeft:"3vh"}}>
          <span style={{fontWeight:"700"}}>{name}</span>
          <span>{email}</span>
          </div>
          
        <Row  style={{marginLeft:"3vh"}}>
          <Col className='d-flex flex-column align-items-center' style={{borderRight:"1px solid gray", fontSize:"12px",color:"grey"}}>
            <div style={{borderRadius:"50%",background:"#FFC3DE",height:"5vh",width:"5vh",display:"flex",justifyContent:"center",alignItems:"center",}}>
            <img src="/images/dashboard/dollar.png" alt="dollar"  style={{height:"3vh"}}/>

            </div>
            <div style={{marginBottom:"-20px",marginTop:"10px"}} className='d-flex flex-column align-items-center'>

              <span style={{fontWeight:"600",color:"black"}}>{totalSales}</span>
             <span style={{fontSize:"8px"}}>Total No. of Sales</span> 
            </div>
          </Col>
          <Col className='d-flex flex-column align-items-center' style={{ fontSize:"12px",color:"grey"}}>
            <div style={{borderRadius:"50%",background:"#FFC3DE",height:"5vh",width:"5vh",display:"flex",justifyContent:"center",alignItems:"center",}}>
            <img src="/images/dashboard/dollar.png" alt="dollar"  style={{height:"3vh"}}/>

            </div>
          <div style={{marginBottom:"-3vh",marginTop:"2vh"}} className='d-flex flex-column align-items-center'>


           <span style={{fontWeight:"600",color:"black"}}>{conversion}</span> 
            <span style={{fontSize:"8px"}}>Deal Conversion Rate</span>
            </div>
          </Col>

        </Row>
        <div className="d-flex flex-column align-items-center" style={{marginTop:"2vh",marginLeft:"3vh"}}>
          <Button style={{fontSize:"12px",background:"#DD2A7B"}} >Edit Profile</Button>
        </div>
      </Row>
      <Row style={{height:"33vh",paddingLeft:"5vh"}} >
        <div className='d-flex flex-column' style={{background:"#FFC3DE",height:"100%",width:"100%",borderRadius:"5px",padding:'10px'}}>
          <h6 style={{fontFamily:"Arial",fontWeight:"600"}}>Your Earning</h6>
          <div className='d-flex flex-column align-items-center' style={{marginTop:"1vh",height:"14.5vh",background:"white",margin:"0 10px",borderRadius:"10px"}}>
            <img src="/images/dashboard/earning.png" alt="wallet"  style={{height:"5vh",marginTop:"2vh"}}/>
            <span style={{fontWeight:"700",fontSize:"12px"}}>$ <span style={{fontSize:"20px"}}>{totalEarned}</span></span>
            <span style={{color:"gray",fontSize:"13px"}}>Total Earning</span>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{fontSize:"12px"}}>
            <div ><span>Team  Name</span> <span style={{fontWeight:"600"}} >San Antonio</span></div>
            <div ><span>Team  Lead</span> <span style={{fontWeight:"600"}} >Suman Subedi</span></div>
            <Button style={{fontSize:"12px",background:"#DD2A7B"}}>View Team</Button>
          </div>
        </div>
        </Row>
    </Row>
  </div>
  )
}

export default OverviewRow