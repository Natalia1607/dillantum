import React, { Fragment } from "react";
import PropertiesItem from "../../Data/PropertiesItem/PropertiesItem";

import { useGetProperyListQuery } from "../../../redux/services/bayut";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";

import './propertyListing.scss';

const Properties = () => {
  const { data, isFetching, error } = useGetProperyListQuery();
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
      />
    );
  });

  return (
      <section>
          <ul className="propery-list flex gap">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList?.length === 0 && <Error />}
          </ul>
      </section>
  );
};

export default Properties;
