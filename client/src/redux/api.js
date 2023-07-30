import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_BASE_URL}` }),
  reducerPath: "adminPath",
  tagTypes: ["User", "Products", "Customers"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"]
    }),
    getProducts: build.query({
      query: () => 'client/products',
      providesTags: ["Product"]
    }),
    getCustomers: build.query({
      query: () => 'client/customers',
      providesTags: ['Customers']
    })
  }),
});

export const { 
    useGetUserQuery,
    useGetProductsQuery
} = api