import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";
import { PartnerDiscounts } from "./interface/partnerDiscounts";

export const partnerDiscountsApi = createApi({
  reducerPath: "partnerDiscountsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["partnerDiscountsApi"],

  endpoints: (builder) => ({
    getPartnerDiscounts: builder.query<{ data: any }, void>({
      query: () =>
        "https://crmapi.yerevan-city.am/api/PartnerAdvertisement/GetActivePartnerAdvertisements/hy",
      providesTags: ["partnerDiscountsApi"],
    }),
  }),
});

export const { useGetPartnerDiscountsQuery } = partnerDiscountsApi;
