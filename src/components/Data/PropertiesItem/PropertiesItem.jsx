import React from "react";
import { Link } from "react-router-dom";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { useLocation } from "react-router-dom";
import millify from 'millify';

import './propertiesItemStyles.scss';

const PropertiesItem = ({
  id,
  rooms,
  baths,
  size,
  coverPhoto,
  price,
  title,
  city,
  address,
  isVerified,
  agency,
  rentType,
  purpose,
}) => {
  const location = useLocation();

  return (
    <li className="card card__wrapp">
        <p className="card__active">{isVerified && <GoVerified className="icon"/>}</p>
        <img className="card__img" src={coverPhoto} alt="real-estate" />
        {location.pathname === "/personal_account/favorites" ? ( 
          <MdOutlineFavorite className="icon card__favourite" size={24} />
        ) : (
          <MdOutlineFavoriteBorder className="icon card__favourite" size={24} />
        )}
      <div className="card__data">
        <h4 className="mb12">   
          <Link to={`/listings/${id}`} className="truncate">
            {title.length > 16 ? `${title.substring(0, 15)}...` : title}
          </Link>
        </h4>
        <img className="card__agency" src={agency?.logo?.url} alt="agency" />
        <p className="flex ai-c gap_6"><HiOutlineLocationMarker className="icon" />{city} / {address}</p>
        <p className="card__data_price mb36">
          {`AED ${price}`}<span>{`${rentType}` == "null" ? "" : ` / ${rentType}`}</span>
        </p>
        <hr />
        <div className="card__icons mt24">
          <div>
            <RiHotelBedFill className="icon" />
            <p>
              {rooms} <span>Bed</span>
            </p>
          </div>
          <div>
            <FaBath className="icon" />
            <p>
              {baths} <span>Bath</span>
            </p>
          </div>
          <div>
            <MdSpaceDashboard className="icon" />
            <p>
              {millify(size)} <span>Sqft</span>
            </p>
          </div>
        </div>
        <Link to={`/${purpose}/property/${id}`}>
          <button className="btn card__btn">Book Now</button>
        </Link>
      </div>
    </li>
  );
};

export default PropertiesItem;
