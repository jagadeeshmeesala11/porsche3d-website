import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoContainer from '../VideoContainer/VideoContainer';
import AdsComponent from '../AdsComponent/AdsComponent';
import FooterComponent from '../Footer/FooterComponent';
import CarImageGalleryComponent from '../CarImageGalleryComponent/CarImageGalleryComponent';
import './home.css';
import ModelsAds from '../AdsComponent/ModelsAds/Models';
import CarModelsComponent from '../CarModels/CarModelsComponent';

const HomeComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location]);

  return (
    <div className="home-wrapper">
      <div className="page-container">
        <div>
          <VideoContainer/>
        </div>
        <div className="models_container">
          <AdsComponent />
        </div>
        <div>
          <CarModelsComponent/>
        </div>
        <div id="explore-section">
          <ModelsAds />
        </div>
        <div id="gallery-section">
          <CarImageGalleryComponent />
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
