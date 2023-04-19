import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import { useLocation } from "react-router-dom";

import millify from 'millify';

import './propertiesItem.scss';

const PropertiesItem = ({
  id,
  price,
  address,
  numOfBed,
  numOfBath,
  image,
  size,
  state,
  rentType,
}) => {
  const location = useLocation();

  return (
    <li className="card__wrapp">
        <p className="card__active icon">{state}</p>
        <img className="card__img" src={image} alt="real-estate" />
        {location.pathname === "/personal_account/favorites" ? (
          <MdOutlineFavorite className="icon card__favourite" size={24} />
        ) : (
          <MdOutlineFavoriteBorder className="icon card__favourite" size={24} />
        )}
      <div className="card__data">
        <h4 className="card__address mb12 flex gap_6">
          {" "}
          <HiOutlineLocationMarker className="icon" />
          <Link to={`/listings/${id}`} className="truncate">
            {address.length > 16 ? `${address.substring(0, 15)}...` : address}
          </Link>
        </h4>
        <p className="card__data_price mb36">
          {`AED ${price}`}<span> / {rentType}</span>
        </p>
        <hr />
        <div className="card__icons mt24">
          <div>
            <RiHotelBedFill className="icon" />{" "}
            <p>
              {numOfBed} <span>Bed</span>
            </p>
          </div>
          <div>
            <FaBath className="icon" />{" "}
            <p>
              {numOfBath} <span>Bath</span>
            </p>
          </div>
          <div>
            <MdSpaceDashboard className="icon" />{" "}
            <p>
              {millify(size)} <span>Sqft</span>
            </p>
          </div>
        </div>
        <Link to={`/listings/${id}`}>
          <button className="btn card__btn">Book Now</button>
        </Link>
      </div>
    </li>
  );
};

export default PropertiesItem;
