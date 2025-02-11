import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import CarBody from "./CarBody";
// import Wheel from "./Wheel";
import { useKeyboardControls } from "../lib/useKeyboardcontrols";
import {  useGLTF } from "@react-three/drei";
// import EvokeModel from "./assets/Evoke.glb";
// import { useKeyboardControls } from "@react-three/drei";

// const Range = () => {
//     const carRef = useRef();
//     const { forward, backward, left, right } = useKeyboardControls();
//     const speed = 0.05;
//     const rotationSpeed = 0.03;
  
//   useFrame(() => {
//     if (!carRef.current) return;
    
//     if (forward) carRef.current.position.z -= speed;
//     if (backward) carRef.current.position.z += speed;
//     if (left) carRef.current.rotation.y += rotationSpeed;
//     if (right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef}>
//       <CarBody />
//       <Wheel position={[-0.6, 0.2, 0.4]} />
//       <Wheel position={[0.6, 0.2, 0.4]} />
//       <Wheel position={[-0.6, 0.2, -0.4]} />
//       <Wheel position={[0.6, 0.2, -0.4]} />
//     </group>
//   );
// };

// export default Range;

const Range = () => {
    const carRef = useRef();
    const { forward, backward, left, right } = useKeyboardControls();
    const speed = 0.2;
    const rotationSpeed = 0.05;
    const { scene } = useGLTF("/Evoke.glb"); 
    
    useFrame(() => {
      if (!carRef.current) return;
      
      if (forward) carRef.current.position.z -= speed;
      if (backward) carRef.current.position.z += speed;
      if (left) carRef.current.rotation.y += rotationSpeed;
      if (right) carRef.current.rotation.y -= rotationSpeed;
    });
  
    return <primitive ref={carRef} object={scene} scale={250} position={[0, 0, 0]} />;
};

export default Range;