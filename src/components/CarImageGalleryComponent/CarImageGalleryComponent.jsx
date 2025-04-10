import React, { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CarImageGallery.css';

const carImages = [
  {
    label: 'Front View',
    url: 'https://i.ibb.co/7JR52Vfd/front-view.jpg',
    description: 'Experience the bold and unmistakable front design, where form meets function.The iconic grille is engineered for optimal airflow, enhancing performance and cooling.LED matrix headlights deliver precision lighting with an aggressive, modern edge.Sculpted hood lines and wide air intakes complete a look of pure aerodynamic intent.This view captures the essence of Porsche’s racing heritage and street presence.'
  },
  {
    label: 'Back View',
    url: 'https://i.ibb.co/Q3w8rDKk/back-view.jpg',
    description: 'A seamless LED light bar stretches across the tail, delivering a futuristic yet unmistakably Porsche signature.The active rear spoiler deploys dynamically for added performance and control.Every curve and edge is designed with intent — merging luxury aesthetics with motorsport function.It’s a bold statement that leaves a lasting impression — even as it pulls away.'
  },
  {
    label: 'Side View',
    url: 'https://i.ibb.co/Y72xn1c2/side-view.jpg',
    description: 'A low, wide stance emphasizes performance readiness while maintaining an elegant road presence.The flared wheel arches, flowing roofline, and sharp side creases work together to reduce drag and enhance visual motion, even when the car is still.Every detail—from the frameless doors to the precision-cut alloys—reflects a commitment to both form and function.It’s the perfect balance of luxury and performance in a single glance.'
  },
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