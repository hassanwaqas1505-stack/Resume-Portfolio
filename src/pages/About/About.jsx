// import React from 'react'
// import './About.css'
// import MyPic from '../../assets/MyPic.jpg'

// const About = () => {
//   return (
//     <div className='about'>
//       <h1>About Me</h1>
//       <h2>Developer, Designer,<br />  Creator, Innovator</h2>
//       <div className='left'>
//       <img src={MyPic} alt="Hassan Mughal" className='about-image' />
//       </div>
//       <div className="right">
//         <h3>
//         Hello! I'm Hassan Mughal, a passionate Full Stack developer <br /> specializing in creating innovative web solutions and user- <br /> friendly interfaces. <br />
//         My focus is on making web development faster, easier, and <br /> accessible to all developers. Currently, I'm focusing on various <br /> backend frameworks to grow as a full-stack developer and <br /> create seamless, robust web applications.
//         <br /> <br /> <br />  I'm a passionate backend developer and lifelong learner,<br />  dedicated to building scalable, secure, and high- <br />performance systems. I thrive on solving complex problems <br /> and contributing to the developer community with tools <br /> and ideas that create real impact.
//         <br /> <br /> Hassan Mughal
//         </h3>
        
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react'
import './About.css'
import MyPic from '../../assets/MyPic.jpg'

const About = () => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <h2>Developer, Designer,<br /> Creator, Innovator</h2>
      <div className='about-row'>
        <div className='left'>
          <img src={MyPic} alt="Hassan Mughal" className='about-image' />
        </div>
        <div className="right">
          <h3>
            Hello! I'm Hassan Mughal, a passionate Full Stack developer specializing in creating innovative web solutions and user-friendly interfaces.
            My focus is on making web development faster, easier, and accessible to all developers. Currently, I'm focusing on various backend frameworks to grow as a full-stack developer and create seamless, robust web applications.
          </h3>
          <h3>
            I'm a passionate backend developer and lifelong learner, dedicated to building scalable, secure, and high-performance systems. I thrive on solving complex problems and contributing to the developer community with tools and ideas that create real impact.
          </h3>
          <h3><em>Hassan Mughal</em></h3>
        </div>
      </div>
    </div>
  )
}

export default About