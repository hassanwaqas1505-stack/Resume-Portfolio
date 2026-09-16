import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Header.css'

const Header = () => {
  const pRef = useRef(null)
  const h1Ref = useRef(null)
  const boxRef = useRef(null)
  const h2Ref = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)
  const planetRef = useRef(null)

 useEffect(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        gsap.set([btn1Ref.current, btn2Ref.current], { clearProps: 'transform' })
      }
    })

    tl.fromTo(pRef.current, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(h1Ref.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2 }, '-=0.5'
    )
    .fromTo(boxRef.current, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1 }, '-=0.6'
    )
    .fromTo(h2Ref.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, '-=0.5'
    )
    .fromTo(btn1Ref.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 }, '-=0.4'
    )
    .fromTo(btn2Ref.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 }, '-=0.5'
    )
    .fromTo(planetRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5 }, '-=1.8'
    )
  }, [])

  return (
    <div className='header'>
      <div className="stars"></div>
      <div className="planets" ref={planetRef}></div>
      <div className="comets"></div>
      <div className="sparkles"></div>
      <div className="gradient-overlay"></div>

      <p ref={pRef}>Welcome to my universe</p>
      <h1 ref={h1Ref}>Hello <br />I'm <span>Hassan Mughal</span></h1>
      <div className='box' ref={boxRef}>
        <h4>Full-Stack and Mern Stack Developer</h4>
      </div>
      <h2 ref={h2Ref}>React.Js Developer | Competitive Programmer | Crafting <br /> frameworks and coding the future.</h2>
      <a href="https://github.com/hassanwaqas1505-stack" target="_blank" rel="noreferrer" className="button1" ref={btn1Ref}>Github</a>
      <a href="https://www.linkedin.com/in/hassan-mughal-552610397" target="_blank" rel="noreferrer" className="button2" ref={btn2Ref}>LinkedIn</a>
    </div>
  )
}

export default Header