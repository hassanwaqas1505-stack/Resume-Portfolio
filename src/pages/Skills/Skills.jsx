import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaBootstrap
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiVite,
  SiTailwindcss
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".skills-card");

      gsap.set(cards, { transition: "none", force3D: true });

      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 350
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            gsap.set(cards, { clearProps: "transform,transition" });
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="skills-section" id="skills" ref={sectionRef}>
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>Frontend Development</h3>
          <div className="icons">
            <div>
              <FaReact color="#61DBFB" />
              <p>React</p>
            </div>
            <div>
              <FaJs color="#F7DF1E" />
              <p>JavaScript</p>
            </div>
            <div>
              <FaHtml5 color="#E34F26" />
              <p>HTML5</p>
            </div>
            <div>
              <FaCss3Alt color="#1572B6" />
              <p>CSS3</p>
            </div>
            <div>
              <SiTailwindcss color="#38BDF8" />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Backend Development</h3>
          <div className="icons">
            <div>
              <SiNodedotjs color="#68A063" />
              <p>Node.js</p>
            </div>
            <div>
              <SiMongodb color="#47A248" />
              <p>MongoDB</p>
            </div>
            <div>
              <SiExpress color="#FFFFFF" />
              <p>Express</p>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Tools & Technologies</h3>
          <div className="icons">
            <div>
              <FaCode color="#007ACC" />
              <p>VS Code</p>
            </div>
            <div>
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