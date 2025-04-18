import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const naviagte = useNavigate();
  return (
    <div>
      <h2>404 | Page Not Found</h2>
      <button   onClick={() => naviagte('/')}>Go To Home </button>
    </div>
  )
}

export default NotFound
