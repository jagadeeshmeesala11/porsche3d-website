import React from 'react';
import './AdsComponentVideo.css';

const AdsComponentVideo = () => {
  return (
    <div className="ad-video-wrapper">
      <iframe
        className="ad-video"
        src="https://www.youtube.com/embed/B7oOtTgYEZM?autoplay=1&mute=1&controls=0&loop=1&playlist=B7oOtTgYEZM"
        title="Porsche Advertisement"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default AdsComponentVideo;
