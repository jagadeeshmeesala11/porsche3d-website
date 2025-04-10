import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CarModelsComponent from '../CarModels/CarModelsComponent';
import AdsComponent from '../AdsComponent/AdsComponent';
import FooterComponent from '../Footer/FooterComponent';
import CarImageGalleryComponent from '../CarImageGalleryComponent/CarImageGalleryComponent';
import AdsComponentVideo from '../AdsComponent/AdsComponentVideo';
import './home.css';

const HomeComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay ensures DOM is ready
      }
    }
  }, [location]);

  return (
    <div className="home-wrapper">
      <div className="page-container">
        <CarModelsComponent />
        <div className="models_container">
          <AdsComponent />
        </div>
        <div>
          <AdsComponentVideo />
        </div>
        <div id="explore-section">
          <CarImageGalleryComponent />
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
