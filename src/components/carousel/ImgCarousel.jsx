import React from 'react';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import slide6 from '../../assets/slide6.jpg';
import Slider from 'react-slick';

import './imgCarouselStyles.css';
const ImgCarousel = () => {
    const settings = {
        arrows: false,
        dots: false,
        initialSlide: 0,
        cssEase: 'linear',
        draggable:true,
        swipe:true,
        speed: 10000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite:true,
        vertical: true,
        verticalSwiping: true,
      };
  return (
    <div className='carousel'>
        <Slider  className='carousel__item carousel__item-l' {...settings}>
            <div className='carousel__img'>
                <img src={slide1} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide2} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide3} alt="#" />
            </div>
        </Slider>
        <Slider className='carousel__item carousel__item-r' {...settings}>
            <div className='carousel__img'>
                <img src={slide4} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide5} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide6} alt="#" />
            </div>
        </Slider>
    </div>
  )
}

export default ImgCarousel
