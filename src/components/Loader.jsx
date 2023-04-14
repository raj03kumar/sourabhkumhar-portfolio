import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-14 text-[#f1f1f1] font-[800] mt-40">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
