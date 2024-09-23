import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";

export const animationsApi = createApi({
  reducerPath: "animationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["animationsApi"],

  endpoints: (builder) => ({
    getAnimations: builder.query<{ data: Animation[] }, void>({
        query: () => "/Settings/GetAnimations",
        providesTags: ["animationsApi"],
      }),
  }),
});

export const { useGetAnimationsQuery } = animationsApi;


