import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bayutApi = createApi({
  reducerPath: "bayutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayut.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        process.env.REACT_APP_RAPID_API_KEY
      );
      return headers;
    }, 
  }),

  endpoints: (builder) => ({
    getPropertyList: builder.query({
      query: (purpose) => `/properties/list?locationExternalIDs=5002&purpose=${purpose}`,
    }),
    getTabList: builder.query({
      query: (rentType) => `/properties/list?locationExternalIDs=5002&purpose=for-rent&rentFrequency=${rentType}`,
    }),
    getProperyDetails: builder.query({
      query: (id) => `/properties/detail?externalID=${id}`,
    }),
    /* getServerSideProps: builder.query({
      query: (locationExternalIDs, purpose, categoryExternalID, bathsMin, rentFrequency, minPrice, maxPrice, roomsMin, sort, areaMax) =>
        `/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalId=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`,
    }), 
    getAgencyList: builder.query({
      query: (phrase) => `/agencies/list?query=${phrase}`,
    }), */
  }),
});

export const {
  useGetPropertyListQuery,
  useGetTabListQuery,
  useGetProperyDetailsQuery,
  /* useGetServerSidePropsQuery, 
  useGetAgencyListQuery, */
} = bayutApi;
