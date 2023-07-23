export const groupBy = function (arr, key) {
  return arr.reduce(function (acc, x) {
    (acc[x[key]] = acc[x[key]] || []).push(x);
    return acc;
  }, {});
};
