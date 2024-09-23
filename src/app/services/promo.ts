import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";

export const promoApi = createApi({
  reducerPath: "promoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["promoApi"],

  endpoints: (builder) => ({
    getPromo: builder.mutation({
      query: (body) => {
        return {
          url: `/Promo/GetAll`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["promoApi"],
    }),
  }),
});

export const { useGetPromoMutation } = promoApi;
