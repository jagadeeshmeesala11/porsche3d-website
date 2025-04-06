import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './components/Home/HomeComponent';
import ModelsPagesComponent from './components/ModelsPages/ModelsPagesComponent';
import SingleModel from './components/SingleModelComponent/SingleModel';

const App = () => {
  return (
    <div>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>}/>
          <Route path='/models' element={<ModelsPagesComponent/>}/>
          <Route path='/models/:id' element={<SingleModel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
