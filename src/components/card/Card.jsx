import React from 'react';
import './cardStyles.css';
import { useLocation } from 'react-router-dom';

import Card from '../../assets/card.jpg';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

const Cards = () => {
  const location = useLocation();
  return (
    <div className='cards flex jc-sb mb24'>
      <div className='card__wrapp'>
        <img className='card__img' src={Card} alt="" />
        {
          location.pathname === '/personal_account/favorites'
          ? <MdOutlineFavorite className='icon card__favourite' size={24} />
          : <MdOutlineFavoriteBorder className='icon card__favourite' size={24} />
        }
        <div className='card__data'>
          <h4 className='mb12'>Ocean Heights</h4>
          <p>Dubai Marina, Dubai</p>
          <p className='card__data_price mb36'>$850,000</p>
          <hr />
          <div className='card__icons mt24'>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Beds</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>2 <span>Baths</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Levels</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>1256 <span>Sqft</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards