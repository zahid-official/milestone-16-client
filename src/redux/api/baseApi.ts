import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["book", "bookDetails"],
  endpoints: (builder) => ({
    // all books
    getBook: builder.query({
      query: ({ page, limit }) => `/books?page=${page}&limit=${limit}`,
      providesTags: ["book"],
    }),

    // single book
    getBookDetails: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["book", "bookDetails"],
    }),

    // create book
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book", "bookDetails"],
    }),

    // update book
    updateBook: builder.mutation({
      query: (bookData) => ({
        url: `/books/${bookData?.id}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["book", "bookDetails"],
    }),

    // create borrow book
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book", "bookDetails"],
    }),
  }),
});

// export endpoint hooks
export const {
  useCreateBookMutation,
  useGetBookQuery,
  useGetBookDetailsQuery,
  useUpdateBookMutation,
  useBorrowBookMutation,
} = baseApi;
