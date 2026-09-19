// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import './About.css'
// import MyPic from '../../assets/MyPic.jpg'

// gsap.registerPlugin(ScrollTrigger)

// const About = () => {
//   const sectionRef = useRef(null)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top 75%',
//         toggleActions: 'play none none none'
//       },
//       defaults: { ease: 'power2.out' }
//     })

//     tl.fromTo(leftRef.current,
//       { opacity: 0, x: -200 },
//       { opacity: 1, x: 0, duration: 1.3 }
//     )
//     .fromTo(rightRef.current,
//       { opacity: 0, x: 200 },
//       { opacity: 1, x: 0, duration: 1.3 }, '-=0.9'
//     )

//     return () => {
//       tl.scrollTrigger && tl.scrollTrigger.kill()
//     }
//   }, [])
//   return (
//     <div className='about' ref={sectionRef}>
//       <h1>About Me</h1>
//       <h2>Developer, Designer,<br /> Creator, Innovator</h2>
//       <div className='about-row'>
//         <div className='left' ref={leftRef}>
//           <img src={MyPic} alt="Hassan Mughal" className='about-image' />
//         </div>
//         <div className="right" ref={rightRef}>
//           <h3>
//             Hello! I'm Hassan Mughal, a passionate Full Stack developer specializing in creating innovative web solutions and user-friendly interfaces.
//             My focus is on making web development faster, easier, and accessible to all developers. Currently, I'm focusing on various backend frameworks to grow as a full-stack developer and create seamless, robust web applications.
//           </h3>
//           <h3>
//             I'm a passionate backend developer and lifelong learner, dedicated to building scalable, secure, and high-performance systems. I thrive on solving complex problems and contributing to the developer community with tools and ideas that create real impact.
//           </h3>
//           <h3><em>Hassan Mughal</em></h3>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About



import React, { useEffect, useRef } from 'react'
import './About.css'
import Mypic from '../../assets/Mypic.jpeg'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate')
          observer.unobserve(section)
        }
      },
      {
        threshold: 0.2
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" ref={sectionRef}>
      <div className="about-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="light-line line-1"></div>
        <div className="light-line line-2"></div>

        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
        <span className="star star-6"></span>
        <span className="star star-7"></span>
        <span className="star star-8"></span>
      </div>

      <div className="about-header">
        <h1>About Me</h1>

        <h2>
          Developer, Designer,
          <br />
          Creator, Innovator
        </h2>
      </div>

      <div className="about-row">

        <div className="right">
          <h3>
            Hello! I'm Hassan Mughal, a passionate Full Stack developer
            specializing in creating innovative web solutions and
            user-friendly interfaces. My focus is on making web development
            faster, easier, and accessible to all developers. Currently, I'm
            focusing on various backend frameworks to grow as a full-stack
            developer and create seamless, robust web applications.
          </h3>

          <h3>
            I'm a passionate backend developer and lifelong learner, dedicated
            to building scalable, secure, and high-performance systems. I
            thrive on solving complex problems and contributing to the
            developer community with tools and ideas that create real impact.
          </h3>

          <h3 className="signature">
            <em>Hassan Mughal</em>
          </h3>
        </div>

        <div className="left">
          <div className="image-wrapper">
            <img
              src={Mypic}
              alt="Hassan Mughal"
              className="about-image"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About