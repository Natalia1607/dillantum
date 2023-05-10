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
          <h2>
            <Link to={"/buy"}>Buy</Link>
          </h2>
        </div>
        <div className="content__container">
          <Search />
          <Breadcrumb separator=">" className="breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Property for Buy</Breadcrumb.Item>
          </Breadcrumb>
          <PropertyList />
          <div className="cards-wrapp">
            <h3 className="mt24">
              <a href="#">Our recommendations</a>
            </h3>
          </div>
          <div className="cards-wrapp">
            <h3>
              <a href="#">Most viewed</a>
            </h3>
          </div>
          <div className="cards-wrapp">
            <h3>
              <a href="#">Most recent</a>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
