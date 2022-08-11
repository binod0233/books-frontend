import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'

const OverallEarningStats = () => {
  return (
    <div className='me-4 px-3 py-3 ' style={{height:"30vh",background:"white"}}>
        Overall Earning Stats
        <Row>
            <Col>
                <div style={{height:"22vh",background:"#EEF5FF",borderRadius:"10px"}}>
                    <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#3144E7",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/people.png" style={{height:"2vh"}} alt="people" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2' style={{}}>
                           <span style={{color:"#3144E7",fontSize:"18px",fontWeight:"600"}}>Team Leads </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#3144E7",fontSize:"12px"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:"12px"}}>-3.23%</span>
                           </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                            <span style={{fontSize:"27px",color:"black",fontWeight:"800",fontFamily:"serif"}}>$12,023<br/></span>
                            <span style={{fontSize:"12px",color:"gray",fontWeight:"400"}}>Total Earning</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                                <Button className='bg-primary px-2 py-0' style={{marginTop:"3vh",marginLeft:"-2vh"}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
            <Col>
                <div style={{height:"22vh",background:"#FFF6FB",borderRadius:"10px"}}>
                <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#DD2A7B",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/chat.png" style={{height:"2vh"}} alt="chat" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2' style={{}}>
                           <span style={{color:"#DD2A7B",fontSize:"18px",fontWeight:"600"}}>Client Manager </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#DD2A7B",fontSize:"12px"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:"12px"}}>-3.23%</span>
                           </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                            <span style={{fontSize:"27px",color:"black",fontWeight:"800",fontFamily:"serif"}}>$12,023<br/></span>
                            <span style={{fontSize:"12px",color:"gray",fontWeight:"400"}}>Total Earning</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                                <Button className=' px-2 py-0' style={{marginTop:"3vh",marginLeft:"-2vh",background:"#DD2A7B",border:"none",outline:"none"}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
            <Col>
                <div style={{height:"22vh",background:"#FFF8EF",borderRadius:"10px"}}>
                <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#F0A41F",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/leads.png" style={{height:"2vh"}} alt="leads" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2' style={{}}>
                           <span style={{color:"#F0A41F",fontSize:"18px",fontWeight:"600"}}>Team Leads </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#F0A41F",fontSize:"12px"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:"12px"}}>-3.23%</span>
                           </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                            <span style={{fontSize:"27px",color:"black",fontWeight:"800",fontFamily:"serif"}}>500<br/></span>
                            <span style={{fontSize:"12px",color:"gray",fontWeight:"400"}}>Leads</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <Button className=' px-2 py-0' style={{marginTop:"3vh",marginLeft:"-2vh",background:"#F0A41F",border:"none",outline:"none"}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
            <Col>
                <div style={{height:"22vh",background:"#E3FCF8",borderRadius:"10px"}}>
                <Row>
                        <Col md={4} className='pt-3 ps-4 ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <div className='d-flex  justify-content-center align-items-center' 
                            style={{background:"#05BBC0",height:"5vh",width:"5vh",borderRadius:"50%"}}>
                                <img src="/images/dashboard/whiteDoll.png" style={{height:"2vh"}} alt="whiteDoll" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={8} className='pt-2' style={{}}>
                           <span style={{color:"#05BBC0",fontSize:"18px",fontWeight:"600"}}>Total Sales </span> 
                           <div className="ms-5">
                           <span><i style={{color:"#05BBC0",fontSize:"12px"}} className="fa-solid fa-arrow-down-long"></i></span>
                           <span style={{fontSize:"12px"}}>-3.23%</span>
                           </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={7} className='pt-2  ps-4' style={{ }}>
                            <span style={{fontSize:"27px",color:"black",fontWeight:"800",fontFamily:"serif"}}>$12,023<br/></span>
                            <span style={{fontSize:"12px",color:"gray",fontWeight:"400"}}>Total Earning</span>
                            </Col>
                            <Col md={5} className='pt-3  ' style={{fontWeight:"700",fontSize:"20px" }}>
                            <Button className=' px-2 py-0' style={{marginTop:"3vh",marginLeft:"-2vh",background:"#05BBC0",border:"none",outline:"none"}}>View All</Button>
                            </Col>
                        </Row>
                </div>
            </Col>
        </Row>
    </div>

  )
}

export default OverallEarningStats