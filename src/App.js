import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import {
  OrbitControls,
  Sky,
  Stars,
  MeshWobbleMaterial,
  ContactShadows,
} from "@react-three/drei";
import House from "./components/House/House";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas camera={{ zoom: 1.4, position: [20, 20, 15] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <Stars
            radius={100}
            depth={50}
            count={50000}
            factor={4}
            saturation={0}
            fade
          />

          <ContactShadows
            opacity={1}
            width={1}
            height={1}
            blur={1}
            far={10}
            resolution={256}
          />

          <mesh>
            <boxBufferGeometry attach="geometry" />
            <MeshWobbleMaterial
              attach="material"
              color={"black"}
              factor={2}
              speed={10}
            />
          </mesh>

          <Suspense fallback={null}>
            <House />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
