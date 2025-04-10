import React from 'react';
import CarModelsComponent from '../CarModels/CarModelsComponent';
import AdsComponent from '../AdsComponent/AdsComponent';
import FooterComponent from '../Footer/FooterComponent';
import './home.css';

const HomeComponent = () => {
  return (
    <div className="home-wrapper">
      <div className="page-container">
        <CarModelsComponent />
        <div className="models_container">
          <AdsComponent />
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
