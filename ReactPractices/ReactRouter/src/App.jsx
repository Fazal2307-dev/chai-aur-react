import React from 'react'
import {Route ,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import RootLayout from './RootLayout/RootLayout'
import ContactLayout from './RootLayout/ContactLayout'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/contactInfo'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
                <Route index element={<Home />}/>
                <Route path='product' element={<Product />}/>
                <Route path='about' element={<About />}/>
                <Route path='contact' element={<ContactLayout />}>
                  <Route path='info' element={<ContactInfo />}/>
                  <Route path='form' element={<ContactForm />}/>
                </Route>

      </Route>
    )
  )
  return (
  <RouterProvider  router={router} />
  )
}

export default App
