import React from 'react'
import Sidebar from '../../components/Sidebar'
import {Row,Col,Form,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import Header from '../../components/Header'

const AllClientManagers = () => {

  const leadsdataList=[{shortName:" NJ",name:"  Niall Johnson",email:"nialljohnson@gmail.com",serviceType:"CDR Writing",contactImage:"/c1.png",contactNo:"+27 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" HS",name:"  Harjeet Singh ",email:"harjeet@gmail.com",serviceType:"CDR Writing",contactImage:"/india.png",contactNo:"+91 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" RG",name:"  Ramana Greg ",email:"ramana@gmail.com",serviceType:"CDR Writing",contactImage:"/c2.png",contactNo:"+968 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},{shortName:" NJ",name:"  Niall Johnson",email:"nialljohnson@gmail.com",serviceType:"CDR Writing",contactImage:"/c1.png",contactNo:"+27 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" HS",name:"  Harjeet Singh ",email:"harjeet@gmail.com",serviceType:"CDR Writing",contactImage:"/india.png",contactNo:"+91 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" RG",name:"  Ramana Greg ",email:"ramana@gmail.com",serviceType:"CDR Writing",contactImage:"/c2.png",contactNo:"+968 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"}]
 
  return (
    <Row style={{background:"#F1F1FA"}}>
      
      <Form >   
<Row className='py-3 d-flex'>
<Col md={2}>
<DropdownButton
        
        
       size="lg"
          variant="outline-secondary"
          title="Team Lead"
          id="dropdown-basic"
          style={{width:"fit-content"}}
          
        
        >
          
          
          <Dropdown.Item href="#">demo   </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"> demo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">demo</Dropdown.Item>
        
        </DropdownButton>
</Col>

      

       <Col md={2}>
       <Form.Control  size="sm" name="foo" placeholder="Client Name" type="text"  style={{height:"50px"}} className="" /> 

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="Service Plan" type="text"  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={2}>
       <Form.Control size="sm" name="foo" placeholder="Date" type="date"  style={{height:"50px"}} className=""  />

       </Col>
       <Col md={1}>
       <Form.Control size="sm" name="foo" placeholder="Source" type="text"  style={{height:"50px"}}  className="" />

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


{leadsdataList.map((l,index)=>

<Row key={l.index} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3 mx-2">
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