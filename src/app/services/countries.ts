import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["countriesApi"],

  endpoints: (builder) => ({
    getAllCountries: builder.mutation({
      query: () => {
        return {
          url: `/Country/GetAll`,
          method: "POST",
          body: { search: "" },
        };
      },
      invalidatesTags: ["countriesApi"],
    }),
  }),
});

export const { useGetAllCountriesMutation } = countriesApi;
