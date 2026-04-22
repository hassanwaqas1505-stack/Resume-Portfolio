import React from "react";
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
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>Frontend Development</h3>
          <div className="icons">
            <div><FaReact color="#61DBFB"/><p>React</p></div>
            <div><FaJs color="#F7DF1E"/><p>JavaScript</p></div>
            <div><FaHtml5 color="#E34F26"/><p>HTML5</p></div>
            <div><FaCss3Alt color="#1572B6"/><p>CSS3</p></div>
          </div>
        </div>

        <div className="skills-card">
          <h3>Backend Development</h3>
          <div className="icons">
            <div><SiNodedotjs color="#68A063"/><p>Node.js</p></div>
            <div><SiMongodb color="#47A248"/><p>MongoDB</p></div>
            <div><SiExpress color="#FFFFFF"/><p>Express</p></div>
          </div>
        </div>

        <div className="skills-card">
          <h3>Tools & Technologies</h3>
          <div className="icons">
            <div><FaCode color="#007ACC"/><p>VS Code</p></div>
            <div><SiVite color="#646CFF"/><p>Vite</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
