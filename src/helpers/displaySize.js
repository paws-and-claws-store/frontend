export const displaySize = size => {
  if (size > 999) {
    size = size / 1000;
    return <span>{size} кг</span>;
  } else {
    return <span>{size} г</span>;
  }
};
