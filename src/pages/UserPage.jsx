import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { Cards, Footer } from '../components';

import { GiArchiveResearch } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';
import { IoIosListBox } from 'react-icons/io';

import './page.css';

const UserPage = () => {
  const location = useLocation();
  return (
    <div className="container page__container">
        <div className='banner'></div>
        <Breadcrumb separator=">" className='breadcrumb mt12 mb24'>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>
            {
              location.pathname === '/personal_account'
              ? 
              <>
                Personal account
              </> 
              : 
              <>
              </>
            }
            {
              location.pathname === '/personal_account/searches'
              ? 
              <>
                Searches
              </> 
              : 
              <>
              </>
            }
            {
              location.pathname === '/personal_account/favorites'
              ? 
              <>
                Favorites
              </> 
              : 
              <>
              </>
            }
            {
              location.pathname === '/personal_account/ads'
              ? 
              <>
                Ads
              </> 
              : 
              <>
              </>
            }
            </Breadcrumb.Item> 
        </Breadcrumb>
        <div className='flex jc-sb mb24'>
          <div className="user__icons flex jc-c gap">
            <Link to={'/personal_account/searches'} className='flex column ai-c'>
              <GiArchiveResearch className='icon' size={26}/>
              <span>My Searches</span>
            </Link>
            <Link to={'/personal_account/favorites'} className='flex column ai-c'>
              <MdFavorite className='icon' size={26}/>
              <span>Favorites</span>
            </Link>
            <Link to={'/personal_account/ads'} className='flex column ai-c'>
              <IoIosListBox className='icon' size={26}/>
              <span>My Ads</span>
            </Link>
          </div>
          <a href='!#' className='btn btn-primary hover-diagonal_light'>Upload</a>
        </div>
        <div className='container__cards flex gap jc-c'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Footer />
    </div>
  )
}

export default UserPage