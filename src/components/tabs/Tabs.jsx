import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import TabsList from '../Layout/TabsList/TabsList';
import './tabsStyles.scss'; 

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return ( 
    <>
        <div className='tabs__container md-flex'>
            <div className="tabs__container_block flex jc-c">
            {/* to={`/${purpose}/property/${id}`} */}
                <Link to={'/for-rent/property/daily'} className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Short Term (Daily)</Link>
                <Link to={'/for-rent/property/weekly'} className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Short Term (Monthly)</Link>
                <Link to={'/for-rent/property/monthly'} className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Long Term (Yearly)</Link>
                <Link to={'/for-rent/property/yearly'} className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>Commercial for Rent</Link>
            </div>
            <div className="content-tabs">
                <dv className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/for-rent/property'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Short Term (Daily)</Breadcrumb.Item>
                    </Breadcrumb>
                    <TabsList />
                </dv>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/for-rent/property'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Short Term (Monthly)</Breadcrumb.Item>
                    </Breadcrumb>
                    
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/for-rent/property'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Long Term (Yearly)</Breadcrumb.Item>
                    </Breadcrumb>
                    
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                    <Breadcrumb separator=">" className='breadcrumb mb24'>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/for-rent/property'>Property for Rent</Breadcrumb.Item>
                        <Breadcrumb.Item>Commercial for Rent</Breadcrumb.Item>
                    </Breadcrumb>     
                </div>
            </div>
        </div>
    </>
  )
}

export default Tabs