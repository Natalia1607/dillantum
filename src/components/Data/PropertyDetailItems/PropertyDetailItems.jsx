import React, { Fragment, useState } from "react";

import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import millify from "millify";

import "./propertyDetalItems.scss";

const PropertyDetailItems = ({
  id,
  title,
  city,
  address,
  rooms,
  baths,
  size,
  price,
  coverPhoto,
  isVerified,
  rentType,
  description,
  amenities,
  phoneNumber,
  agencyName,
  contactName,
  logo,
}) => {
  return (
    <div className="property__container container pt24">
      <div className="property__image mb48">
        <img src={coverPhoto} alt="real estate" />
      </div>
      <p className="property__price mb24">
        {`AED ${price}`} /{rentType}
      </p>
      <p className="property__address mb24">
        {title}, {address}, {city}
      </p>
      <div className="flex gap mb24">
        <div className="property__icon flex ai-c gap_6">
          <RiHotelBedFill className="icon" />
          <p>
            {rooms} <span>Bed</span>
          </p>
        </div>
        <div className="property__icon flex ai-c gap_6">
          <FaBath className="icon" />
          <p>
            {baths} <span>Bath</span>
          </p>
        </div>
        <div className="property__icon flex ai-c gap_6">
          <MdSpaceDashboard className="icon" />
          <p>
            {millify(size)} <span>Sqft</span>
          </p>
        </div>
      </div>
      <div className="property__desc mb24">
        <h3 className="property__title mb12">Description</h3>
        <div>{description}</div>
      </div>
      <div>
        {amenities.length && <h3 className="mb12">Amenities:</h3>}
        <div className="property__amenities flex gap_6">
          {amenities?.map((feature) => (
            <span key={feature.externalGroupID} className="property__feature">
              {feature.text}
            </span>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PropertyDetailItems;
