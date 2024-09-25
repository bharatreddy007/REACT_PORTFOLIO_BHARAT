import React from "react";
import "../assets/css/contact.css";  // Updated CSS path

const Contact = () => {
  const contactInfo = [
    { logo: "mail", text: "saibharatreddy007@gmail.com" },
    { logo: "logo-whatsapp", text: "+1-5515541024" },
    {
      logo: "location",
      text: "New York, USA",
    },
  ];

  return (
    <section id="contact-section">
      <div className="contact-header">
        <h2>
          Let's <span>Connect</span>
        </h2>
        <p>Feel free to drop me a message!</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="form-wrapper">
          <form className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn-send">Submit</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-details">
          {contactInfo.map((info, i) => (
            <div key={i} className="contact-item">
              <div className="icon-wrapper">
                <ion-icon name={info.logo}></ion-icon>
              </div>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
