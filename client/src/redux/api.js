import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_BASE_URL}` }),
  reducerPath: "adminPath",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography", "Sales", "Admin", "Performance", 'Dashboard'],
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
    getSales: build.query({
      query: () => 'sales/sales',
      providesTags: ['Sales']
    }),
    getAdmins: build.query({
      query: () => 'management/admin',
      provideTags: ['Admin']
    }),
    getPerformance: build.query({
     query: (id) => `management/performance/${id}`,
      provideTags: ['Performance']
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { 
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetPerformanceQuery,
    useGetDashboardQuery
} = api