import React, { useRef, useEffect } from "react";
import "../assets/css/skills.css"; // Ensure the correct CSS file is imported

const Skillset = () => {
  const skillsRef = useRef(null);

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
      { threshold: 0.5 } // Trigger when 10% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillData = [
    {
      icon: "code-slash-outline",
      proficiency: "C Programming",
      percentage: 85,
    },
    {
      icon: "logo-codepen-outline",
      proficiency: "C++ Programming",
      percentage: 80,
    },
    {
      icon: "logo-java-outline",
      proficiency: "Java",
      percentage: 75,
    },
    {
      icon: "logo-python",
      proficiency: "Python",
      percentage: 85,
    },
    {
      icon: "server",
      proficiency: "SQL Database",
      percentage: 70,
    },
    {
      icon: "logo-html5",
      proficiency: "HTML",
      percentage: 90,
    },
    {
      icon: "logo-css3",
      proficiency: "CSS",
      percentage: 88,
    },
    {
      icon: "logo-javascript",
      proficiency: "JavaScript",
      percentage: 80,
    },
  ];

  return (
    <section id="skills-section" ref={skillsRef} className="skills-section">
      <div className="skills-wrapper">
        <h3>
          Key <span>Competencies</span>
        </h3>
        <p>Technical Expertise</p>
        <div className="skills-grid">
          {skillData?.map((item, index) => (
            <div key={index} className="skill-box">
              <div
                className="progress-circle"
                style={{
                  background: `conic-gradient(rgb(8, 145, 170) ${item.percentage}%, #ddd ${item.percentage}%)`,
                }}
              >
                <div className="icon-container">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
              </div>
              <p className="skill-text">{item.proficiency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
