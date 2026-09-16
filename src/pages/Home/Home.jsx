import React, { useEffect } from "react";
import Header from '../../components/Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  return (  
    <div>
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projecs">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
