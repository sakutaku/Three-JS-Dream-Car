import {
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { Environment } from "@react-three/drei";
import Dubai from "./assets/Dubaii.jpg";
import Range from "./components/Range";
// import { MeshStandardMaterial } from "three";

const App = () => {
  const dirLight = useRef(null);
  useHelper(dirLight, DirectionalLightHelper, 2, "FFD65A");

  return (
    <>
    <Environment background files={Dubai} />
    <ambientLight intensity={0.8} />
    <directionalLight position={[2, 5, 2]} intensity={1} />
    <Range />
    <OrbitControls />
    </>
  )
};

export default App;
