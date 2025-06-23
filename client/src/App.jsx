import React from 'react'
import { Route, Routes } from 'react-router-dom'
// PAGE IMPORTS
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import GreenHydrogen from './components/greenHydrogen/GreenHydrogen'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/greenHydrogen' element={<GreenHydrogen />}></Route>
    </Routes>
  )
}

export default App
