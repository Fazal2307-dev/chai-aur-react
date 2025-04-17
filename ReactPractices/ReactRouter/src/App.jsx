import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'> 
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/product' element={<Product />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/about' element={<About />}/>
              </Routes>
      </div>
    </div>
  )
}

export default App
