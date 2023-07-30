import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_BASE_URL}` }),
  reducerPath: "adminPath",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography"],
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
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: 'client/transaction',
        method: 'GET',
        params: { page, pageSize, sort, search }
      }),
      provideTags: ['Transactions']
    }),
    getGeography: build.query({
      query: () => 'client/geography',
      providesTags: ['Geography']
    }),
  }),
});

export const { 
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery
} = api