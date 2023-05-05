import React, { useState, useEffect } from "react";
import { filterData, getFilterValues } from "../../../utils/filterData";
import { Select } from 'antd';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const searchProperties = (filterValues) => {
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        [item.name] = item.value
      }
    })
  };

  return (
    <div id="filter__opacity" className="search-filters flex gap_6 jc-c mb12 opacity">
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;
