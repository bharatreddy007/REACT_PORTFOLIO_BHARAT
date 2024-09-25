import React from "react";
import hero from "../assets/images/bharat.jpeg";
import "../assets/css/hero.css";

const Hero = () => {
  const socialMediaLinks = [
    { icon: "logo-instagram", link: "https://www.instagram.com/bharat_reddy007/" },
    { icon: "logo-facebook", link: "#" },
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/sai-bharat-reddy-5446b0194/" },
    { icon: "logo-twitter", link: "#" },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__image-wrapper">
          <img src={hero} alt="Sai Bharat Reddy" className="hero__image" />
        </div>
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__greeting">Hey there!</span>
            <br />
            I'm <span className="hero__name">Sai Bharat Reddy</span>
          </h1>
          <p className="hero__description">A Passionate Software Developer</p>
          <button className="hero__button">Reach Out</button>
          <div className="hero__social-media">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon"
              >
                <ion-icon name={social.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
