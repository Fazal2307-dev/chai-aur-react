import React from 'react'
import {Route ,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import RootLayout from './RootLayout/RootLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
                <Route index element={<Home />}/>
                <Route path='product' element={<Product />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='about' element={<About />}/>

      </Route>
    )
  )
  return (
  <RouterProvider  router={router} />
  )
}

export default App
