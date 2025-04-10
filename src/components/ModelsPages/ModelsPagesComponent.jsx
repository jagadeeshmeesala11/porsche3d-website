import React, { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";
import FooterComponent from "../Footer/FooterComponent";

import HeaderComponent from "../Header/HeaderComponent";
import Loader from "../LoaderComponent/Loader";

import "./modelpages.css";


const models = [
  { id: 1, name: "Porsche Macan", file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2017_porsche_macan_gts.glb", scale: 70, position: [0, -0.4, 0] },
  { id: 3, name: "Porsche 718 Cayman", file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/porsche718cayman.glb", scale: 70, position: [0, -0.5, 0] },
  { id: 4, name: "Porsche Panamera", file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2022_porsche_cayenne_turbo_gt.glb", scale: 70, position: [0, -0.5, 0] },
  { id: 5, name: "Porsche 911 Carrera", file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2018_porsche_911.glb", scale: 80, position: [0, 0, 0] },
  { id: 6, name: "Porsche Boxster", file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/Porsche%20Boxster.glb", scale: 0.75, position: [0, -0.2, 0] },
];



function ModelViewer({ path, scale, position }) {
  const { scene } = useGLTF(path);
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <primitive object={scene} scale={scale} position={position} />
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
    </>
  );
}


function ModelCard({ model }) {
  return (
    <div className="model-card">
      <div className="canvas-wrapper">
        <Canvas camera={{ position: [0, 1, 4], fov: 35 }}>
          <Suspense fallback={<Loader />}>
            <ModelViewer
              path={model.file}
              scale={model.scale}
              position={model.position}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="card-footer">
        <h2 className="model-name">{model.name}</h2>
        <Link to={`/models/${model.id}`} className="details-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

// === Main Page ===
export default function AllModelsPage() {
  return (
    <>
     
      <main className="models-page">
        <HeaderComponent className="header"/>
        <h1 className="page-title">All Porsche Models</h1>
        <div className="models-grid">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
        <FooterComponent className="footer" />
      </main>
    </>
  );
}
