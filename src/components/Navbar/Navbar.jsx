import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const isInitialLoad = useRef(true);
  const isClicking = useRef(false); // 🔥 NEW LOCK

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

  
    setTimeout(() => {
      isInitialLoad.current = false;
    }, 200);

    const handleScroll = () => {
      if (isInitialLoad.current || isClicking.current) return; 

      const scrollPos = window.scrollY + 120;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setMenu(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();

    isClicking.current = true; 
    setMenu(id);

    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isClicking.current = false;
    }, 600); 
  };

  return (
    <div className="navbar">
      <ul>

        <li className={menu === "home" ? "active" : ""}>
          <a href="#home" onClick={(e) => handleClick(e, "home")}>
            <FaHome /> Home
          </a>
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <a href="#about" onClick={(e) => handleClick(e, "about")}>
            <FaUser /> About
          </a>
        </li>

        <li className={menu === "skills" ? "active" : ""}>
          <a href="#skills" onClick={(e) => handleClick(e, "skills")}>
            <FaCode /> Skills
          </a>
        </li>

        <li className={menu === "projects" ? "active" : ""}>
          <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
            <FaProjectDiagram /> Projects
          </a>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
            <FaEnvelope /> Contact
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
