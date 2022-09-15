import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Users from './components/Blogs/Users'
import Login from './components/Login/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/users' element={<Users/>} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App