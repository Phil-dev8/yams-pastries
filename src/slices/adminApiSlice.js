import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApiSlice = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      logout: builder.mutation({
        query: () => "/logout",
      }),
    }),
  }),
});

export const { useLoginMutation } = adminApiSlice;
