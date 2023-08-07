import axios from 'axios';
import { Notify } from 'notiflix';

// const API_KEY = '';
const BASE_URL = 'https://paws-and-claws-store-backend.onrender.com/api';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  // api_key: API_KEY,
  // include_adult: 'false',
  // language: 'en-US',
};

export async function fetchProducts(page = 1) {
  const config = {
    params: {
      page: page,
    },
  };

  try {
    const response = await axios.get(`/products`, config);

    console.log('response:', response);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export async function fetchAllProducts() {
  try {
    const response = await axios.get(`/products/allItems`);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

//not working yet
// export async function searchProducts(searchValue) {
//   const config = {
//     params: {
//       query: searchValue,
//     },
//   };

//   try {
//     const response = await axios.get(`search/products`, config);
//     return response.data;
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }

export async function getProductDetails(product_id) {
  try {
    const response = await axios.get(`products/${product_id}`);

    console.log('response:', response);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

//not working yet
// export async function getproductReviews(product_id) {
//   try {
//     const response = await axios.get(`products/${product_id}/reviews`);

//     return response.data;
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }
