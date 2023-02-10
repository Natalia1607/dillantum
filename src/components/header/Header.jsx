import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CTA from './CTA';
import './headerStyles.css';
import Logo  from '../../assets/logo.svg';

const Header = () => {
  const location = useLocation(); 
  return (
    <header className='container'>
      <div className=
      {
        location.pathname === '/' || location.pathname === '/register' || location.pathname === '/sign-in'
        ? "header__container flex ai-c jc-sb container_column"
        : "header__container flex ai-c jc-sb"
      }
      >
        <Link to={'/'} className='header__logotip flex'>
          <img src={Logo} alt="Logotip" />
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
