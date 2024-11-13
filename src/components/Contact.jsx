// components/Contact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/css/contact.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    status: "idle", // idle, submitting, success, error
    message: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length >= 2 ? "" : "Name must be at least 2 characters";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) 
          ? "" 
          : "Please enter a valid email";
      case "message":
        return value.length >= 10 
          ? "" 
          : "Message must be at least 10 characters";
      default:
        return "";
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ status: "submitting", message: "" });

    // Validate all fields
    const errors = Object.keys(formState).map(key => 
      validateField(key, formState[key])
    ).filter(error => error);

    if (errors.length > 0) {
      setFormStatus({
        status: "error",
        message: "Please fix the errors before submitting"
      });
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({
        status: "success",
        message: "Message sent successfully!"
      });
      setFormState({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } catch (error) {
      setFormStatus({
        status: "error",
        message: "Failed to send message. Please try again."
      });
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 8px rgba(0,255,255,0.3)" },
    error: { x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }
  };

  const contactInfo = [
    { logo: "mail", text: "saibharatreddy007@gmail.com" },
    { logo: "logo-whatsapp", text: "+1-5515541024" },
    { logo: "location", text: "New York, USA" },
  ];

  return (
    <section id="contact-section">
      <div className="contact-header">
        <h2>Let's <span>Connect</span></h2>
        <p>Feel free to drop me a message!</p>
      </div>

      <div className="contact-content">
        <div className="form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {Object.keys(formState).map((field) => (
              <motion.div 
                key={field}
                className="input-wrapper"
                variants={inputVariants}
                whileFocus="focus"
                animate={
                  touched[field] && validateField(field, formState[field])
                    ? "error"
                    : "idle"
                }
              >
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formState[field]}
                  onChange={handleChange}
                  onBlur={() => handleBlur(field)}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className={
                    touched[field] && validateField(field, formState[field])
                      ? "error"
                      : ""
                  }
                />
                <AnimatePresence>
                  {touched[field] && validateField(field, formState[field]) && (
                    <motion.span
                      className="error-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {validateField(field, formState[field])}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className={`btn-send ${formStatus.status}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={formStatus.status === "submitting"}
            >
              {formStatus.status === "submitting" ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ⟳
                </motion.span>
              ) : (
                "Send Message"
              )}
            </motion.button>

            <AnimatePresence>
              {formStatus.message && (
                <motion.div
                  className={`form-status ${formStatus.status}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        <div className="contact-details">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-wrapper">
                <ion-icon name={info.logo}></ion-icon>
              </div>
              <p>{info.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;