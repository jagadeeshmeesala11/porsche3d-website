import React from 'react';
import './AdsComponent.css';

let ImagesArray = [
    {
        id: 1,
        image: 'models/cayenne.jpg',
        title: 'The Cayenne GST Coupe',
    },
    {
        id: 2,
        image: 'models/macan4s.jpg',
        title: 'The Macan 4s',
    },
    {
        id: 3,
        image: 'models/porsche 718 GT4 RS.jpg',
        title: 'The 718 GT4 RS',
    },
];

const AdsComponent = () => {
    return (
        <div className="ads-component-container">
          
            <ul className="image-container-ads">
                {ImagesArray.map((image) => (
                    <li key={image.id} className="list-item-ads">
                        <img src={image.image} alt={image.title} className="images" />
                        <p>{image.title}</p>
                    </li>
                ))}
            </ul>
            <div>
                <p className='ads-para'>
                Macan 4S Electric: Electrical consumption combined (WLTP): 20.7 – 17.7 kWh/100 km (preliminary value), CO2-emissions combined (WLTP): 0 g/km (preliminary value), CO2 Class: A (preliminary value) | Cayenne GTS Coupé: Fuel consumption combined (model range): 12.7 – 12.2 l/100 km (preliminary value), CO₂-emissions combined (model range): 290 – 277 g/km (preliminary value) | 718 Cayman GT4 RS: Fuel consumption combined: 13.0 l/100 km (preliminary value), CO2-emissions combined (WLTP): 295 g/km (preliminary value), CO2 Class: G (preliminary value)
                </p>
            </div>
        </div>
    );
}

export default AdsComponent;
