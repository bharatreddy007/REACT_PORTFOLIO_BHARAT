import React, { useRef, useEffect } from "react";
import aboutImg from "../assets/images/bharat.jpeg";
import "../assets/css/about.css";  // Import the CSS

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const info = [
    { text: "Years of Experience", count: "01" },
    { text: "Projects Delivered", count: "04" },
    { text: "Organizations Contributed", count: "03" },
  ];

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-wrapper">
        {/* Image Section */}
        <div className="about-image">
          <img 
            src={aboutImg} 
            alt="Sai Bharat Reddy" 
            className="about-portrait"
            srcSet={`
              ${aboutImg} 600w, 
              ${aboutImg} 1200w, 
              ${aboutImg} 1800w
            `}
            sizes="(max-width: 600px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
          />
        </div>

        {/* Information Section */}
        <div className="about-details">
          <h2 className="about-title">Who <span>I Am</span></h2>
          <p className="about-description">
            I am Sai Bharat Reddy, a dedicated Software Developer with an array of skills spanning multiple programming languages like C, C++, Java, Python, and SQL. I have successfully completed numerous projects, including a Farm Management System designed to aid farmers and an Automated Railway Crossing System focused on enhancing safety. I hold a Bachelor of Engineering in Computer Science from Nagarjuna College of Engineering, where I honed my skills further.
          </p>
          <div className="about-stats">
            {info.map((item, index) => (
              <div key={index} className="stat-item">
                <h3>{item.count}<span>+</span></h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <a href="./src/assets/BharatReddy.pdf" download>
            <button className="download-btn">Grab My CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
