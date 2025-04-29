import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../Header/HeaderComponent';
import './video.css';

const VideoContainer = () => {
  return (
    <div className="video-container">
      <HeaderComponent />

      <div className="video-wrapper">
        <video
          className="video"
          src="https://res.cloudinary.com/dxg8myqtf/video/upload/v1745742820/porschevideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="video-text">
          <h1 className="video-head">
            Every era <br />
            deserves an icon
          </h1>
          <Link to="/models" className="models-button" aria-label="View car models">
            View Models
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
