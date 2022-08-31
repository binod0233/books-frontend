import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import '../../App.css'
const       OverallEarningStats = () => {
  return (
    <div className='me-4 px-3 py-2 ' style={{height:"30vh",background:"white", fontSize:'1.2rem', fontWeight:'700'}}>
        Overall Earning Stats
        <Row className='pt-2'>
            <Col>
                <div className='trans' style={{height:"22vh",background:"#EEF5FF",borderRadius:"10px"}}>
                    <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#3144E7",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/people.png" style={{height:"2vh"}} alt="people" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2 d-flex  justify-content-center align-items-center' style={{}}>
                          <div>
                          <span style={{color:"#3144E7",fontSize:"18px",fontWeight:"600"}}>Team Leads </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#3144E7",fontSize:".8rem"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:".8rem"}}>-3.23%</span>
                           </div>
                          </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                        
                            <span style={{fontSize:"1.8rem",color:"black",fontWeight:"700",fontFamily:""}}>$12,023<br/></span>
                            <span style={{fontSize:".8rem",color:"gray",fontWeight:"400"}}>Total Earning</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                                <Button className='bg-primary px-2 py-1' style={{marginTop:"3vh",marginLeft:" "}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
            <Col>
                <div className='trans' style={{height:"22vh",background:"#FFF6FB",borderRadius:"10px"}}>
                <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#DD2A7B",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/chat.png" style={{height:"2vh"}} alt="chat" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2 d-flex  justify-content-center align-items-center' style={{}}>
                        <div>
                           <span style={{color:"#DD2A7B",fontSize:"18px",fontWeight:"600"}}>Client Manager </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#DD2A7B",fontSize:".8rem"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:".8rem"}}>-3.23%</span>
                           </div>

                        </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                            <span style={{fontSize:"1.8rem",color:"black",fontWeight:"700",fontFamily:""}}>$12,023<br/></span>
                            <span style={{fontSize:".8rem",color:"gray",fontWeight:"400"}}>Total Earning</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                                <Button className=' px-2 py-1' style={{marginTop:"3vh",marginLeft:" ",background:"#DD2A7B",border:"none",outline:"none"}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
            <Col>
                <div className='trans' style={{height:"22vh",background:"#FFF8EF",borderRadius:"10px"}}>
                <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#F0A41F",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/leads.png" style={{height:"2vh"}} alt="leads" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2 d-flex  justify-content-center align-items-center' style={{}}>
                           <div>

                           <span style={{color:"#F0A41F",fontSize:"18px",fontWeight:"600"}}>Team Leads </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#F0A41F",fontSize:".8rem"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:".8rem"}}>-3.23%</span>
                           </div>
                           </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                            <span style={{fontSize:"1.8rem",color:"black",fontWeight:"700",fontFamily:""}}>$500<br/></span>
                            <span style={{fontSize:".8rem",color:"gray",fontWeight:"400"}}>Leads</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <Button className=' px-2 py-1' style={{marginTop:"3vh",marginLeft:" ",background:"#F0A41F",border:"none",outline:"none"}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
            <Col>
                <div className='trans' style={{height:"22vh",background:"#E3FCF8",borderRadius:"10px"}}>
                <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#05BBC0",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/whiteDoll.png" style={{height:"2vh"}} alt="whiteDoll" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2 d-flex  justify-content-center align-items-center' style={{}}>
                           <div>
                           <span style={{color:"#05BBC0",fontSize:"18px",fontWeight:"600"}}>Total Sales </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#05BBC0",fontSize:".8rem"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:".8rem"}}>-3.23%</span>
                           </div>

                           </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                            <span style={{fontSize:"1.8rem",color:"black",fontWeight:"700",fontFamily:""}}>$12,023<br/></span>
                            <span style={{fontSize:".8rem",color:"gray",fontWeight:"400"}}>Total Earning</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <Button className=' px-2 py-1' style={{marginTop:"3vh",marginLeft:" ",background:"#05BBC0",border:"none",outline:"none"}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
        </Row>
    </div>

  )
}

export default OverallEarningStats