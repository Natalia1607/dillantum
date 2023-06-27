import React from 'react';
import './bannerStyles.scss';

const Banner = ({ subtitle, title }) => {
  return (
    <div className="banner mb24">
      <p>{subtitle || "Popular searches"}</p>
      <h1>{title || "Rent"}</h1>
    </div>
  );
} 

export default Banner