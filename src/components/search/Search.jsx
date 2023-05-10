import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertiesItem from "../Data/PropertiesItem/PropertiesItem";
import { Input } from "antd";
import { useGetServerSidePropsQuery } from "../../redux/services/bayut";
import { BsFilter } from "react-icons/bs";

import "./searchStyles.scss";
import SearchFilters from "../Data/SearchFilters/SearchFilters";
import { BiSearch } from 'react-icons/bi';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Search = () => {
  const appearance = () => {
    const elements = document.querySelectorAll(".filter__none");
    elements.forEach(el => el.classList.toggle("display"));
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
          <BiSearch className="icon filter__icon"/>
        </div>
        <div onClick={appearance}>
          <BsFilter className="icon" style={{ fontSize: "24px" }} />
        </div>
      </div>
      <div className="filter__none">
        <SearchFilters />
      </div>
    </div>
  );
};

export default Search;
