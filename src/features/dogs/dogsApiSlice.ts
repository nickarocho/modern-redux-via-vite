// RTK Query - *beta
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

// API slice - whole app might have one or two of these
// - ONE api slice for the base server
// - different endpoints inside for each sub-url
export const dogsApiSlice = createApi({
  // where are we keeping the returned data in the reducers
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = dogsApiSlice;
