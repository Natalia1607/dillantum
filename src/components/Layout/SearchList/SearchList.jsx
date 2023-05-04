import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertiesItem from "../../Data/PropertiesItem/PropertiesItem";
import "./searchList.scss";
import Search from "../../Search/Search";

import { useGetProperyListQuery } from "../../../redux/services/bayut";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";

const SearchList = ({ filter }) => {
  const { data, isFetching, error } = useGetProperyListQuery();
  const propertiesData = data?.hits;
  
  const [list, setList] = useState([]);
  const getProperyList = () => {
    axios
      .get("https://bayut.p.rapidapi.com/properties/list")
      .then((response) => {
        setList(response.data);
      });
  };
  useEffect(() => {
    getProperyList();
  }, []);

  return (
    <section>
      <form>
        <Search />
      </form>
      <ul className="propery-list flex gap">
        {list.map((property, index) => {
          return <PropertiesItem property={property} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default SearchList;
