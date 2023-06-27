import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { useGetAgencyPropertyListQuery } from "../../../redux/services/bayut";

import PropertiesItem from "../../Data/PropertiesItem/PropertiesItem";
import Search from "../../Search/Search";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";
import Banner from "../../Banner/Banner";

import "../PropertyList/propertyListStyles.scss";

const AgenciesPropertyList = () => {
  const params = useParams();
  const { agencySlug } = params;
  const { data, isFetching, error } = useGetAgencyPropertyListQuery(agencySlug);
  const name = agencySlug.replace(/[^a-z]/g, ' ').toUpperCase();
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
      <Banner title={name}/>
      <div className="content__container">
        <Search />
        <Breadcrumb separator=">" className="breadcrumb">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/agencies">Agencies</Breadcrumb.Item>
          <Breadcrumb.Item>Property</Breadcrumb.Item>
        </Breadcrumb>

        <ul className="propery-list flex gap">
          {isFetching && <Loader />}
          {!isFetching && !error && mappedList}
          {!isFetching && mappedList?.length === 0 && <Error />}
        </ul>
      </div>
    </section>
  )
}

export default AgenciesPropertyList