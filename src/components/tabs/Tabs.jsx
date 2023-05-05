import React, { useState } from 'react';
import { Breadcrumb, Select, Space, } from 'antd';
import { Link } from 'react-router-dom';
import Cards from '../card/Card';
import Search from '../Search/Search';
import Footer from '../Footer';
import './tabsStyles.scss'; 

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
        <div className='tabs__container md-flex'>
            <div className="block-tabs flex jc-c">
                <Link to={'/rent/rent-daily'} className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Short Term (Daily)</Link>
                <Link to={'/rent/rent-monthly'} className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Short Term (Monthly)</Link>
                <Link to={'/rent/rent-yearly'} className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Long Term (Yearly)</Link>
                <Link to={'/rent/rent-commercial'} className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>Commercial for Rent</Link>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Search />
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/rent'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Short Term (Daily)</Breadcrumb.Item>
                    </Breadcrumb>
                    <Cards /> 
                    <Cards /> 
                    <Cards /> 
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <Search />
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/rent'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Short Term (Monthly)</Breadcrumb.Item>
                    </Breadcrumb>
                    <Cards /> 
                    <Cards /> 
                    <Cards />
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    <Search />
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/rent'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Long Term (Yearly)</Breadcrumb.Item>
                    </Breadcrumb>
                    <Cards /> 
                    <Cards /> 
                    <Cards />
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                    <Search />
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/rent'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Commercial for Rent</Breadcrumb.Item>
                    </Breadcrumb>
                    <Cards /> 
                    <Cards /> 
                    <Cards />
                </div>
            </div>
        </div>
    </>
  )
}

export default Tabs