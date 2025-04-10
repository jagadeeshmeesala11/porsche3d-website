import React from 'react';
import './Footer.css';

const FooterComponent = () => {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div>
          <h1 className='footer_head'>All Vehicles</h1>
          <ul className='footer_list'>
            <li>The Cayenne GST Coupe</li>
            <li>The Macan 4s</li>
            <li>The 718 GT4 RS</li>
          </ul>
        </div>
        <div>
          <h1 className='footer_head'>Service & Accessories</h1>
          <ul className='footer_list'>
            <li>Personalization</li>
            <li>Drivers Selection Online Shop</li>
            <li>Porsche Classic</li>
          </ul>
        </div>
        <div>
          <h1 className='footer_head'>About</h1>
          <ul className='footer_list'>
            <li>Porsche At A Glance</li>
            <li>Jobs & Careers</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
