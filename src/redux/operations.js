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
      query: (page = 1) => `/api/products/allItems?page=${page}`,
    }),
    fetchAllStructure: builder.query({
      query: () => `/api/structure/all`,
    }),
    fetchSearch: builder.query({
      query: ({ query, sorting = '', signal }) => ({
        url: `/api/products/searchByKeyword/card?findBy=${query?.toLowerCase()}${sorting}`,
        signal,
      }),
    }),

    fetchProductsByOneCategory: builder.query({
      query: (oneCategory, pageNumber) => ({
        url: `/api/products/categories/${oneCategory}`,

        params: {
          page: pageNumber,
        },
      }),
    }),
    fetchProductsByOnePet: builder.query({
      query: (onePet, pageNumber) => ({
        url: `/api/products/pets/${onePet}`,

        params: {
          page: pageNumber,
        },
      }),
    }),

    fetchProductsByOneProductType: builder.query({
      query: (oneProductType, pageNumber) => ({
        url: `/api/products/product_types/${oneProductType}`,

        params: {
          page: pageNumber,
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

    fetchValidateCartItems: builder.mutation({
      query: array => ({
        url: '/api/products/checkBasket/card',
        method: 'POST',
        body: { array },
      }),
      transformResponse: response => response.data,
      invalidatesTags: ['Products'],
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
  useFetchValidateCartItemsMutation,
} = api;
console.log('api:', api);
