import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Search, Footer } from "../../components";
import "./page.scss";
import PropertyList from "../../components/Layout/PropertyList/PropertyList";

const Buy = () => {
  return (
    <div>
      <div className="container">
        <div className="banner">
          <p>Popular searches</p>
          <h1>
            <Link to={"/for-sale/property"}>Buy</Link>
          </h1>
        </div>
        <div className="content__container">
          <Search />
          <Breadcrumb separator=">" className="breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Property for Sale</Breadcrumb.Item>
          </Breadcrumb>
          <PropertyList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
