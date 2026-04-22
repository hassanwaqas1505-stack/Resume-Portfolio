import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/skills' element = {<Skills />} />
          <Route path='/projects' element = {<Projects />} />
          <Route path='/contact' element = {<Contact />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App
