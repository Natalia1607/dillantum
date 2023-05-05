import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertiesItem from "../Data/PropertiesItem/PropertiesItem";
import { Input } from "antd";
import { useGetServerSidePropsQuery } from "../../redux/services/bayut";
import { BsFilter } from "react-icons/bs";

import "./searchStyles.scss";
import SearchFilters from "../Data/SearchFilters/SearchFilters";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Search = () => {
  const appearance = () => {
    const el = document.querySelector("#filter__opacity");
    el.classList.toggle("opacity");
  };

  return (
    <div>
      <div className="filter__container flex ai-c jc-sb">
        <div className="filter">
          <Input
            className="select-wrap"
            placeholder="Search"
            onChange={(event) => console.log(event)}
          />
        </div>
        <div>
          <BsFilter className="icon" style={{ fontSize: "24px" }}  onClick={appearance}/>
        </div>
      </div>
      <SearchFilters />
    </div>
  );
};

export default Search;
