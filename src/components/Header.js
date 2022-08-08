import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Header.css'

const Header = () => {
    const [keyword,setKeyword] = React.useState('')

    const searchKeyword = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
  return (
    <div style={{height:'80px',width:"100%",display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <div className='px-5' style={{fontFamily:'Arial',}}>
        <i className="fa-solid fa-chevron-right  mr-3"></i> New Lead
        </div>
        <div>
            <Form onSubmit={searchKeyword} style={{display:'flex'}}>
            <i style={{marginTop:'10px',fontSize:'20px',marginRight:'-30px',zIndex:'1'}} className="fa-solid fa-magnifying-glass"></i>

                <Form.Control className='searchInput' style={{width:'200px',border:'1px solid #F1F1FA',paddingLeft:'40px'}} type="text" placeholder="Search..." value={keyword} onChange={()=>setKeyword()}/>
                <Button type="submit" style={{marginLeft:'10px',fontWeight:'900',borderRadius:'50%',background:"white",border:"1px solid #F1F1FA"}} ><i className="fa-solid fa-plus text-black"></i></Button>
            </Form>
        </div>
        <div>
        <i className="fa-solid fa-user" styke={{fontSize:"20px",color:'blue'}}></i>
        </div>
        <Button type="submit" style={{marginLeft:'10px',fontWeight:'900',background:"primary",border:"1px solid #F1F1FA"}}  onClick={()=>{
            localStorage.removeItem('user')
        }}>Log out</Button>

    </div>
  )
}

export default Header