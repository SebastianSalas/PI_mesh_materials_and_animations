import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Info from "./Info/Info";

const App = () => {
  // Camera settings
  const cameraSettings = {
    position: [0, 0, 5],
    fov: 60,
  };

  return (
    <>
      <Info name={"Sebastian Salas"} biography={"Software Developer"} />
      <Canvas camera={cameraSettings}>
        <Experience />
      </Canvas>
    </>
  );
};
export default App;
