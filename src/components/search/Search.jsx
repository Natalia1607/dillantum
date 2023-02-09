import React from 'react';
import './searchStyles.css';

const Search = () => {
  return (
    <div className='filter__container'>
        <form action="#" className='filter'>
            <div className="input-wrap">
                <label>Emirate</label><br />
                <select className="select-wrap">
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Fujairah">Fujairah</option>
                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                </select>
            </div>
            <div className="input-wrap">
                <label htmlFor="site-search">City</label><br />
                <input type="search" name="city"/>
            </div>
            <div className="input-wrap sort">
                <label>Sort by</label><br />
                <select className="select-wrap">
                    <option value="Price (High to Low)">Price (High to Low)</option>
                    <option value="Price (Low to High)">Price (Low to High)</option>
                    <option value="Number of rooms">Number of rooms</option>
                    <option value="Number of saves">Number of saves</option>
                    <option value="Top Rated">Top Rated</option>
                </select>
            </div>
            <button className='btn btn-primary hover-diagonal_light'>Search</button>
        </form>
    </div>
  )
}

export default Search