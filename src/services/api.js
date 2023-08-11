import axios from 'axios';
import { Notify } from 'notiflix';

// const API_KEY = '';
const BASE_URL = 'https://paws-and-claws-store-backend.onrender.com';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  // api_key: API_KEY,
  // include_adult: 'false',
  // language: 'en-US',
};

//home page
export async function fetchProducts() {
  try {
    const response = await axios.get(`/api/products`);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
//all products
export async function fetchAllProducts() {
  try {
    const response = await axios.get(`/api/products/allItems`);

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

//by onePet
export async function fetchProductsByOnePet(onePet) {
  try {
    const response = await axios.get(`/api/products/pets/${onePet}`);

    console.log('response Pet:', response);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

//by oneCategory
export async function fetchProductsByOneCategory(oneCategory) {
  try {
    const response = await axios.get(`/api/products/categories/${oneCategory}`);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
//by oneProductType
export async function fetchProductsByOneProductType(oneProductType) {
  try {
    const response = await axios.get(
      `/api/products/product_types/${oneProductType}`,
    );

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

// by oneProduct
export async function fetchOneProduct(oneProduct) {
  try {
    const response = await axios.get(`/api/products/${oneProduct}`);

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

// requests by category

export async function fetchAllPets() {
  try {
    const response = await axios.get(`/api/structure/pets`);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export async function fetchCurrentCategories(idPet) {
  try {
    const response = await axios.get(`/api/structure/pets/${idPet}/categories`);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
export async function fetchCurrentVariants(idPet, idCategory) {
  try {
    const response = await axios.get(
      `/api/structure/pets/${idPet}/categories/${idCategory}/variants`,
    );

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

// requests by category
export async function fetchAllStructure() {
  try {
    const response = await axios.get(`/api/structure/all`);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
