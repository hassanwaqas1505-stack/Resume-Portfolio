// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Skills.css";
// import {
//   FaReact,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaCode,
//   FaBootstrap
// } from "react-icons/fa";
// import {
//   SiNodedotjs,
//   SiMongodb,
//   SiExpress,
//   SiVite,
//   SiTailwindcss
// } from "react-icons/si";

// gsap.registerPlugin(ScrollTrigger);

// const Skills = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray(".skills-card");

//       gsap.set(cards, { transition: "none", force3D: true });

//       gsap.fromTo(
//         cards,
//         {
//           autoAlpha: 0,
//           y: 350
//         },
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1.2,
//           stagger: 0.25,
//           ease: "power3.out",
//           overwrite: "auto",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none none"
//           },
//           onComplete: () => {
//             gsap.set(cards, { clearProps: "transform,transition" });
//           }
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="skills-section" id="skills" ref={sectionRef}>
//       <h2>My Skills</h2>
//       <div className="skills-grid">
//         <div className="skills-card">
//           <h3>Frontend Development</h3>
//           <div className="icons">
//             <div>
//               <FaReact color="#61DBFB" />
//               <p>React</p>
//             </div>
//             <div>
//               <FaJs color="#F7DF1E" />
//               <p>JavaScript</p>
//             </div>
//             <div>
//               <FaHtml5 color="#E34F26" />
//               <p>HTML5</p>
//             </div>
//             <div>
//               <FaCss3Alt color="#1572B6" />
//               <p>CSS3</p>
//             </div>
//             <div>
//               <SiTailwindcss color="#38BDF8" />
//               <p>Tailwind CSS</p>
//             </div>
//           </div>
//         </div>
//         <div className="skills-card">
//           <h3>Backend Development</h3>
//           <div className="icons">
//             <div>
//               <SiNodedotjs color="#68A063" />
//               <p>Node.js</p>
//             </div>
//             <div>
//               <SiMongodb color="#47A248" />
//               <p>MongoDB</p>
//             </div>
//             <div>
//               <SiExpress color="#FFFFFF" />
//               <p>Express</p>
//             </div>
//           </div>
//         </div>
//         <div className="skills-card">
//           <h3>Tools & Technologies</h3>
//           <div className="icons">
//             <div>
//               <FaCode color="#007ACC" />
//               <p>VS Code</p>
//             </div>
//             <div>
//               <SiVite color="#646CFF" />
//               <p>Vite</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Skills;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCode
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiVite,
  SiTailwindcss
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const ctx = gsap.context(() => {
      const title = sectionRef.current.querySelector(".skills-title");
      const cards = gsap.utils.toArray(".skills-card");
      const skillItems = gsap.utils.toArray(".skill-item");

      gsap.set(title, { opacity: 0, y: 70 });
      gsap.set(cards, { opacity: 0, scale: 0.85, y: 80 });
      gsap.set(skillItems, { opacity: 0, y: 25, scale: 0.7 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power4.out"
      })
        .to(
          cards,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "back.out(1.5)"
          },
          "-=0.45"
        )
        .to(
          skillItems,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.06,
            ease: "back.out(1.8)"
          },
          "-=0.5"
        );

      if (supportsHover) {
        const cardCleanups = [];

        cards.forEach((card) => {
          const glow = card.querySelector(".card-glow");

          const onEnter = () => {
            gsap.to(card, { y: -6, scale: 1.025, duration: 0.35, ease: "power2.out" });
            gsap.to(glow, { opacity: 1, duration: 0.3 });
          };
          const onLeave = () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(glow, { opacity: 0, duration: 0.3 });
          };

          card.addEventListener("mouseenter", onEnter);
          card.addEventListener("mouseleave", onLeave);
          cardCleanups.push(() => {
            card.removeEventListener("mouseenter", onEnter);
            card.removeEventListener("mouseleave", onLeave);
          });
        });

        skillItems.forEach((item) => {
          const icon = item.querySelector("svg");

          const onEnter = () => {
            gsap.to(item, { y: -7, scale: 1.1, duration: 0.3, ease: "power2.out" });
            gsap.to(icon, { rotate: 6, scale: 1.1, duration: 0.3, ease: "back.out(2)" });
          };
          const onLeave = () => {
            gsap.to(item, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(icon, { rotate: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          };

          item.addEventListener("mouseenter", onEnter);
          item.addEventListener("mouseleave", onLeave);
          cardCleanups.push(() => {
            item.removeEventListener("mouseenter", onEnter);
            item.removeEventListener("mouseleave", onLeave);
          });
        });

        sectionRef.current._skillCleanups = cardCleanups;
      }
    }, sectionRef);

    return () => {
      if (sectionRef.current && sectionRef.current._skillCleanups) {
        sectionRef.current._skillCleanups.forEach((cleanup) => cleanup());
      }
      ctx.revert();
    };
  }, []);

  return (
    <div className="skills-section" id="skills" ref={sectionRef}>
      <div className="skills-background"></div>

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">

        <div className="skills-card">
          <div className="card-glow"></div>

          <h3>Frontend Development</h3>

          <div className="icons">
            <div className="skill-item">
              <FaReact color="#61DBFB" />
              <p>React</p>
            </div>

            <div className="skill-item">
              <FaJs color="#F7DF1E" />
              <p>JavaScript</p>
            </div>

            <div className="skill-item">
              <FaHtml5 color="#E34F26" />
              <p>HTML5</p>
            </div>

            <div className="skill-item">
              <FaCss3Alt color="#1572B6" />
              <p>CSS3</p>
            </div>

            <div className="skill-item">
              <SiTailwindcss color="#38BDF8" />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="card-glow"></div>

          <h3>Backend Development</h3>

          <div className="icons">
            <div className="skill-item">
              <SiNodedotjs color="#68A063" />
              <p>Node.js</p>
            </div>

            <div className="skill-item">
              <SiMongodb color="#47A248" />
              <p>MongoDB</p>
            </div>

            <div className="skill-item">
              <SiExpress color="#FFFFFF" />
              <p>Express</p>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="card-glow"></div>

          <h3>Tools & Technologies</h3>

          <div className="icons">
            <div className="skill-item">
              <FaCode color="#007ACC" />
              <p>VS Code</p>
            </div>

            <div className="skill-item">
              <SiVite color="#646CFF" />
              <p>Vite</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;