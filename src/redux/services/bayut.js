import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bayutApi = createApi({
  reducerPath: "bayutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayut.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "db5881c0ddmshc3a33b61c0fdf36p119379jsn2b45c9900b22"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProperyList: builder.query({
      query: (purpose) => `/properties/list?locationExternalIDs=5002&purpose=${purpose}`,
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
  useGetProperyListQuery,
  useGetProperyDetailsQuery,
  /* useGetServerSidePropsQuery, 
  useGetAgencyListQuery, */
} = bayutApi;
