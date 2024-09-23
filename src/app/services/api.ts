import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Animation from "./interface/animationModel";
import { TrendBrandsResponse } from "./interface/trendBrandModel";
import Headers from "./headers";
import SalesBrands from "./interface/salesBrandsModel";

export const yerevanCityApi = createApi({
  reducerPath: "yerevanCityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["yerevanCityApi"],

  endpoints: (builder) => ({
 

    getTrendBrands: builder.query<{ data: TrendBrandsResponse }, void>({
      query: () => "/Brand/GetTrendingBrand",
      providesTags: ["yerevanCityApi"],
    }),

    getSaleBrands: builder.query<{ data: SalesBrands[] }, void>({
      query: () =>
        "https://crmapi.yerevan-city.am/api/PartnerAdvertisement/GetActivePartnerAdvertisementsLogo",
      providesTags: ["yerevanCityApi"],
    }),

    getSpecialItems: builder.query<{ data: any }, void>({
      query: () => "/Page/Get?type=1",
      providesTags: ["yerevanCityApi"],
    }),

    getActiveCollections: builder.mutation({
      query: () => {
        return {
          url: `/Promo/GetActiveCollections`,
          method: "POST",
          body: {},
        };
      },
      invalidatesTags: ["yerevanCityApi"],
    }),
    getToken: builder.mutation({
      query: (body) => {
        return {
          url: `/Account/RegisterGuest`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["yerevanCityApi"],
    }),


   
  }),
});

export const {
  useGetTrendBrandsQuery,
  useGetSaleBrandsQuery,
  useGetSpecialItemsQuery,
  useGetActiveCollectionsMutation,
  useGetTokenMutation
} = yerevanCityApi;
