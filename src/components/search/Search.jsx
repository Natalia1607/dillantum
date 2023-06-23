import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import SearchFilters from "../Data/SearchFilters/SearchFilters";
import "./searchStyles.scss";

const Search = () => {
  const appearance = () => {
    const elements = document.querySelectorAll(".filter__none");
    elements.forEach((el) => el.classList.toggle("display"));
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
        <form onSubmit={handleSearch} className="flex jc-c ai-c mb24 form-search">
          <input
            placeholder="Enter city, e.g dubai"
            type="text"
            className="select-wrap"
            ref={phraseInputRef}
          />
          <button className="btn flex ai-c">
            <BiSearch className="icon" />
          </button>
        </form>

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
