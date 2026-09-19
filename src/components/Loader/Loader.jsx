import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">

        <div className="loader-rings">
          <span className="ring ring-one"></span>
          <span className="ring ring-two"></span>
          <span className="ring ring-three"></span>

          <div className="loader-logo">
            <h2>HM</h2>
          </div>
        </div>

        <div className="loader-title">
          Hassan Mughal
        </div>

        <div className="loader-subtitle">
          Full Stack Developer
        </div>

        <div className="loader-bar">
          <span></span>
        </div>

        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  )
}

export default Loader
