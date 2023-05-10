import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { Cards, Tabs, Footer, Search } from "../../components";
import "./page.scss";
import PropertyList from "../../components/Layout/PropertyList/PropertyList";

const Rent = () => {
  const location = useLocation();

  return (
    <div>
      <div className="container page__container">
        <div className="banner">
          <p>Popular searches</p>
          <h2>
            <Link to={"/rent"}>Rent</Link>
          </h2>
        </div>
        <div className="content__container">
          <Tabs />
          <div className={location.pathname === "/rent" ? "" : "none"}>
            <Search />
            <Breadcrumb separator=">" className="breadcrumb">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item>Property for Rent</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <PropertyList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
