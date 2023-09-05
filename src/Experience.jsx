import { OrbitControls, Sphere, Cone, Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
  const sphereRef = useRef();
  const coneRef = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Calcular las nuevas posiciones en función de la función seno en X e Y
    const newPositionX = Math.sin(time) * 2;
    const newPositionY = Math.sin(time) * 2;

    sphereRef.current.position.x = newPositionX;
    sphereRef.current.position.y = newPositionY;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Calcular las nuevas posiciones en función de la función coseno en X e Y
    const newPositionX = Math.cos(time) * 2;
    const newPositionY = Math.cos(time) * 2;

    coneRef.current.position.x = newPositionX;
    coneRef.current.position.y = newPositionY;
  });
  return (
    <>
      <OrbitControls makeDefault enablePan={false} />
      <mesh ref={sphereRef}>
        <Sphere args={[1, 32, 32]}>
          <meshMatcapMaterial color="red" />
        </Sphere>
      </mesh>
      <mesh ref={coneRef}>
        <Cone
          args={[1, 2, 32]} // Parámetros: radio de la base, altura y segmentos
          position={[0, 3, 0]} // Posición del cono en la escena
        >
          <meshDepthMaterial color="yellow" /> {/* Material del cono */}
        </Cone>
      </mesh>
      <Torus
        args={[1, 0.4, 16, 100]} // Parámetros: radio, radio del tubo, segmentos radiales, segmentos tubulares
        position={[0, -3.5, 0]} // Posición del torus en la escena
      >
        <meshNormalMaterial color="purple" /> {/* Material del torus */}
      </Torus>
    </>
  );
};
export default Experience;
