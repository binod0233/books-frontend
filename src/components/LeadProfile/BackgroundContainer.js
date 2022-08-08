import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const BackgroundContainer = () => {
  return (
    <div  >
        <Row style={{height:"48vh",marginBottom:"10px",background:"white",paddingTop:"10px"}}>
          <h5 style={{fontSize:"Arial",fontWeight:"700",fontSize:"16px"}}>Client  Background and Needs</h5>
          <Form>
            <Form.Group controlId="servicewanted">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
Service Wanted</Form.Label> 
              <Form.Control as="select" style={{fontSize:"Arial",fontWeight:"700",fontSize:"16px"}}>
                <option value="">CDR Writing</option>
                <option value="">Reference Letter</option>
                <option value="">Resume</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="servicetype">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
Service Type</Form.Label>
              <Form.Control as="select" style={{fontSize:"Arial",fontWeight:"700",fontSize:"16px"}}>
                <option value="">CDR Writing</option>
                <option value="">Reference Letter</option>
                <option value="">Resume</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="serviceplan">
            <Form.Label style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"400",color:"#64676B"}}>
Service Plan</Form.Label>
              <Form.Control as="select" style={{fontSize:"Arial",fontWeight:"700",fontSize:"16px"}}>
              <option value="royal">Royal</option>
                <option value="premium">Premium</option>
                <option value="extended">Extended</option>
                <option value="basic">Basic</option>
              </Form.Control>
            </Form.Group>
            
          </Form>
            </Row>
            <Row style={{height:"18vh",marginBottom:"10px",background:"white",paddingLeft:"20px",paddingTop:"5px",}}>
                <div style={{height:"7vh",background:"#FFF8EF",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                <div style={{margin:"1vh",height:"5vh",width:"5vh",background:"#F0A41F",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <i style={{color:"#ffffff",height:"2vh"}} className="fa-solid fa-calendar-days"></i>
        </div>
        <span style={{fontWeight:"600",fontFamily:"sans-serif"}}>Last FollowUp</span>
        <Button className='px-2' style={{background:"#F0A41F",color:"white",fontWeight:"600",fontSize:"12px",height:"30px"}}>10 Aug 2018</Button>
                </div>
                <div style={{height:"7vh",background:"#FFF8EF",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                <div style={{margin:"1vh",height:"5vh",width:"5vh",background:"#1577D9",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <i style={{color:"#ffffff",height:"2vh"}} className="fa-solid fa-calendar-days"></i>
        </div>
        <span style={{fontWeight:"600",fontFamily:"sans-serif"}}>Last FollowUp</span>
        <Button className='px-2' style={{background:"#1577D9",color:"white",fontWeight:"600",fontSize:"12px",height:"30px"}}>10 Aug 2018</Button>
        <Button className='px-2' style={{background:"#1577D9",color:"white",fontWeight:"600",fontSize:"12px",height:"30px"}}><i className="fa-solid fa-rotate"></i></Button>

                </div>
               
                </Row>
    </div>
  )
}

export default BackgroundContainer