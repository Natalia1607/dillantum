import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PropertiesItem from "../../Data/PropertiesItem/PropertiesItem";
import { useGetPropertyListQuery } from "../../../redux/services/bayut";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";

import "./propertyListStyles.scss";
import Search from "../../Search/Search";
import { Breadcrumb } from "antd";

const PropertyList = () => {
  const location = useLocation();
  const [filter, setFilter] = useState("");
  const params = useParams();
  const { purpose } = params;
  const { data, isFetching, error } = useGetPropertyListQuery(purpose);

  const propertiesData = data?.hits;
  const mappedList = propertiesData?.map((property) => {
    return (
      <PropertiesItem
        key={property?.externalID}
        id={property?.externalID}
        rooms={property?.rooms}
        baths={property?.baths}
        size={property?.area}
        price={property?.price}
        title={property?.location[2].name}
        city={property?.location[0].name}
        address={property?.location[1].name}
        agency={property?.agency}
        coverPhoto={property?.coverPhoto?.url}
        isVerified={property?.isVerified}
        rentType={property?.rentFrequency}
        purpose={property?.purpose}
      />
    );
  });

  return (
    <section>
      <div className="banner">
        <p>Popular searches</p>
        <h1>
          {location.pathname === "/for-sale/property" ? (
            <Link to={"/for-sale/property"}>Buy</Link>
          ) : (
            <Link to={"/for-rent/property"}>Rent</Link>
          )}
        </h1>
      </div>
      <div className="content__container">
        {location.pathname !== "/for-sale/property" && (
          <>
            <div className="tabs__container md-flex">
              <div className="tabs__container_block flex jc-c">
                <Link to={"/for-rent/property/daily"} className="tabs">
                  Short Term (Daily)
                </Link>
                <Link to={"/for-rent/property/weekly"} className="tabs">
                  Short Term (Weekly)
                </Link>
                <Link to={"/for-rent/property/monthly"} className="tabs">
                  Long Term (Monthly)
                </Link>
                <Link to={"/for-rent/property/yearly"} className="tabs">
                  Long Term (Yearly)
                </Link>
              </div>
            </div>
          </>
        )}
        <Search />
        <Breadcrumb separator=">" className="breadcrumb">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Property {purpose}</Breadcrumb.Item>
        </Breadcrumb>

        <ul className="propery-list flex gap">
          {isFetching && <Loader />}
          {!isFetching && !error && mappedList}
          {!isFetching && mappedList?.length === 0 && <Error />}
        </ul>
      </div>
    </section>
  );
};

export default PropertyList;
