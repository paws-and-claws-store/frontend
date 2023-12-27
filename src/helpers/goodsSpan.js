// this function is for return word "товар" with special count
// here the requirements
//1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141 … товар
//2-4, 22-24, 32-34, 42-44, 52-54, 62-64, 72-74, 82-84, 92-94, 102-104, 122-124, 132-134 … товари
//0, 5-20, 25-30, 35-40, 45-50, 55-60, 65-70, 75-80, 85-90, 95-100, 105-120, 125-130 … товарів

export const goodsSpan = docsCount => {
  if (docsCount === 0 || (docsCount >= 5 && docsCount <= 20)) {
    return 'товарів';
  }

  const lastDigit = docsCount % 10;

  if (lastDigit === 1) {
    return 'товар';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'товари';
  } else {
    return 'товарів';
  }
};
