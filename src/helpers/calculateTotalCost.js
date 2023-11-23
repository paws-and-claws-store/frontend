export const calculateTotalCost = (cartStore, unavailable) => {
  const filteredCartStore = cartStore.filter(item => {
    const isAvailable = !unavailable.some(
      unavailableItem => unavailableItem.productCode === item.productCode,
    );

    return isAvailable;
  });

  return filteredCartStore.reduce((total, item) => {
    const itemCost = item.sale
      ? item.sale * item.cardCount
      : item.price * item.cardCount;
    return total + itemCost;
  }, 0);
};
