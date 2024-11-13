import React, { useEffect, useState } from "react";
import hero from "../assets/images/bharat.jpeg";
import "../assets/css/hero.css";
import { motion } from "framer-motion";
import useDeviceMotion from "../hooks/useDeviceMotion";

const Hero = () => {
  const socialMediaLinks = [
    { icon: "logo-instagram", link: "https://www.instagram.com/bharat_reddy007/" },
    { icon: "logo-facebook", link: "#" },
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/sai-bharat-reddy-5446b0194/" },
    { icon: "logo-twitter", link: "#" },
  ];
  const [scrollY, setScrollY] = useState(0);
 
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const deviceMotion = useDeviceMotion();
  const [windEffect, setWindEffect] = useState({ x: 0, opacity: 1 });

  useEffect(() => {
    // Calculate wind effect based on device acceleration
    const calculateWindEffect = () => {
      const accelerationX = deviceMotion.acceleration.x;
      const maxTilt = 20; // Maximum tilt angle
      const tiltX = Math.min(Math.max((accelerationX * 2), -maxTilt), maxTilt);
      
      // Calculate opacity for windward effect
      const opacity = Math.max(0.7, 1 - Math.abs(accelerationX / 10));

      setWindEffect({
        x: tiltX,
        opacity: opacity
      });
    };

    calculateWindEffect();
  }, [deviceMotion]);

  return (
    <section id="home" className="hero" style={{
      backgroundPosition: `center ${scrollY * 0.5}px`
    }}>
      <motion.div className="hero__content" animate={{
          rotateY: windEffect.x,
          opacity: windEffect.opacity
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}>
        <div className="hero__image-wrapper" style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}>
          <motion.img 
            src={hero} 
            alt="Sai Bharat Reddy" 
            className="hero__image"
            animate={{
              rotateY: windEffect.x * 0.5, // Reduced effect on image
              scale: 1 - Math.abs(windEffect.x / 200) // Subtle scale effect
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            srcSet={`
              ${hero} 600w, 
              ${hero} 1200w, 
              ${hero} 1800w
            `}
            sizes="(max-width: 600px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
          />
        </div>
        <motion.div className="hero__text" animate={{
            x: windEffect.x * 0.3, // Text moves slightly with tilt
            opacity: windEffect.opacity
          }}>
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
        </motion.div>
      </motion.div>

      {/* Wind Effect Overlay */}
      <motion.div
        className="wind-effect"
        animate={{
          opacity: 1 - windEffect.opacity,
          x: `${windEffect.x}%`
        }}
        transition={{
          type: "spring",
          stiffness: 100
        }}
      />
    </section>
  );
};

export default Hero;
