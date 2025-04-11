import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import { motion } from 'framer-motion';
import './ARShowroom.css';

const carModels = [
  {
    id: 1,
    name: "Porsche Macan",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2017_porsche_macan_gts.glb",
    qr: "https://i.ibb.co/S7RTMKcX/macan.png",
    img: "https://i.ibb.co/01X1d1N/porschemacan.png"
  },
  {
    id: 3,
    name: "Porsche 718 Cayman",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/porsche718cayman.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://i.ibb.co/b52Wrdp2/Porsche-Cayenne.png"
  },
  {
    id: 4,
    name: "Porsche Panamera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2022_porsche_cayenne_turbo_gt.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://i.ibb.co/gb000G3n/Porsche-Panamera.png"
  },
  {
    id: 5,
    name: "Porsche 911 Carrera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2018_porsche_911.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://i.ibb.co/fd3p2zvK/porsche911.png"
  },
  {
    id: 6,
    name: "Porsche Boxster",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/Porsche%20Boxster.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://i.ibb.co/fz55qrzC/box.jpg"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ARShowroomComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className="ar-showroom">
        <motion.h2 
          className="showroom-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Porsche Models in AR
        </motion.h2>

        <motion.div 
          className="car-models-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {carModels.map((model) => (
            <motion.div key={model.id} className="car-card" variants={cardVariants}>
              <img src={model.img} alt={model.name} className="car-preview" />
              <h3>{model.name}</h3>
              <img src={model.qr} alt={`${model.name} QR`} className="qr-code" />
              <p className="scan-text">Scan QR with your phone to view in AR</p>
              <a href={`./models/${model.id}`} className="view-button" rel="noopener noreferrer">
                View 3D Model
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default ARShowroomComponent;