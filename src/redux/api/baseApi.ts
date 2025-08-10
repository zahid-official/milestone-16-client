import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shelfy-server.vercel.app/api",
  }),
  tagTypes: ["book", "bookDetails", "borrowSummary"],
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

    // delete book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["book", "bookDetails"],
    }),

    // borrow book summary
    borrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["borrowSummary"],
    }),

    // create borrow book
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book", "bookDetails", "borrowSummary"],
    }),
  }),
});

// export endpoint hooks
export const {
  useGetBookQuery,
  useCreateBookMutation,
  useGetBookDetailsQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useBorrowSummaryQuery,
} = baseApi;
