import React, { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import "./App.css"; // Ensure to add custom CSS for the loader

// Function to simulate a 1-second delay for lazy loading
const delayFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const lazyWithDelay = (factory, delay) =>
  lazy(() => delayFor(delay).then(() => factory()));

// Lazy loading components with a 1-second delay
const Hero = lazyWithDelay(() => import("./components/Hero"), 1000);
const About = lazyWithDelay(() => import("./components/About"), 1000);
const Skills = lazyWithDelay(() => import("./components/Skills"), 1000);
const Project = lazyWithDelay(() => import("./components/Project"), 1000);
const Contact = lazyWithDelay(() => import("./components/Contact"), 1000);

const App = () => {
  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
      });
    }

    // Cleanup event listener when the component unmounts
    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener("click", () => {
          document.body.classList.toggle("light-mode");
        });
      }
    };
  }, []);

  // Custom loading animation using motion.div
  const loadingAnimation = (
    <motion.div
      className="loader"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, repeat: Infinity }}
    >
      {/* This can be a custom loader (e.g., a spinner or logo animation) */}
      <div className="spinner"></div>
    </motion.div>
  );

  return (
    <div>
      <Navbar />
      {/* Suspense fallback with custom loader */}
      <Suspense fallback={loadingAnimation}>
        {/* Animating each component with framer-motion */}
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Project />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Contact />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default App;
