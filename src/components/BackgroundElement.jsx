import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

function GblElement() {
  const { scene } = useGLTF('/react_logo.glb');
  const gblElementRef = useRef();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const animatedRotation = useSpring({
    rotation: [rotation.x, rotation.y, 0], 
    config: { mass: 1, tension: 100, friction: 20 }, 
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const xRotation = ((event.clientY / innerHeight) * 2 - 1) * 0.3; // Max tilt: ±0.3
      const yRotation = -((event.clientX / innerWidth) * 2 - 1) * 0.3; // Max tilt: ±0.3
      setRotation({ x: xRotation, y: yRotation });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <a.primitive ref={gblElementRef} object={scene} scale={0.7} rotation={animatedRotation.rotation} />;
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
