import React, { Suspense } from "react";;
import HeaderComponent from '../Header/HeaderComponent'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import "./modelpages.css";
import { Link } from "react-router-dom";

// Model list
const models = [
  {id:1, name: "Porsche Macan", file: "/models/porsche_macan.glb",scale:70,position:[0,-1,0] },
  {id:2,name: "Porsche Taycan", file: "/models/porshe_taycan.glb",scale:0.6,position:[0,-0.5,0]},
  {id:3, name: "Porsche 718 cayman", file: "/models/porsche718cayman.glb",scale:70,position:[0,-0.5,0] },
  {id:4, name: "Porsche Panamera", file: "/models/2022_porsche_cayenne_turbo_gt.glb",scale:70,position:[0,-0.5,0] },
  {id:5, name: "Porsche 911 Carrera", file: "/models/free_porsche_911_carrera_4s.glb",scale:0.8,position:[0,0.5,0] },
  {id:6, name: "Porsche Boxster", file: "/models/Porsche Boxster.glb",scale:0.75,position:[0,-0.2,0] }
];

// 3D Model Viewer
function ModelViewer({ path,scale,position }) {
  const { scene } = useGLTF(path);
  console.log('added',scene)
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <primitive object={scene} scale={scale} position={position} />
      <OrbitControls enableZoom={false}  />
      <Environment preset="city" />
    </>
  );
}

// Model Card
function ModelCard({ model }) {
  return (
    <div className="model-card">

      <div className="canvas-wrapper">
        <Canvas camera={{ position: [0, 1, 4], fov: 35 }} >
          <Suspense fallback={null}>
            <ModelViewer path={model.file} scale={model.scale} position={model.position} />
          </Suspense>
        </Canvas>
      </div>
      <div className="card-footer">
        <h2 className="model-name">{model.name}</h2>
        <Link to={`/models/${model.id}`} className="details-button">View Details</Link>
      </div>
    </div>
  );
}

// Page Layout
export default function AllModelsPage() {
  return (
    <main className="models-page">
      <HeaderComponent style={{ textDecoration: "none", color:'white',backgroundColor:'black'}}/>
      <h1 className="page-title">All Porsche Models</h1>
      <div className="models-grid">
        {models.map((model, index) => (
          <ModelCard key={index} model={model} />
        ))}
      </div>
    </main>
  );
}
