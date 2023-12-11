import axios from 'axios';
import { Notify } from 'notiflix';

// const API_KEY = '';
// const BASE_URL = 'https://paws-and-claws-store-backend.onrender.com';
const BASE_URL = 'https://paws-and-claws-store.onrender.com';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  page: 1,
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
export async function fetchAllProducts(pageNumber) {
  const config = {
    params: {
      page: pageNumber,
    },
  };

  try {
    const response = await axios.get(`/api/products/allItems`, config);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

//by onePet
export async function fetchProductsByOnePet(onePet, pageNumber) {
  const config = {
    params: {
      page: pageNumber,
    },
  };

  try {
    const response = await axios.get(`/api/products/pets/${onePet}`, config);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
//by onePet
export async function fetchProductsByOnePetCopy(onePet) {
  // const config = {
  //   params: {
  //     page: pageNumber,
  //   },
  // };

  try {
    const response = await axios.get(`/api/products/pets/copy/${onePet}`);

    console.log('response:', response);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

//by oneCategory
export async function fetchProductsByOneCategory(oneCategory, pageNumber) {
  try {
    const response = await axios.get(
      `/api/products/categories/${oneCategory}`,
      {
        params: {
          page: pageNumber,
        },
      },
    );

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

//by oneProductType
export async function fetchProductsByOneProductType(
  oneProductType,
  pageNumber,
) {
  try {
    const response = await axios.get(
      `/api/products/product_types/${oneProductType}`,
      {
        params: {
          page: pageNumber,
        },
      },
    );

    // console.log('response.data:', response.data);
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
// requests by Cart
export async function fetchValidateCartItems(array) {
  try {
    const response = await axios.post(`/api/products/checkBasket/card`, {
      array,
    });
    // console.log('response:', response);

    return response.data;
  } catch (error) {
    // console.log('error:', error);
    // Notify.failure(error.message);
    return error.response.data;
  }
}
export async function BuyProducts(array) {
  try {
    const response = await axios.post(`/api/products/buyProduct`, {
      array,
    });
    console.log('response:', response);

    return response.data;
  } catch (error) {
    console.log('error:', error);
    // Notify.failure(error.message);
    return error.response.data;
  }
}
