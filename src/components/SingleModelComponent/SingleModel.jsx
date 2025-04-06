import React, { Suspense, useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import QRCode from "react-qr-code";
import "./SingleModelPage.css";

const modelData = [
  { id: 1, name: "Porsche Macan", file: "/models/porsche_macan.glb", scale: 70, position: [0, -1, 0] },
  { id: 2, name: "Porsche Taycan", file: "/models/porshe_taycan.glb", scale: 0.6, position: [0, -0.5, 0] },
  { id: 3, name: "Porsche 718 Cayman", file: "/models/porsche718cayman.glb", scale: 70, position: [0, -0.5, 0] },
  { id: 4, name: "Porsche Panamera", file: "/models/2022_porsche_cayenne_turbo_gt.glb", scale: 70, position: [0, -0.5, 0] },
  { id: 5, name: "Porsche 911 Carrera", file: "/models/free_porsche_911_carrera_4s.glb", scale: 0.8, position: [0, 0.5, 0] },
  { id: 6, name: "Porsche Boxster", file: "/models/Porsche Boxster.glb", scale: 0.75, position: [0, -0.2, 0] },
];

function ModelViewer({ path, scale, position, color }) {
  const { scene } = useGLTF(path);
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = child.material.clone();
      child.material.color.set(color);
    }
  });
  return <primitive object={scene} scale={scale} position={position} />;
}

function CameraAutoRotate({ enabled }) {
  const controlsRef = useRef();
  useFrame(() => {
    if (enabled && controlsRef.current) {
      controlsRef.current.update();
    }
  });
  return <OrbitControls ref={controlsRef} autoRotate={enabled} />;
}

export default function SingleModelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const shouldStartAR = searchParams.get("startAR") === "true";
  const model = modelData.find((m) => m.id === parseInt(id));
  const [color, setColor] = useState("#ffffff");
  const [autoRotate, setAutoRotate] = useState(false);
  const rendererRef = useRef(null);
  const currentURL = `https://91ba-2401-4900-6741-b7f2-6899-a6a1-5800-2e4f.ngrok-free.app/model/${id}?startAR=true`;

  useEffect(() => {
    if (!shouldStartAR) return;

    if (!navigator.xr) {
      alert("WebXR not supported. Use Chrome on Android.");
      return;
    }

    navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
      if (supported) {
        startAR();
      } else {
        alert("AR not supported on this device.");
      }
    });
  }, [shouldStartAR]);

  const startAR = async () => {
    try {
      const session = await navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test", "local-floor"],
      });

      const renderer = rendererRef.current;
      if (!renderer) {
        console.error("Renderer not initialized.");
        return;
      }

      renderer.xr.enabled = true;
      renderer.xr.setReferenceSpaceType("local");
      await renderer.xr.setSession(session);

      renderer.setAnimationLoop(() => {
        renderer.render(renderer.scene, renderer.camera);
      });
    } catch (err) {
      console.error("AR session error:", err);
      alert("AR start failed: " + err.message);
    }
  };

  if (!model) return <div>Model not found</div>;

  return (
    <div className="single-model-page">
      <div className="model-canvas-container">
        <Canvas
          onCreated={({ gl, scene, camera }) => {
            rendererRef.current = gl;
            gl.xr.enabled = false;
            gl.scene = scene;
            gl.camera = camera;
          }}
          camera={{ position: [0, 1.5, 5], fov: 40 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <Environment preset="city" />
            <ModelViewer
              path={model.file}
              scale={model.scale}
              position={model.position}
              color={color}
            />
            <CameraAutoRotate enabled={autoRotate} />
          </Suspense>
        </Canvas>
      </div>

      <div className="model-info">
        <h1>{model.name}</h1>
        <div className="color-picker">
          <label>Choose Color:</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <button onClick={() => setAutoRotate((prev) => !prev)}>
          {autoRotate ? "Stop Rotation" : "Auto Rotate"}
        </button>
        <button className="ar-button" onClick={startAR}>
          Start AR
        </button>
        <div className="qr-code-section">
          <p>Scan to View in AR</p>
          <QRCode value={currentURL} size={128} />
          <p style={{ fontSize: "0.8rem", wordBreak: "break-word" }}>{currentURL}</p>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back to All Models
        </button>
      </div>
    </div>
  );
}