import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertiesItem from '../Data/PropertiesItem/PropertiesItem';
import { Select, Space, Input  } from 'antd';
import { useGetServerSidePropsQuery } from '../../redux/services/bayut';

import './searchStyles.scss';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Search = () => {
  /* const [] */
  return (
    <div className='filter__container'>
        <div className='filter'>
        <Input 
            className="select-wrap"
            placeholder="Search"
            onChange={(event) => console.log(event)}
        />
        {/* <Space>
            <Select
                className="select-wrap" 
                defaultValue="Dubai"
                onChange={handleChange}
                options={[
                    {
                    value: 'Dubai',
                    label: 'Dubai',
                    },
                    {
                    value: 'Abu Dhabi',
                    label: 'Abu Dhabi',
                    },
                    {
                    value: 'Sharjah',
                    label: 'Sharjah',
                    },
                    {
                    value: 'Ajman',
                    label: 'Ajman',
                    },
                    {
                    value: 'Fujairah',
                    label: 'Fujairah',
                    },
                    {
                    value: 'Umm Al Quwain',
                    label: 'Umm Al Quwain',
                    },
                    {
                    value: 'Ras Al Khaimah',
                    label: 'Ras Al Khaimah',
                    },
                ]}
            />
            <Input 
                className="select-wrap"
                placeholder="City"
            />      
            <Select
                className="select-wrap"
                defaultValue="Price (High to Low)"
                onChange={handleChange}
                options={[
                    {
                    value: 'Price (High to Low)',
                    label: 'Price (High to Low)',
                    },
                    {
                    value: 'Price (Low to High)',
                    label: 'Price (Low to High)',
                    },
                    {
                    value: 'Number of rooms',
                    label: 'Number of rooms',
                    },
                    {
                    value: 'Number of saves',
                    label: 'Number of saves',
                    },
                    {
                    value: 'Top Rated',
                    label: 'Top Rated',
                    },
                ]}
            />      
        </Space> */}
        <button className='btn btn-primary hover-diagonal_light'>Search</button>
        </div>
    </div>
  )
}

export default Search