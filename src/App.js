import {
  OrbitControls,
  useHelper,
  Plane,
} from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { Environment } from "@react-three/drei";
import Dubai from "./assets/Dubaii.jpg";
import Range from "./components/Range";

const App = () => {
  const dirLight = useRef(null);
  useHelper(dirLight, DirectionalLightHelper, 2, "FFD65A");

  return (
    <>
    <Environment background files={Dubai} />
    <ambientLight
        color={"#000957"}
        // intensity={3}
      />
    {/* <ambientLight intensity={0.8} /> */}
    <directionalLight position={[2, 5, 2]} intensity={1} />
    <Range />
    <Plane
        args={[45, 45]}
        receiveShadow
        position={[0, -0.5, 0]}
        rotation-x={-Math.PI / 2}
      >
        <meshStandardMaterial color={"#DCD7C9"} />
    </Plane>
    <OrbitControls />
    </>
  )
};

export default App;
