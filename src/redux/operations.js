import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { apiController } from 'pages/Search';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paws-and-claws-store-backend.onrender.com',
  }),
  //   tagTypes: ['Products'],
  endpoints: builder => ({
    fetchAllProducts: builder.query({
      query: ({ params }) => ({
        url: `/api/products/allItems`,
        params: {
          ...params,
        },
      }),
    }),
    fetchAllStructure: builder.query({
      query: () => `/api/structure/all`,
    }),
    fetchSearch: builder.query({
      query: ({ signal, params }) => ({
        url: `/api/products/searchByKeyword/card`,
        signal,
        params: {
          ...params,
        },
      }),
    }),

    fetchProductsByOneCategory: builder.query({
      query: ({ oneCategory, params }) => ({
        url: `/api/products/categories/${oneCategory}`,

        params: {
          ...params,
        },
      }),
    }),
    fetchProductsByOnePet: builder.query({
      query: ({ pet, params }) => ({
        url: `/api/products/pets/${pet}`,

        params: {
          ...params,
        },
      }),
    }),

    fetchProductsByOneProductType: builder.query({
      query: ({ productType, params }) => ({
        url: `/api/products/product_types/${productType}`,

        params: {
          ...params,
        },
      }),
    }),

    fetchOneProduct: builder.query({
      query: oneProduct => ({
        url: `/api/products/${oneProduct}`,
      }),
    }),

    fetchProducts: builder.query({
      query: () => ({
        url: `/api/products`,
      }),
    }),
  }),
});

export const {
  useFetchAllProductsQuery,
  useFetchAllStructureQuery,
  useFetchSearchQuery,
  useFetchProductsByOneCategoryQuery,
  useFetchProductsByOnePetQuery,
  useFetchProductsByOneProductTypeQuery,
  useFetchOneProductQuery,
  useFetchProductsQuery,
} = api;
