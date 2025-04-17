import React from 'react'
import job from '../assets/job.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={job} alt='' width='70px'/>
        <ul>
                 <Link to='/' >  <li>Home</li></Link> 
                 <Link to='/Job'>  <li>Job</li></Link> 
                 <Link to='/Carrer'>   <li>Carrer</li></Link> 
                 <Link to='/Internship'>   <li>Internship</li></Link> 
                 <Link to='/Course'>   <li>Course</li></Link> 
                 
        </ul>
       
      
    </div>
  )
}

export default Navbar
