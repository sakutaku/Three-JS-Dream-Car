
import { Box } from "@react-three/drei";

const CarBody = () => (
    <Box args={[1.5, 0.5, 0.8]} position={[0, 0.5, 0]}>
      <meshStandardMaterial color="red" />
    </Box>
);

export default CarBody;