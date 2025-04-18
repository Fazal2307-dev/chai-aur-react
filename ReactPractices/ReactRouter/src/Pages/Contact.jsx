import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className='contact'>
      <h1>Contact page</h1>
      <div className='contact-btn'>
          <button onClick={()=> navigate ('info')}>Contact Info</button>
          <button onClick={()=> navigate ('form')}>Contact From</button>
      </div>
    </div>
  )
}

export default Contact
