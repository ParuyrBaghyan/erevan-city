import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "./headers";

export const branchesApi = createApi({
  reducerPath: "branchesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apishopv2.yerevan-city.am/api/Store/GetAllWeb",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["branchesApi"],

  endpoints: (builder) => ({
    getAllWeb: builder.query<{ data: any }, void>({
      query: () => "/Store/GetAllWeb",
      providesTags: ["branchesApi"],
    }),
  }),
});

export const { useGetAllWebQuery } = branchesApi;
