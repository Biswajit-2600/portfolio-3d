import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

export default function Figurine() {
  const meshRef = useRef();

  // Idle animation: slight rotation + wobble
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t) * 0.3; // rotate left/right
    meshRef.current.rotation.x = Math.sin(t / 2) * 0.1; // slight up/down
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial color="#00ffff" speed={1} factor={0.3} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}
