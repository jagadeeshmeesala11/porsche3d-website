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
    img: "https://sdmntprwestus.oaiusercontent.com/files/00000000-9178-6230-bf4e-a2622984c506/raw?se=2025-04-10T09%3A59%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=66c51156-4e76-5634-a3ca-7d0e68c32c75&skoid=e4438ed3-2a6f-4fd3-bf63-222012dc627c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-10T08%3A17%3A42Z&ske=2025-04-11T08%3A17%3A42Z&sks=b&skv=2024-08-04&sig=zsSnHzF2LaFIpzQFrrUuJAryFJ4tfNYVN3%2BqBOlq3C8%3D"
  },
  {
    id: 3,
    name: "Porsche 718 Cayman",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/porsche718cayman.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://sdmntprwestus.oaiusercontent.com/files/00000000-c9d0-6230-911c-de4bb856b51c/raw?se=2025-04-10T10%3A06%3A26Z&sp=r&sv=2024-08-04&sr=b&scid=31b35e4c-073c-5026-b9b1-0b174ce42b7d&skoid=e4438ed3-2a6f-4fd3-bf63-222012dc627c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-09T20%3A53%3A40Z&ske=2025-04-10T20%3A53%3A40Z&sks=b&skv=2024-08-04&sig=KKF1Gjwpe7bLV/dO3x9J%2BOfxFENJt4Jr5oSei4D3Suk%3D"
  },
  {
    id: 4,
    name: "Porsche Panamera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2022_porsche_cayenne_turbo_gt.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://sdmntprwestus.oaiusercontent.com/files/00000000-a820-6230-bc8b-135ba4fee8a0/raw?se=2025-04-10T10%3A09%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=b05bceb3-0f48-519e-a822-d1754097511f&skoid=e4438ed3-2a6f-4fd3-bf63-222012dc627c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-09T20%3A59%3A13Z&ske=2025-04-10T20%3A59%3A13Z&sks=b&skv=2024-08-04&sig=S3Kv7ZqqUvjGkOqMelY1jbfWnjAAMMSPlnd8U7uB1XI%3D"
  },
  {
    id: 5,
    name: "Porsche 911 Carrera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2018_porsche_911.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://sdmntprwestus.oaiusercontent.com/files/00000000-acbc-6230-96a0-5fad595ff4c8/raw?se=2025-04-10T10%3A12%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=f718a677-6062-5788-82be-a75237e0cbea&skoid=e4438ed3-2a6f-4fd3-bf63-222012dc627c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-10T08%3A03%3A41Z&ske=2025-04-11T08%3A03%3A41Z&sks=b&skv=2024-08-04&sig=JjHrI7B2iHcKad0VVl%2BPg0MEQwIDWaPShviU7ifFAM4%3D"
  },
  {
    id: 6,
    name: "Porsche Boxster",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/Porsche%20Boxster.glb",
    qr: "https://i.ibb.co/8nqJ4dxS/model-4.png",
    img: "https://sdmntprwestus.oaiusercontent.com/files/00000000-d3a8-6230-80f9-74948d1b6be9/raw?se=2025-04-10T10%3A15%3A51Z&sp=r&sv=2024-08-04&sr=b&scid=666f9ede-611f-58a4-949e-f4a383f6f894&skoid=e4438ed3-2a6f-4fd3-bf63-222012dc627c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-09T20%3A53%3A54Z&ske=2025-04-10T20%3A53%3A54Z&sks=b&skv=2024-08-04&sig=ykCYolosl8mAt2pitHEYD4h3pauYSVQ8GUk6/IfqOAE%3D"
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