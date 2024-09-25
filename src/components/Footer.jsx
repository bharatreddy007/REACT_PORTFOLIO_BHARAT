import React from "react";
import "../assets/css/footer.css"; // Import the updated CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            I'm Sai Bharat Reddy, a passionate software developer with a love for 
            building applications that solve real-world problems. Whether you're 
            looking to collaborate or just want to say hello, feel free to reach out!
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/bharat_reddy007/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/sai-bharat-reddy-5446b0194/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </div>
        </div>

        <div className="footer-section back-to-top">
          <a href="#home">Back to Top</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Bharat Reddy. All rights reserved.</p>
        <p>Developed by Sai Bharat Reddy</p>
      </div>
    </footer>
  );
};

export default Footer;
