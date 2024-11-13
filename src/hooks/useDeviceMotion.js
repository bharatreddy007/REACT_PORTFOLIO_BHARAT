// hooks/useDeviceMotion.js
import { useState, useEffect } from 'react';

const useDeviceMotion = () => {
  const [motion, setMotion] = useState({
    acceleration: { x: 0, y: 0, z: 0 },
    rotationRate: { alpha: 0, beta: 0, gamma: 0 },
    orientation: { alpha: 0, beta: 0, gamma: 0 }
  });

  useEffect(() => {
    let mounted = true;

    // Check if device motion is supported
    const checkDeviceMotionSupport = async () => {
      if (typeof DeviceMotionEvent !== 'undefined' && 
          typeof DeviceMotionEvent.requestPermission === 'function') {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission !== 'granted') {
            console.log('Device motion permission not granted');
            return false;
          }
        } catch (error) {
          console.log('Error requesting device motion permission:', error);
          return false;
        }
      }
      return true;
    };

    const handleMotion = (event) => {
      if (!mounted) return;
      
      setMotion({
        acceleration: {
          x: event.accelerationIncludingGravity.x || 0,
          y: event.accelerationIncludingGravity.y || 0,
          z: event.accelerationIncludingGravity.z || 0
        },
        rotationRate: {
          alpha: event.rotationRate?.alpha || 0,
          beta: event.rotationRate?.beta || 0,
          gamma: event.rotationRate?.gamma || 0
        },
        orientation: {
          alpha: window.orientation || 0,
          beta: window.orientation || 0,
          gamma: window.orientation || 0
        }
      });
    };

    const initializeMotion = async () => {
      const isSupported = await checkDeviceMotionSupport();
      if (isSupported) {
        window.addEventListener('devicemotion', handleMotion);
      }
    };

    initializeMotion();

    return () => {
      mounted = false;
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, []);

  return motion;
};

export default useDeviceMotion;