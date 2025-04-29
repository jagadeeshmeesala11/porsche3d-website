import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported
import './ModelsAds.css';
import { Link } from 'react-router-dom';

const carModels = [
  {
    id: 1,
    name: "Porsche Macan",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2017_porsche_macan_gts.glb",
    img: "https://i.ibb.co/01X1d1N/porschemacan.png"
  },
  {
    id: 3,
    name: "Porsche 718 Cayman",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/porsche718cayman.glb",
    img: "https://i.ibb.co/b52Wrdp2/Porsche-Cayenne.png"
  },
  {
    id: 4,
    name: "Porsche Panamera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2022_porsche_cayenne_turbo_gt.glb",
    img: "https://i.ibb.co/gb000G3n/Porsche-Panamera.png"
  },
  {
    id: 5,
    name: "Porsche 911 Carrera",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porschecarmodels/2018_porsche_911.glb",
    img: "https://i.ibb.co/fd3p2zvK/porsche911.png"
  },
  {
    id: 6,
    name: "Porsche Boxster",
    file: "https://cdn.jsdelivr.net/gh/jagadeeshmeesala11/porchesmodel_2/Porsche%20Boxster.glb",
    img: "https://i.ibb.co/fz55qrzC/box.jpg"
  },
  {
    id: 7,
    name: "Porsche 718 GT4 RS",
    img: 'models/porsche 718 GT4 RS.jpg',
    title: 'The 718 GT4 RS',
  },
];

const ModelsAds = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 1000, // Set animation duration
      once: true,     // Animation happens only once
    });
    
    // Optionally, refresh AOS when the window is resized or scrolled
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <div className="models-gallery-container">
      <h2 className="gallery-title">Explore Our Car Models</h2>
      <div className="models-grid">
        {carModels.map((carModel) => (
          <div className="models-card" key={carModel.id} data-aos="fade-up">
            <div className="models-image-wrapper">
              <img src={carModel.img} alt={`Model of ${carModel.name}`} className="models-img" />
            </div>
            <h3 className="model-name">{carModel.name}</h3>
            <span className="fuel-type-badge">Gasoline</span>
            <div className="models-content">
              <p className="model-description">
                The iconic, rear-engine sports car with exceptional performance.
              </p>
              <Link to={`/models/${carModel.id}`} className="explore-button">Configure your {carModel.name}</Link>
              <Link to={'/models'} className="explore-button">All {carModel.name} Models</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsAds;
