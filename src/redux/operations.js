import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paws-and-claws-store-backend.onrender.com',
  }),
  //   tagTypes: ['Products'],
  endpoints: builder => ({
    fetchAllProducts: builder.query({
      query: (page = 1) => `/api/products/allItems?page=${page}`,
    }),
    fetchAllStructure: builder.query({
      query: () => `/api/structure/all`,
    }),
    fetchSearch: builder.query({
      query: ({ query, sorting = '' }) =>
        `/api/products/searchByKeyword/card?findBy=${query?.toLowerCase()}${sorting}`,
    }),
  }),
});

export const { useFetchAllProductsQuery, useFetchAllStructureQuery, useFetchSearchQuery } = api;
