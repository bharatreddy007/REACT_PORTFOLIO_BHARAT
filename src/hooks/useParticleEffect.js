// hooks/useParticleEffect.js
import { useCallback } from 'react';

const useParticleEffect = () => {
  const createParticle = useCallback((x, y, color) => {
    const particle = document.createElement('div');
    document.body.appendChild(particle);

    const size = Math.floor(Math.random() * 20 + 5);
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.borderRadius = '50%';
    particle.style.position = 'fixed';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';

    const destinationX = x + (Math.random() - 0.5) * 200;
    const destinationY = y + (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 520;
    const delay = Math.random() * 200;

    particle.animate([
      {
        transform: `translate(0, 0) rotate(0deg)`,
        opacity: 1
      },
      {
        transform: `translate(${destinationX - x}px, ${destinationY - y}px) rotate(${rotation}deg)`,
        opacity: 0
      }
    ], {
      duration: 1000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: delay
    });

    setTimeout(() => {
      document.body.removeChild(particle);
    }, 1200);
  }, []);

  const triggerParticles = useCallback((e, color = '#ffd700') => {
    const rect = e.target.getBoundingClientRect();
    for (let i = 0; i < 20; i++) {
      createParticle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        color
      );
    }
  }, [createParticle]);

  return triggerParticles;
};

export default useParticleEffect;