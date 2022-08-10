import React from 'react'
import {Row ,Col,Button,Form,Dropdown,DropdownButton} from 'react-bootstrap'
// import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Leadscharts from '../../components/leads/Leadscharts'


const TeamLeadAlllLeads = () => {
  // const params = useParams(); 
  // const {clientManager} = params;
  const [leads, setLeads] = React.useState([]);
  // const [potential,setPotential] = React.useState([]);
  // const [message,setMessage] = React.useState('')
  const leadsdataList=[{shortName:" NJ",name:"  Niall Johnson",email:"nialljohnson@gmail.com",serviceType:"CDR Writing",contactImage:"/c1.png",contactNo:"+27 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" HS",name:"  Harjeet Singh ",email:"harjeet@gmail.com",serviceType:"CDR Writing",contactImage:"/india.png",contactNo:"+91 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" RG",name:"  Ramana Greg ",email:"ramana@gmail.com",serviceType:"CDR Writing",contactImage:"/c2.png",contactNo:"+968 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},{shortName:" NJ",name:"  Niall Johnson",email:"nialljohnson@gmail.com",serviceType:"CDR Writing",contactImage:"/c1.png",contactNo:"+27 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" HS",name:"  Harjeet Singh ",email:"harjeet@gmail.com",serviceType:"CDR Writing",contactImage:"/india.png",contactNo:"+91 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"},
  {shortName:" RG",name:"  Ramana Greg ",email:"ramana@gmail.com",serviceType:"CDR Writing",contactImage:"/c2.png",contactNo:"+968 9825364545",dealValue:"$600",lastFollowup:" 10 Aug 2018"}]
  
  const handleInputChange=()=>{
    setLeads("")
  }
  return (
    <Row style={{backgrund:"#F1F1FA"}}>
    
 
<div className='ps-5'style={{background:"#F1F1FA"}} >
<Leadscharts/>

<Form>   
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
        <Dropdown.Item href="#">demo</Dropdown.Item>
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

 
<Row style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3">
<Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  Lead Name
</Col>

<Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  Service Type
</Col>

<Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
Contact Number
</Col>

<Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
  Difficulty
</Col>

<Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
 Deal Value
</Col>

<Col md={2} style={{fontWeight:"700",fontSize:"20px" }}>
 Last Followup
</Col>
</Row>
{leads?.map((l)=>

<Row key={l.id} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3">
<Col md={2} style={{fontWeight:"",fontSize:"" }}>
<Row> 
     
     <Col md={3} className="d-flex justify-content-center align-items-center  ">
     <div style={{borderRadius:"50%",background:"#ED6F47",height:"45px",width:"45px",color:"#fff",fontWeight:"400"}} className="d-flex justify-content-center align-items-center ">
        {l.name.split(" ").map((n)=>n[0])}
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
 <img src={l.contactImage} alt="country" className='img-fluid'/>{l.phone}
</Col>

<Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
  {/* <SelectComponent/> */}
  <div className="form-group ">
                                 <select className="form-control" name="city" onChange={(e)=>handleInputChange(e,l.id)} style={{fontWeight:"700"}}>
                                    
                                     <option value="lost">Lost</option>
                                     <option value="cold">Cold</option>
                                     <option value="negotiating" style={{background:""}}>Negotiating</option>
                                     <option value="won">Won</option>
                                 </select>
                             </div>
</Col>

<Col md={2} style={{fontWeight:"700",fontSize:"19px" }} className="ps-4">
 ${l.dealValue}
</Col>

<Col md={2} style={{fontWeight:"",fontSize:"19px" }}>
 <Row>
  <Col md={7}>

{new Date(l.lastFollowUpDate).toLocaleDateString()} 
</Col>
<Col md={5}>
 <DropdownButton
      pullLeft
     size="sm"
        variant="outline-secondary"
        title=""
        id="dropdown-basic"
      
      >
        
        
        <Dropdown.Item href="#">Convert to Deal</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Archive</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#"> Edit Lead Details</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Delete</Dropdown.Item>
      
      </DropdownButton>
      </Col>
      </Row>
</Col>
</Row>

)}

{leadsdataList.map((l,index)=>

<Row key={l.index} style={{background:"#fff",height:"70px"}} className="d-flex align-items-center justify-content-center mb-3">
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
 <DropdownButton
      pullLeft
     size="sm"
        variant="outline-secondary"
        title=""
        id="dropdown-basic"
      
      >
        
        
        <Dropdown.Item href="#">Convert to Deal</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Archive</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#"> Edit Lead Details</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Delete</Dropdown.Item>
      
      </DropdownButton>
      </Col>
      </Row>
</Col>
</Row>

)}

</div>

  </Row>
  )
}

export default TeamLeadAlllLeads