import React from "react";
import { useParams } from "react-router-dom";
import PropertyDetailItems from "../components/Data/PropertyDetailItems/PropertyDetailItems";

import Loader from "../components/UI/Loader/Loader";
import Error from "../components/UI/Error/Error";

import { useGetProperyDetailsQuery } from "../redux/services/bayut";
import { Footer } from "../components";

const PropertyPage = () => {
  const params = useParams();
  const { propertyId } = params;
  const { data, isFetching, error } = useGetProperyDetailsQuery(propertyId);

  return (
    <>
      <section className="mb48">
        <div>
          {!isFetching && !error && (
            <PropertyDetailItems
              key={data?.externalID}
              id={data?.externalID}
              coverPhoto={data?.coverPhoto?.url}
              floorPlan={data?.floorPlan?.url}
              title={data?.location[2].name}
              city={data?.location[0].name}
              address={data?.location[1].name}
              rooms={data?.rooms}
              baths={data?.baths}
              size={data?.area}
              price={data?.price}
              isVerified={data?.verification?.status}
              rentType={data?.rentFrequency}
              description={data?.description}
              amenities={data?.amenities}
              photos={data?.photos}
              logo={data?.agency?.logo?.url}
              agencyName={data?.agency?.name}
              contactName={data?.contactName}
              phoneNumber={data?.phoneNumber}
              type={data?.category[1]?.name}
              purpose={data?.purpose}
              geoLat={data?.geography?.lat}
              geoLng={data?.geography?.lng}
              furnishing={data?.furnishingStatus}
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
