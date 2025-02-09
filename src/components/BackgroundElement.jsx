import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

function GblElement() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}react_logo.glb`);
  const gblElementRef = useRef();
  const [movement, setMovement] = useState({ x: 0, y: 0, rotX: 0, rotY: 0 });

  // Smooth animation for rotation and position
  const animatedProps = useSpring({
    position: [movement.x, movement.y, 0],
    rotation: [movement.rotX, movement.rotY, 0],
    config: { mass: 1, tension: 100, friction: 20 }, // Smooth animation settings
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = (event.clientX / innerWidth) * 2 - 1;
      const yRatio = (event.clientY / innerHeight) * 2 - 1;

      setMovement({
        x: xRatio * 0.5, // Moves within ±0.5 range
        y: -yRatio * 0.5, // Moves within ±0.5 range
        rotX: yRatio * 0.3, // Rotation within ±0.3 range
        rotY: -xRatio * 0.3, // Rotation within ±0.3 range
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <a.primitive ref={gblElementRef} object={scene} scale={0.7} {...animatedProps} />;
}

export default function Background3d() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <GblElement />
    </Canvas>
  );
}
