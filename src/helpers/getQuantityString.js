export const getQuantityString = number => {
  // Check for ending 1, except when the number ends in 11
  if (number % 10 === 1 && number % 100 !== 11) {
    return `Доступна ${number} шт.`;
  } else {
    return `Доступно ${number} шт.`;
  }
};
