import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { Tabs, Search } from "../../components";
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
            {location.pathname === "/for-sale/property" ? (
              <Link to={"/for-sale/property"}>Buy</Link>
            ) : (
              <Link to={"/for-rent/property"}>Rent</Link>
            )}
          </h2>
        </div>
        <div className="content__container">
          {location.pathname === "/for-rent/property" && (
            <>
              <Tabs />
              <div>
                <Search />
                <Breadcrumb separator=">" className="breadcrumb">
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item>Property for Rent</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </>
          )}
          {location.pathname === "/for-sale/property" && (
            <div>
              <Search />
              <Breadcrumb separator=">" className="breadcrumb">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Property for Buy</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          )}
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Rent;
