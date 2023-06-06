import React from "react";
import { useParams, Link } from "react-router-dom";
import PropertiesItem from "../../Data/PropertiesItem/PropertiesItem";
import { useGetTabListQuery } from "../../../redux/services/bayut";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";

import "./tabsListStyles.scss";

const TabsList = () => {
  const params = useParams();
  const { rentFrequency } = params;
  const { data, isFetching, error } = useGetTabListQuery(rentFrequency);
  const propertiesData = data?.hits;

  const mappedList = propertiesData?.map((property) => {
    return (
      <>
      <Link to={`/for-rent/property/${property?.rentFrequency}`}>Short Term ({`${property?.rentFrequency}`})</Link>
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
      </>
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

export default TabsList;
