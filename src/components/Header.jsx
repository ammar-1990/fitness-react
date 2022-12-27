import "./Header.scss"
import Bars from '../assets/bars.png'
import Logo from '../assets/logo.png'
import { useState } from "react"
const Header = () => {

  const [open,setOpen]=useState(false)
  return (
    <div className="header">
        <img src={Logo} alt="" />
<div className="navWrapper">
        <nav style={{height : open ? '250px' : '0'}}>
            <span onClick={()=>setOpen(false)}><a href="#home">Home</a> </span>
            <span onClick={()=>setOpen(false)}><a href="#programs">Programs</a></span>
            <span onClick={()=>setOpen(false)}><a href="#reasons">Why Us</a></span>
            <span onClick={()=>setOpen(false)}><a href="#plans">Plans</a></span>
            <span onClick={()=>setOpen(false)}><a href="#testimonials">Testimonials</a></span>
        </nav>
        <img src={Bars} alt="" className="bars" onClick={()=>setOpen(prev=>!prev)} />
        </div>
    </div>
  )
}

export default Header