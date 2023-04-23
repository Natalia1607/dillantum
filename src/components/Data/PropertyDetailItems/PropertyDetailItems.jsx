import React from "react";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import millify from "millify";
import Fancybox from "../../fancybox/Fancybox";
import "./propertyDetalItems.scss";

const PropertyDetailItems = ({
  id,
  coverPhoto,
  photos,
  floorPlan,
  title,
  city,
  address,
  rooms,
  baths,
  size,
  price,
  isVerified,
  rentType,
  description,
  amenities,
  phoneNumber,
  agencyName,
  contactName,
  logo,
  type,
  purpose,
}) => {
  return (
    <div className="property__container container pt24">
      <div className="property__image mb12">
        <img src={coverPhoto} alt="real estate" />
      </div>
      <div className="mb24 flex gap">
      <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <a data-fancybox="gallery" href={`${photos[0]?.url}`} className="property__link flex ai-c">
            <HiOutlinePhotograph className="icon" />
            &nbsp;Photos
          </a>
          {photos?.map((snap) => (
            <a data-fancybox="gallery" href={snap.url}>
              <img
                className="fancybox__img"
                alt="Properties"
                key={snap.externalID}
                src={snap.url}
                width="200"
                height="150"
              />
            </a>
          ))}
        </Fancybox>
        <a href="#" className="property__link flex ai-c">
          <MdSpaceDashboard className="icon" />
          &nbsp;Floor plan
        </a>
 
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
      <div className="property__desc mb24">
        <h3 className="property__title mb12">Property Information</h3>
        <ul>
          <li>
            Type <span>{type}</span>
          </li>
          <li>
            Purpose <span>{purpose}</span>
          </li>
          <li>
            Status <span>{isVerified}</span>
          </li>
        </ul>
      </div>
      <div className="property__desc mb24">
        <h3 className="property__title mb12">
          Broker's Details / Agency (вынесла бы в сайдбар справа)
        </h3>
        <div className="flex gap">
          <div className="agency__logo">
            <img src={logo} alt="real-estate" className="" />
          </div>
          <div className="">
            <h4 className="">
              <span className="">Agency:</span> {agencyName}
            </h4>
            {phoneNumber?.phone || phoneNumber?.mobile ? (
              <div>
                <span className="icon">
                  <BsFillTelephoneFill />{" "}
                </span>
                <a href={`tel:${phoneNumber.phone || phoneNumber.mobile}`}>
                  {phoneNumber.phone || phoneNumber.mobile}
                </a>
              </div>
            ) : (
              <></>
            )}
            {phoneNumber?.whatsapp ? (
              <div>
                <span className="icon">
                  <BsWhatsapp />{" "}
                </span>
                <a
                  href={`https://wa.me/${phoneNumber.whatsapp}`}
                  target="_blank"
                >
                  {phoneNumber.whatsapp}
                </a>
              </div>
            ) : (
              <></>
            )}
            <div>
              <h4 className="">
                <span className="">Contact Person: </span> {contactName}
              </h4>
            </div>
          </div>
        </div>
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
