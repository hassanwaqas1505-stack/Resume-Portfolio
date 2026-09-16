import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'
import MyPic from '../../assets/MyPic.jpg'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      defaults: { ease: 'power2.out' }
    })

    tl.fromTo(leftRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1.3 }
    )
    .fromTo(rightRef.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1.3 }, '-=0.9'
    )

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill()
    }
  }, [])
  return (
    <div className='about' ref={sectionRef}>
      <h1>About Me</h1>
      <h2>Developer, Designer,<br /> Creator, Innovator</h2>
      <div className='about-row'>
        <div className='left' ref={leftRef}>
          <img src={MyPic} alt="Hassan Mughal" className='about-image' />
        </div>
        <div className="right" ref={rightRef}>
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