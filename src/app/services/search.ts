import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["searchApi"],

  endpoints: (builder) => ({
    getMostSearchedItems: builder.query<{ data: any }, void>({
      query: () => "/Page/Get?type=2",
      providesTags: ["searchApi"],
    }),
    getSearchResult: builder.mutation({
      query: (text) => {
        return {
          url: `/Product/Search`,
          method: "POST",
          body: {
            brands: [],
            categories: [],
            count: 20,
            countries: [],
            isDiscounted: false,
            page: 1,
            priceFrom: null,
            priceTo: null,
            search: text,
            sortBy: 3,
          },
        };
      },
      invalidatesTags: ["searchApi"],
    }),
  }),
});

export const { useGetMostSearchedItemsQuery, useGetSearchResultMutation } =
  searchApi;
