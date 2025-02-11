import { Cylinder } from "@react-three/drei";

const Wheel = ({ position }) => (
    <Cylinder args={[0.3, 0.3, 0.2, 16]} position={position} rotation={[0, 0, Math.PI / 2]}>
      <meshStandardMaterial color="black" />
    </Cylinder>
);

export default Wheel;