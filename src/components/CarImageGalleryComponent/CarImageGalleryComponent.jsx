import React, { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CarImageGallery.css';

const carImages = [
  
  {
    label: 'Wheels',
    url: 'https://i.ibb.co/RpRqH0Y4/chassis.jpg',
    description: 'The one and always.Anyone who dreams of a Porsche usually has an image in their mind: the  has been the epitome of an exciting, powerful sports car with day-to-day usability for 60 years. Take a seat behind the wheel of the new 911 and become part of a unique community.'
  },
  {
    label: 'Engine',
    url: 'https://i.ibb.co/p67gfMt1/engine.jpg',
    description: 'The powerful 3.0-litre 6-cylinder flat engine with twin tur-bochargers will give you goosebumps with its incomparable sound alone. The horizontally opposed construction and the tra-ditional position in the rear end of the vehicle also allows for a low centre of gravity.'
  },
  {
    label: 'Performance',
    url: 'https://i.ibb.co/RTV4MWjZ/ENGINE-2.jpg',
    description: 'Peak performance: 290 kW (394 PS). Top speed: 294 km/h. With this technical data, a maximum torque of 450 Nm and a sprint from 0 to 100 km/h in 4.1 s, it is highly unlikely that you will ever want to get out again.'
  },
  {
    label: 'PDK',
    url: 'https://i.ibb.co/XZ2dR65V/ENGINE-3.jpg',
    description: 'The 8-speed Porsche Doppelkupplung (PDK) allows extremely fast gear changes without interrupting the flow of power - even by a millisecond. The PDK combines sports tuning in 1st to 6th gear with efficient overdrive ratios (7th and 8th gear).'
  },
];


const CarImageGalleryComponent = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="gallery-container">
      <div className="animated-dots"></div>
      <h2 className="gallery-title">Explore Car Details</h2>

      {carImages.map((img, idx) => (
        <div
          className={`image-block ${idx % 3 === 2 ? 'center' : idx % 2 === 0 ? 'left' : 'right'}`}
          key={idx}
          data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
        >
          <div className="image-wrapper" onClick={() => setLightbox(img)}>
            <img src={img.url} alt={img.label} className="gallery-img" />
          </div>
          <div className="image-content">
            <h3>{img.label}</h3>
            <p>{img.description}</p>
          </div>
        </div>
      ))}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.url} alt={lightbox.label} />
          <p>{lightbox.description}</p>
        </div>
      )}
    </div>
  );
};

export default CarImageGalleryComponent;