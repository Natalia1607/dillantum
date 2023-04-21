import React, { Fragment, useEffect, useRef } from "react";
/* import { useParams } from "react-router-dom"; */
import PropertyDetailItems from "../components/Data/PropertyDetailItems/PropertyDetailItems";

import Loader from "../components/UI/Loader/Loader";
import Error from "../components/UI/Error/Error";

import { useGetProperyDetailsQuery } from "../redux/services/bayut";
import { Footer } from "../components";

const PropertyPage = () => {
  /* const params = useParams();
  const { listingId } = params; */
  const { data, isFetching, error } = useGetProperyDetailsQuery(6257582);

  return (
    <>
      <section className="mb48">
        <div>
          {!isFetching && !error && (
            <PropertyDetailItems
              key={data?.externalID}
              id={data?.externalID}
              rooms={data?.rooms}
              baths={data?.baths}
              size={data?.area}
              price={data?.price}
              title={data?.location[2].name}
              city={data?.location[0].name}
              address={data?.location[1].name}
              coverPhoto={data?.coverPhoto?.url}
              isVerified={data?.isVerified}
              rentType={data?.rentFrequency}
              description={data?.description}
              amenities={data?.amenities}
              photos={data?.photos}
              phoneNumber={data?.phoneNumber}
              agencyName={data?.agency?.name}
              contactName={data?.contactName}
              logo={data?.agency?.logo?.url}
            /> 
          )}
          {isFetching && <Loader />}
          {!isFetching && data?.length === 0 && <Error />}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PropertyPage;
