import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";
import Info from "./info";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Canvas camera={{ position: [2, 0, 5] }}>
      <Experience />
    </Canvas>
    <Info
      name="Janiert Sebastian Salas Castillo"
      biography="Estudiante universitario de ingeniería de sistemas en la Universidad del valle."
    />
  </>
);
