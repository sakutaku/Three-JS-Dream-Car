import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "../lib/useKeyboardcontrols";
import {  useGLTF } from "@react-three/drei";
import * as THREE from 'three';

const Range = () => {
    const carRef = useRef();
    const { forward, backward, left, right } = useKeyboardControls();
    const speed = 1.7;
    const rotationSpeed = 0.05;
    const { scene } = useGLTF("/Evoke.glb"); 
    
    // useFrame(() => {
    //   if (!carRef.current) return;
      
    //   if (forward) carRef.current.position.z -= speed;
    //   if (backward) carRef.current.position.z += speed;
    //   if (left) carRef.current.rotation.y += rotationSpeed;
    //   if (right) carRef.current.rotation.y -= rotationSpeed;
    // });

    useFrame(() => {
        if (!carRef.current) return;
        
        // Get current direction based on rotation
        const direction = new THREE.Vector3();
        carRef.current.getWorldDirection(direction);
        
        // Move forward or backward
        if (forward) carRef.current.position.addScaledVector(direction, speed * 0.1);
        if (backward) carRef.current.position.addScaledVector(direction, -speed * 0.1);
        
        // Rotate left or right
        if (left) carRef.current.rotation.y += rotationSpeed;
        if (right) carRef.current.rotation.y -= rotationSpeed;
      });
  
    return <primitive ref={carRef} object={scene} scale={250} position={[0, 0, 0]} />;
};

export default Range;