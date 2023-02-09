import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';
import './headerStyles.css';

const Header = () => {
  return (
    <header className='container'>
      <div className="header__container flex ai-c jc-sb">
        <Link to={'/'} className='header__logotip flex'>
          Dillantum.
          <small>Real Estate</small>
        </Link> 
        <CTA />
      </div>
      {/* <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
          <Link to='home'><li>Home</li></Link>     
          <Link to='destinations'><li>Destinations</li></Link>     
          <Link to='carousel'><li>Travel</li></Link>     
        </ul>
        <div className='mobile-menu-bottom'>
          <div className='menu-icons'>
            <button>Search</button>
            <button>Account</button>
          </div>
        </div>
      </div> */}
    </header>
  )
}

export default Header
