export const unavailableFilterProducts = (cartStore, unavailableArrayCode) => {
  // Використання методу filter для отримання товарів за вказаними кодами
  const filteredProducts = cartStore.filter(function (product) {
    return unavailableArrayCode.includes(product.productCode);
  });

  // Створення нового масиву з назвами товарів
  const productNames = filteredProducts.map(function (product) {
    return product.productName;
  });

  return productNames;
};
