import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBook: builder.query({
      query: ({ page, limit }) => `/books?page=${page}&limit=${limit}`,
      providesTags: ["book"],
    }),
    getBookDetails: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

// export endpoint hooks
export const {
  useCreateBookMutation,
  useGetBookQuery,
  useGetBookDetailsQuery,
} = baseApi;
