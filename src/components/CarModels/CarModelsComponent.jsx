import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import {Link} from 'react-router-dom';
import * as THREE from "three";

import HeaderComponent from "../Header/HeaderComponent";
import "./carModels.css";

// === Car Model ===
const CarModel = () => {
  const car = useRef();
  const { scene } = useGLTF("/models/2015_porsche_918_spyder/scene.gltf");

  useEffect(() => {
    scene.rotation.y = -0.5;
    scene.position.set(1.5, 0, 1);
    scene.scale.set(75, 75, 75);
  }, [scene]);

  useFrame(() => {
    if (car.current) {
      car.current.rotation.y -= 0.001;
    }
  });

  return <primitive object={scene} ref={car} />;
};


// === Background Shader Effect ===
const AnimatedBackground = () => {
  const shaderMaterialRef = useRef();

  const shader = useMemo(() => ({
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float time;

      void main() {
        float color = 0.5 + 0.5 * sin(time + vUv.x * 10.0) * cos(time + vUv.y * 10.0);
        gl_FragColor = vec4(vec3(color), 0.15);
      }
    `
  }), []);

  useFrame(({ clock }) => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={shaderMaterialRef}
        args={[shader]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

// === Ground Plane ===
const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <planeGeometry args={[10, 10]} />
    <meshStandardMaterial color="black" />
  </mesh>
);

// === Main Component ===
const CarModelsComponent = () => {
  return (
    <div className="carmodel_main_container">
      <div className="navbar_container">
        <HeaderComponent />
      </div>

      <div className="car-text-overlay">
        <h1 className="heading_car">Porsche 918 Spyder</h1>
        <p className="para_car">Explore the 3D Showroom</p>
        <div className="btn-view">
        <Link to={'/models'} className="view-btn">View Models</Link>
          </div>
      </div>

      <Canvas
        className="canvas-container"
        shadows
        camera={{ position: [0, 1, 5], fov: 40 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 5]} intensity={3} castShadow />
        <spotLight position={[0, 5, 0]} angle={0.3} intensity={1.5} />
        <pointLight intensity={35} color={"white"} position={[0, 2, 0]} />

        <AnimatedBackground />
        
        <CarModel />
        <Plane />
       
      </Canvas>
    </div>
  );
};

export default CarModelsComponent;
