import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shelfy-server.vercel.app/api",
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
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
export const { useCreateBookMutation } = baseApi;

export default baseApi;
