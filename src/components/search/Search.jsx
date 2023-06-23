import React, { useRef } from "react";
import { useNavigate  } from "react-router-dom";
import { Input } from "antd";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from 'react-icons/bi';
import SearchFilters from "../Data/SearchFilters/SearchFilters";
import "./searchStyles.scss";

const Search = () => {
  const appearance = () => {
    const elements = document.querySelectorAll(".filter__none");
    elements.forEach(el => el.classList.toggle("display"));
  };

  const phraseInputRef = useRef();
  const history = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const enteredPhrase = phraseInputRef.current.value;

    if (enteredPhrase.trim().length <= 2) {
      return;
    }

    history.replace(`/property`); 
  };

  return (
    <div>
      <div className="filter__container flex ai-c jc-sb">
        <div className="filter">
          <form onSubmit={handleSearch} className="flex  ic-c">
            <label htmlFor="text"></label>
            <input
              placeholder="Enter city, e.g dubai"
              type="text"
              className="p-3 px-4 outline-none rounded-l-lg w-full  border-2 border-blue border-r-0 bg-silver"
              ref={phraseInputRef}
            />
            <button className="bg-blue p-4 rounded-r-lg border-2 border-blue ">
              <BiSearch className="text-white font-bold" />
            </button>
          </form>
          {/* <Input
            className="select-wrap"
            placeholder="Enter city, e.g Dubai"
            onChange={(event) => console.log(event)}
          />
          <BiSearch className="icon filter__icon"/> */}
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
