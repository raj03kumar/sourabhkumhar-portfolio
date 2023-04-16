import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl.src]);

  const memoizedGeometry = useMemo(
    () => new THREE.IcosahedronGeometry(1, 1),
    []
  );
  const memoizedMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({ color: "#fff8eb", flatShading: true }),
    []
  );

  return (
    <Float speed={1} rotationIntensity={1.75}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        geometry={memoizedGeometry}
        material={memoizedMaterial}
        scale={2.75}
      >
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ powerPreference: "low-power", alpha: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
