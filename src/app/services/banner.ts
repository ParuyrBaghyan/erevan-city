import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["bannerApi"],

  endpoints: (builder) => ({
    getBanners: builder.mutation({
      query: () => {
        return {
          url: `/Banner/GetByType`,
          method: "POST",
          body: { type: 2 },
        };
      },
      invalidatesTags: ["bannerApi"],
    }),
  }),
});

export const { useGetBannersMutation } = bannerApi;


