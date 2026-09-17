// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import './Header.css'

// const Header = () => {
//   const pRef = useRef(null)
//   const h1Ref = useRef(null)
//   const boxRef = useRef(null)
//   const h2Ref = useRef(null)
//   const btn1Ref = useRef(null)
//   const btn2Ref = useRef(null)
//   const planetRef = useRef(null)

//  useEffect(() => {
//     const tl = gsap.timeline({ 
//       defaults: { ease: 'power2.out' },
//       onComplete: () => {
//         gsap.set([btn1Ref.current, btn2Ref.current], { clearProps: 'transform' })
//       }
//     })

//     tl.fromTo(pRef.current, 
//       { opacity: 0, y: -20 }, 
//       { opacity: 1, y: 0, duration: 1 }
//     )
//     .fromTo(h1Ref.current, 
//       { opacity: 0, y: 40 }, 
//       { opacity: 1, y: 0, duration: 1.2 }, '-=0.5'
//     )
//     .fromTo(boxRef.current, 
//       { opacity: 0, scale: 0.8 }, 
//       { opacity: 1, scale: 1, duration: 1 }, '-=0.6'
//     )
//     .fromTo(h2Ref.current, 
//       { opacity: 0, y: 20 }, 
//       { opacity: 1, y: 0, duration: 1 }, '-=0.5'
//     )
//     .fromTo(btn1Ref.current, 
//       { opacity: 0, y: 20 }, 
//       { opacity: 1, y: 0, duration: 0.8 }, '-=0.4'
//     )
//     .fromTo(btn2Ref.current, 
//       { opacity: 0, y: 20 }, 
//       { opacity: 1, y: 0, duration: 0.8 }, '-=0.5'
//     )
//     .fromTo(planetRef.current,
//       { opacity: 0, scale: 0.5 },
//       { opacity: 1, scale: 1, duration: 1.5 }, '-=1.8'
//     )
//   }, [])

//   return (
//     <div className='header'>
//       <div className="stars"></div>
//       <div className="planets" ref={planetRef}></div>
//       <div className="comets"></div>
//       <div className="sparkles"></div>
//       <div className="gradient-overlay"></div>

//       <p ref={pRef}>Welcome to my universe</p>
//       <h1 ref={h1Ref}>Hello <br />I'm <span>Hassan Mughal</span></h1>
//       <div className='box' ref={boxRef}>
//         <h4>Full-Stack and Mern Stack Developer</h4>
//       </div>
//       <h2 ref={h2Ref}>React.Js Developer | Competitive Programmer | Crafting <br /> frameworks and coding the future.</h2>
//       <a href="https://github.com/hassanwaqas1505-stack" target="_blank" rel="noreferrer" className="button1" ref={btn1Ref}>Github</a>
//       <a href="https://www.linkedin.com/in/hassan-mughal-552610397" target="_blank" rel="noreferrer" className="button2" ref={btn2Ref}>LinkedIn</a>
//     </div>
//   )
// }

// export default Header


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.css";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const planetRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        badgeRef.current,
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current,
        buttonsRef.current
      ];

      gsap.set(elements, {
        opacity: 0,
        y: 35
      });

      gsap.set(planetRef.current, {
        opacity: 0,
        scale: 0.4,
        x: 80,
        rotation: -30
      });

      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.5
      });

      const name = titleRef.current.querySelector(".name");

      if (name && !name.querySelector(".letter")) {
        const text = name.textContent;

        name.innerHTML = text
          .split("")
          .map((letter) => {
            if (letter === " ") {
              return '<span class="letter">&nbsp;</span>';
            }

            return `<span class="letter">${letter}</span>`;
          })
          .join("");
      }

      const letters = name
        ? name.querySelectorAll(".letter")
        : [];

      const tl = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out"
        },
        onStart: () => {
          gsap.set(elements, {
            opacity: 0,
            y: 35
          });

          gsap.set(planetRef.current, {
            opacity: 0,
            scale: 0.4,
            x: 80,
            rotation: -30
          });

          gsap.set(glowRef.current, {
            opacity: 0,
            scale: 0.5
          });
        }
      });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
          },
          "-=0.35"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8
          },
          "-=0.45"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8
          },
          "-=0.4"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8
          },
          "-=0.4"
        )
        .to(
          planetRef.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            rotation: 0,
            duration: 1.6,
            ease: "elastic.out(1, 0.55)"
          },
          "-=1.3"
        )
        .to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out"
          },
          "-=1.5"
        );

      const playAnimation = () => {
        tl.restart();

        if (letters.length) {
          gsap.fromTo(
            letters,
            {
              opacity: 0,
              y: 25,
              rotateX: -70
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              stagger: 0.045,
              ease: "back.out(1.7)",
              delay: 0.65
            }
          );
        }
      };

      const resetAnimation = () => {
        tl.pause(0);

        gsap.set(elements, {
          opacity: 0,
          y: 35
        });

        gsap.set(planetRef.current, {
          opacity: 0,
          scale: 0.4,
          x: 80,
          rotation: -30
        });

        gsap.set(glowRef.current, {
          opacity: 0,
          scale: 0.5
        });

        if (letters.length) {
          gsap.set(letters, {
            opacity: 0,
            y: 25,
            rotateX: -70
          });
        }
      };

      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: playAnimation,
        onEnterBack: playAnimation,
        onLeave: resetAnimation,
        onLeaveBack: resetAnimation
      });

      gsap.to(planetRef.current, {
        y: -18,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(glowRef.current, {
        scale: 1.12,
        opacity: 0.65,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(planetRef.current, {
          x: x * 25,
          y: y * 20,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto"
        });

        gsap.to(glowRef.current, {
          x: x * 15,
          y: y * 12,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="stars stars-one"></div>
      <div className="stars stars-two"></div>
      <div className="stars stars-three"></div>

      <div className="comets"></div>
      <div className="sparkles"></div>

      <div className="planet-glow" ref={glowRef}></div>

      <div className="planets" ref={planetRef}></div>

      <div className="gradient-overlay"></div>

      <div className="header-content">
        <p className="welcome-badge" ref={badgeRef}>
          <span className="status-dot"></span>
          Welcome to my universe
        </p>

        <h1 className="main-title" ref={titleRef}>
          Hello
          <br />
          I'm <span className="name">Hassan Mughal</span>
        </h1>

        <div className="box" ref={subtitleRef}>
          <h4>Full-Stack Website Developer</h4>
        </div>

        <h2 className="description" ref={descriptionRef}>
          React.Js Developer | Competitive Programmer | Crafting
          <br />
          frameworks and coding the future.
        </h2>

        <div className="header-buttons" ref={buttonsRef}>
          <a
            href="https://github.com/hassanwaqas1505-stack"
            target="_blank"
            rel="noreferrer"
            className="button1"
          >
            <span>Github</span>
            <span className="arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hassan-mughal-552610397"
            target="_blank"
            rel="noreferrer"
            className="button2"
          >
            <span>LinkedIn</span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;