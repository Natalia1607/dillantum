import React from 'react';
import { CTAMain } from './CTAMain';
import { Carousel } from '../../components';
import './mainContainerStyles.scss';

const MainContainer = () => {
  return (
    <div className='container main__container grid'>
      <div className='main__container_carousel md-flex'>
        <Carousel />
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
