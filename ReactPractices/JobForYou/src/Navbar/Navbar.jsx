import React from 'react'
import job from '../assets/job.png'
import {NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={job} alt='' width='70px'/>
        <ul>
                 <NavLink to='/' >  <li>Home</li></NavLink> 
                 <NavLink to='/Job'>  <li>Job</li></NavLink> 
                 <NavLink to='/Carrer'>   <li>Carrer</li></NavLink> 
                 <NavLink to='/Internship'>   <li>Internship</li></NavLink> 
                 <NavLink to='/Course'>   <li>Course</li></NavLink> 
                 
        </ul>
       
      
    </div>
  )
}

export default Navbar
