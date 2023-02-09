import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { Cards, Tabs, Search, Footer } from '../components';
import './page.css';

const Rent = () => {
  const location = useLocation(); 

  return (
    <div className="container page__container">
        <div className='banner'>
            <p>Popular searches</p>
            <h2><Link to={'/rent'}>Rent</Link></h2>
        </div>
        <div className="content__container">
            <Tabs />
            <div className={location.pathname === '/rent' ? "" : "none"}>
                <Search />
                <Breadcrumb separator=">" className='breadcrumb'>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Property for Rent</Breadcrumb.Item>
                </Breadcrumb>

                <div className='cards-wrapp'>
                    <h3 className='mt24'><a href="#">Our recommendations</a></h3>
                    <div className='container__cards flex gap jc-c'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
                <div className='cards-wrapp'>
                    <h3><a href="#">Most viewed</a></h3>
                    <div className='container__cards flex gap jc-c'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
                <div className='cards-wrapp'>
                    <h3><a href="#">Most recent</a></h3>
                    <div className='container__cards flex gap jc-c'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Rent