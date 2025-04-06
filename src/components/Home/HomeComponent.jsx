import React from 'react';
import CarModelsComponent from '../CarModels/CarModelsComponent';
import AdsComponent from '../AdsComponent/AdsComponent';
import ModelsComponent from '../ModelsComponent/ModelsComponent';
import FooterComponent from '../Footer/FooterComponent';
import './home.css'

const HomeComponent = () => {
  return (
    <div>
      <CarModelsComponent/>
     <div className="models_container">
      <AdsComponent/>
     </div>
     <FooterComponent/>
    </div>
  )
}

export default HomeComponent
