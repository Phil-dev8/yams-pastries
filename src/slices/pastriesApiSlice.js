import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pastriesApiSlice = createApi({
  reducerPath: "pastriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getPastries: builder.query({
      query: () => ({
        url: "/api/pastries",
        credentials: "include",
      }),
    }),

    getPastriesByID: builder.query({
      query: (id) => ({
        url: `/api/pastrie/${id}`,
        credentials: "include",
      }),
    }),

    addPastrie: builder.mutation({
      query: (data) => ({
        url: "/api/pastrie",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    modifyPastries: builder.mutation({
      query: (data) => ({
        url: `/api/pastrie/${data.id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
    deletePastrie: builder.mutation({
      query: (id) => ({
        url: `/api/pastrie/${id}`,
        method: "DELETE",
        // body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetPastriesQuery,
  useGetPastriesByIDQuery,
  useAddPastrieMutation,
  useModifyPastriesMutation,
  useDeletePastrieMutation,
} = pastriesApiSlice;
