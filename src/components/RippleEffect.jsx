// components/RippleEffect.jsx
import React, { useState, useLayoutEffect } from 'react';
import '../assets/css/ripple.css';

const RippleEffect = ({ children, color = 'rgba(255, 255, 255, 0.3)' }) => {
  const [ripples, setRipples] = useState([]);

  useLayoutEffect(() => {
    const cleanup = ripples.map((ripple) => ripple.key);
    const timer = setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => !cleanup.includes(ripple.key))
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [ripples]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: Date.now(),
        size: diameter,
        x: event.clientX - rect.left - radius,
        y: event.clientY - rect.top - radius,
      },
    ]);
  };

  return (
    <div className="ripple-container" onClick={createRipple}>
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
            background: color,
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default RippleEffect;