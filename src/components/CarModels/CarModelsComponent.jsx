import React,{useRef} from 'react';
import { Canvas,useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import HeaderComponent from '../Header/HeaderComponent'
import './carModels.css';

const CarModel = () => {
  const car = useRef();
  const { scene } = useGLTF("/models/2015_porsche_918_spyder/scene.gltf");
   scene.rotation.y = -0.5;
   scene.position.x = 1.5;
   scene.position.z = 0.5;
   useFrame(() => {
    if(car.current){
      car.current.rotation.y -= 0.001
    }
   })
  scene.scale.set(80, 80, 80);
  return <primitive object={scene} ref={car} />;
};

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

const CarModelsComponent = () => {
  return (
    <div className='carmodel_main_container'>
      <div className='navbar_container'>
        <HeaderComponent/>
      </div>
      <div className='car-text-overlay'>
        <h1 className='heading_car'>Porsche 918 Spyder</h1>
        <p className='para_car'>Explore the 3D Showroom </p>
        <div>
          <button className='view-btn'>View Models</button>
          </div>
      </div>

     
      <Canvas className='canvas-container' shadows camera={{ position: [0, 1, 5], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 5]} intensity={2} castShadow />
        <spotLight position={[0, 5, 0]} angle={0.3} intensity={1.5} />
        <pointLight intensity={25} color={'white'} position={[0, 2, 0]} />
        <CarModel />
        <Plane />
        
      </Canvas>
    </div>
  );
};

export default CarModelsComponent;
