import React from 'react';
import ImgCarousel from '../../components/carousel/ImgCarousel';
import { CTAMain } from './CTAMain';

import './mainContainerStyles.scss';

const MainContainer = () => {
  return (
    <div className='container main__container grid'>
      <div className='main__container_carousel md-flex'>
        <ImgCarousel/>
      </div>
      <h1>
        <p>Find the</p>
        <p>appropriate</p>
        <p>property</p>
      </h1>
      <CTAMain />
    </div> 
  )
}

export default MainContainer
