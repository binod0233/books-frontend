import React, { useEffect,useState } from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import axios from 'axios'

const AllClientManagers = () => {

  const [clientManagersList,setClientManagerList] = useState([])

  useEffect(()=>{
    axios.get(`REACT_APP_BASE_URL/api/salesman/salesmen`).then((res)=>{
      setClientManagerList()
    })
  },[])
  return (
    <Row style={{background:"#F1F1FA"}}>
      
      <Form >   
<Row className='py-3 d-flex'>


      

       <Col md={2}>
       <Form.Control  size="sm" name="foo" placeholder="TeamLead" type="text"  style={{height:"50px"}} className="" /> 

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="ClientManager" type="text"  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="ClientName" type="date"  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="date" type="date"  style={{height:"50px"}}  className="" />

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="date" type="text"  style={{height:"50px"}}  className="" />

       </Col>
       <Col md={1}>
       <Button  style={{height:"50px", background:"#176EB3"}} type="reset" className=""  >  Reset </Button>

       </Col>
       <Col md={1}>
       <Button   style={{height:"50px", background:"#222529"}} type="submit" className="ms-4" >Search </Button>

       </Col>

      </Row>
      </Form>
      <div className='mx-4'>
                  <h5 className='text-black p-2'>Top Client Manager</h5>
              <Row  style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Client Manager
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Team Name
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  No. of leads
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
    Status
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Weeks
  </Col>

  <Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
   Total Sales
  </Col>
  
</Row>


{clientManagersList?.map((l,index)=>

<Row key={index} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
  <Col md={2} style={{fontWeight:"",fontSize:"" }}>
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

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
    {l.serviceType}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }} >
   <img src={l.contactImage} alt="country" className='img-fluid'/>{l.contactNo}
  </Col>

  <Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
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

)}
</div>
    </Row> 
  )
}

export default AllClientManagers