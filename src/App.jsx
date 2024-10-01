import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {

  useEffect(() => {
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
      });
    }

    // Cleanup event listener when the component unmounts
    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener('click', () => {
          document.body.classList.toggle('light-mode');
        });
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
