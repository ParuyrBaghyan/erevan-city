import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["categoriesApi"],

  endpoints: (builder) => ({
    getParentCategories: builder.mutation({
      query: () => {
        return {
          url: `/Category/GetParentCategories`,
          method: "POST",
          body: {},
        };
      },
      invalidatesTags: ["categoriesApi"],
    }),
    getAllChildren: builder.mutation({
      query: (parentId) => {
        return {
          url: `/Category/GetAllChildren`,
          method: "POST",
          body: { parentId },
        };
      },
      invalidatesTags: ["categoriesApi"],
    }),
  }),
});

export const { useGetParentCategoriesMutation, useGetAllChildrenMutation } =
  categoriesApi;
