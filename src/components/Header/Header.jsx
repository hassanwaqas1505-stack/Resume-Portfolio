import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="stars"></div>
  <div className="planets"></div>
  <div className="comets"></div>
  <div className="sparkles"></div>
  <div className="gradient-overlay"></div>
  
      <p>Welcome to my universe</p>
      <h1>Hello <br />I'm <span>Hassan Mughal</span></h1>
      <div className='box'>
      <h4>Full-Stack and Mern Stack Developer</h4>
      </div>
      <h2>React.Js Developer | Competitive Programmer | Crafting <br /> frameworks and coding the future.</h2>
      <a href="https://github.com/hassanwaqas1505-stack" target="_blank" rel="noreferrer" className="button1">Github</a>
      <a href="https://www.linkedin.com/in/hassan-mughal-552610397" target="_blank" rel="noreferrer" className="button2">LinkedIn</a>
    </div>
  )
}

export default Header
