import React, { Suspense, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import FooterComponent from "../Footer/FooterComponent";
import HeaderComponent from "../Header/HeaderComponent";
import Loader from "../LoaderComponent/Loader";
import "./SingleModelPage.css";

const modelData = [
  {
    id: 1,
    name: "Porsche Macan",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2017_porsche_macan_gts.glb",
    scale: 80,
    position: [0, -1, 0],
    qr:'https://i.ibb.co/S7RTMKcX/macan.png',
    price: "96.05 Lakh",
    full: "https://i.ibb.co/ds6xWV2m/full-car.jpg",
    wheels: "https://i.ibb.co/KxRXMrJg/wheels.jpg",
    engine: "https://i.ibb.co/p67gfMt1/engine.jpg",
    
    mileage: "6 kmpl",
    fuelType: "Petrol",
    engineSpec: "2894cc",
    cylinders: "6",
    maxPower: "434.49bhp@5700-6600rpm",
    maxTorque: "550Nm@1900-5600rpm",
    seatingCapacity: "5",
    fuelTankCapacity: "65 liters"
  },
  {
    id: 3,
    name: "Porsche 718 Cayman",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/porsche718cayman.glb",
    scale: 80,
    position: [0, -0.5, 0],
    qr:'https://i.ibb.co/8nqJ4dxS/model-4.png',
    price: "89.95 Lakh",
    full: "https://i.ibb.co/YFLYDcpf/full-car.jpg",
    wheels: "https://i.ibb.co/RpRqH0Y4/chassis.jpg",
    engine: "https://i.ibb.co/9H5sBH6V/engine.jpg",
    
    mileage: "9.17 kmpl",
    fuelType: "Petrol",
    engineSpec: "2894cc",
    cylinders: "6",
    maxPower: "493.49bhp@8400rpm",
    maxTorque: "550Nm@1900-5600rpm",
    seatingCapacity: "2",
    fuelTankCapacity: "64 liters"
  },
  {
    id: 4,
    name: "Porsche Panamera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2022_porsche_cayenne_turbo_gt.glb",
    scale: 80,
    position: [0, -0.5, 0],
    qr:'https://i.ibb.co/8nqJ4dxS/model-4.png',
    price: "1.70 - 2.34 Cr",
    full: "https://i.ibb.co/cST63D9M/full-car.jpg",
  
    wheels: "https://i.ibb.co/KxRXMrJg/wheels.jpg",
    engine: "https://i.ibb.co/p67gfMt1/engine.jpg",
    
   
    mileage: "6 kmpl",
    fuelType: "Petrol",
    engineSpec: "3996cc",
    cylinders: "6",
    maxPower: "670.51bhp",
    maxTorque: "930Nm",
    seatingCapacity: "4",
    fuelTankCapacity: "64 liters"
  },
  {
    id: 5,
    name: "Porsche 911 Carrera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2018_porsche_911.glb",
    scale: 80,
    position: [0, 0, 0],

    qr:'https://i.ibb.co/S7QNnQj7/911.png',
    price: "1.99 Cr",
    full: "https://ibb.co/xSDmgdr9",
    wheels: "https://i.ibb.co/KxRXMrJg/wheels.jpg",
    engine: "https://i.ibb.co/p67gfMt1/engine.jpg",
   
    mileage: "9.17 kmpl",
    fuelType: "Petrol",
    engineSpec: "3996cc",
    cylinders: "6",
    maxPower: "517.63bhp@8500-9000rpm",
    maxTorque: "465Nm@6300rpm",
    seatingCapacity: "2,4",
    fuelTankCapacity: "64 liters"
  },
  {
    id: 6,
    name: "Porsche Boxster",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/Porsche%20Boxster.glb",
    scale: 0.75,
    position: [0, -0.2, 0],
    qr:'https://i.ibb.co/8nqJ4dxS/model-4.png',
    price: "92 Lakh",

    full: "https://i.ibb.co/5g4pZ18x/Screenshot-2025-04-08-195734.png",
    wheels: "https://i.ibb.co/KxRXMrJg/wheels.jpg",
    engine: "https://i.ibb.co/p67gfMt1/engine.jpg",

    mileage: "8.6 kmpl",
    fuelType: "Petrol",
    engineSpec: "3997cc",
    cylinders: "6",
    maxPower: "493.49bhp@8400rpm",
    maxTorque: "450Nm@6750rpm",
    seatingCapacity: "2",
    fuelTankCapacity: "64 liters"
  }
];

function ModelViewer({ path, scale, position, color }) {
  const { scene } = useGLTF(path);

  scene.rotation.y = Math.PI / 2;
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = child.material.clone();
      const name = child.userData.name || child.name || "";
      if (name.includes("car_porsche_macangts_2015_Mesh:M_Paint_Metal_High_carpaint_0")) {
        child.material.color.set(color);
      } else if (name.includes("boot.011_0") && !name.includes("windshield_0")) {
        child.material.color.set(color);
        child.material.metalness = 0;
        child.material.roughness = 0.5;
      } else if (name.includes("Material2.001")) {
        child.material.color.set(color);
        child.material.metalness = 0;
        child.material.roughness = 0.41;
      } else {
        child.material.color.set(color);
      }
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
  return <OrbitControls ref={controlsRef} autoRotate={enabled} autoRotateSpeed={-1} />;
}

export default function SingleModelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const model = modelData.find((m) => m.id === parseInt(id, 10));

  const [color, setColor] = useState("#ffffff");
  const [autoRotate, setAutoRotate] = useState(false);
  const rendererRef = useRef(null);
  const canvasRef = useRef(null);

  if (!model) return <div>Model not found</div>;

  return (
    <div className="single-model-page">
      <HeaderComponent className="header" />

      <div className="model-container">
        <div className="model-canvas-container" ref={canvasRef}>
          <Canvas
            onCreated={({ gl }) => {
              rendererRef.current = gl;
              gl.xr.enabled = false;
            }}
            camera={{ position: [0, 1.5, 5], fov: 40 }}
          >
            <Suspense fallback={<Loader />}>
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
          <h1 className="title">{model.name}</h1>
          <div className="color-picker">
            <label>Choose Color:</label>
            <input
              className="color-input"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <button className="rotate-button" onClick={() => setAutoRotate((prev) => !prev)}>
            {autoRotate ? "Stop Rotation" : "Auto Rotate"}
          </button>
          <button className="back-button" onClick={() => navigate(-1)}>
            ⬅ Back to All Models
          </button>
          <div>
            <img src={model.qr} alt="qr" className="qr-code" />
          </div>
          <h3>Scan the QR code for an AR experience</h3>
        </div>
      </div>

      <div className="car-details-page">
      <div className="Details-container" data-aos="fade-up">
  <div className="details-card" data-aos="zoom-in">
    <h2 className="model-name">{model.name}</h2>
    <ul className="details-list">
      <li data-aos="fade-left"><strong>Mileage:</strong> {model.mileage}</li>
      <li data-aos="fade-left" data-aos-delay="100"><strong>Engine:</strong> {model.engineSpec}</li>
      <li data-aos="fade-left" data-aos-delay="200"><strong>Fuel Type:</strong> {model.fuelType}</li>
      <li data-aos="fade-left" data-aos-delay="300"><strong>Price:</strong> {model.price}</li>
      <li data-aos="fade-left" data-aos-delay="400"><strong>Cylinders:</strong> {model.cylinders}</li>
      <li data-aos="fade-left" data-aos-delay="500"><strong>Max Power:</strong> {model.maxPower}</li>
      <li data-aos="fade-left" data-aos-delay="600"><strong>Max Torque:</strong> {model.maxTorque}</li>
      <li data-aos="fade-left" data-aos-delay="700"><strong>Seating Capacity:</strong> {model.seatingCapacity}</li>
      <li data-aos="fade-left" data-aos-delay="800"><strong>Fuel Tank Capacity:</strong> {model.fuelTankCapacity}</li>
    </ul>
  </div>
</div>

  
    <div>
        <img src={model.full} alt="full car" className="full-car" />
      </div>
  
</div>
            <FooterComponent className="footer" />
      
    </div>
  );
}
