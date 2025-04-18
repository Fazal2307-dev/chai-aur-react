import React from 'react'
import logo from "../assets/logo.png"
import { NavLink,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <img id="logo" src={logo} alt='' />
        <ul>
           <NavLink to='/'> <li>Home</li></NavLink>
           <NavLink to='/product'> <li>Products</li></NavLink>
           <NavLink to='/about'><li>About</li></NavLink>
           <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
        <button onClick={()=> navigate ('/contact',{replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar
