import React from 'react'
import {Row,Col} from 'react-bootstrap'

const StatsRow = ({totalEarned,totalSales,totalLeads}) => {
  return (
    <div className='ps-4'>
      <Row className="p-3">
        <Col md={6} className="py-2 px-3">
          
          <Row style={{background:"#fff",height:"40vh"}} className='px-3 py-2'>
       

       <Col md={6} className='px-2 py-2'>
         <div className='d-flex justify-content-center align-items-center' style={{border:"2px solid #DD2A7B",height:"14vh" }}>
          <div>
            <div className='d-flex flex-col'>
            <img src="/images/dashboard/dollar.png" alt="dollar" style={{margin:" 10px 15px 0 0 " ,height:"18px"}}/>
          <span style={{fontWeight:"700",fontSize:"25px",fontFamily:"Arial",}}>{totalEarned}</span>
          </div>

          <span style={{color:"#64676B",fontSize:"14px"}}>TOTAL EARNING</span>
          </div>
         </div>
         
       </Col>
       <Col md={6} className='px-2 py-2'>
       <div className='d-flex justify-content-center align-items-center' style={{background:"#FEE8F2",height:"14vh" }}>
          <div>
            <div className='d-flex flex-col'>
            <img src="/images/dashboard/thailo.png" alt="thailo" style={{margin:" 10px 15px 0 0 " ,height:"18px"}}/>
          <span style={{fontWeight:"700",fontSize:"25px",fontFamily:"Arial",}}>{totalSales}</span>
          </div>

          <span style={{color:"#64676B",fontSize:"14px"}}>TOTAL No. of Sales</span>
          </div>
         </div>
         
       
         
       </Col>
       <Col md={6} className='px-2 py-2'>
       <div className='d-flex justify-content-center align-items-center' style={{background:"#FEE8F2",height:"14vh" }}>
          <div>
            <div className='d-flex flex-col'>
            <img src="/images/dashboard/number.png" alt="number" style={{margin:" 10px 15px 0 0 " ,height:"18px"}}/>
          <span style={{fontWeight:"700",fontSize:"25px",fontFamily:"Arial",}}>{totalLeads}</span>
          </div>

          <span style={{color:"#64676B",fontSize:"14px"}}>TOTAL Leads</span>
          </div>
         </div>
         
       
         
       
         
       </Col>
       <Col md={6} className='px-2 py-2'>
        
         <div className='d-flex justify-content-center align-items-center' style={{background:"#FEE8F2",height:"14vh" }}>
          <div>
            <div className='d-flex flex-col'>
            <img src="/images/dashboard/star.png" alt="star" style={{margin:" 10px 15px 0 0 " ,height:"18px"}}/>
          <span style={{fontWeight:"700",fontSize:"25px",fontFamily:"Arial",}}>1,800</span>
          </div>

          <span style={{color:"#64676B",fontSize:"14px"}}>TOTAL EARNING</span>
          </div>
         </div>
         
       
       </Col>
     </Row>
          
        </Col>
        <Col md={6} className="p-2" >
        <div style={{background:"#fff",height:"40vh"}}>

</div>
        </Col>
        <Col md={6} className="p-2" >
        <div style={{background:"#fff",height:"40vh"}}>

</div>
        </Col>
        <Col md={6} className="p-2">
        <div style={{background:"#fff",height:"40vh"}}>

</div>
        </Col>
      </Row>
    </div>
  )
}

export default StatsRow