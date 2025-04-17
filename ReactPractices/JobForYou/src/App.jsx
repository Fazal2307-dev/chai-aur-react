import React from 'react'
import Navbar from './Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Carrer from './components/Carrer'
import Course from './components/Course'
import Internship from './components/Internship'
import Job from './components/Job'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Carrer' element={<Carrer />}></Route>
        <Route path='/Course' element={<Course />}></Route>
        <Route path='/Internship' element={<Internship />}></Route>
        <Route path='/Job' element={<Job/>}></Route>
      </Routes>
    </div>
  )
}

export default App

