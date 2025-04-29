import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import "./carModels.css";

// --- Car Scene Component ---
const CarScene = () => {
  const carRef = useRef();
  const { scene } = useGLTF(
    "https://raw.githubusercontent.com/jagadeeshmeesala11/porchesmodel_2/main/2015_porsche_918_spyder.glb"
  );

  const [paintMeshes, setPaintMeshes] = useState([]);
  const [targetColor, setTargetColor] = useState(new THREE.Color());
  const [pulseScale, setPulseScale] = useState(1);

  useEffect(() => {
    if (!scene) return;

    scene.position.set(0, 0, 0);
    scene.scale.set(75, 75, 75);
    scene.rotation.y = Math.PI / 2;

    const paints = [];

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        const name = child.userData.name || child.name || "";
        if (name.includes("p:Kit1_Paint_Geo_lodA_Kit1_Paint_Geo_lodA_Porsche_918Spyder")) {
          paints.push(child);
        }
      }
    });

    setPaintMeshes(paints);

    // Change color every 2 seconds
    const interval = setInterval(() => {
      const newColor = new THREE.Color(Math.random(), Math.random(), Math.random());
      setTargetColor(newColor);
      setPulseScale(1.1);
    }, 2000);

    return () => clearInterval(interval);
  }, [scene]);

  useFrame((state, delta) => {
    if (paintMeshes.length > 0) {
      paintMeshes.forEach((mesh) => {
        mesh.material.color.lerp(targetColor, 0.05);
      });
    }

  });

  return <primitive object={scene} ref={carRef} />;
};

const CarModelsComponent = () => {
  return (
    <div className="carmodel_main_container">
      
      <Canvas
        className="canvas-container"
        shadows
        camera={{ position: [0, 1, 4], fov: 40 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 5]} intensity={3} castShadow />
        <spotLight position={[0, 4, 0]} angle={0.3} intensity={0.5} />
        <pointLight intensity={5} color="white" position={[0, 2, 0]} />
        <OrbitControls enableZoom={true} enablePan={true} />

        <CarScene />
      </Canvas>
    </div>
  );
};

export default CarModelsComponent;
