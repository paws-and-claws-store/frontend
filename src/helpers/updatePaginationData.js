export const updatePaginationData = response => {
  return {
    hasNextPage: response.hasNextPage,
    hasPrevPage: response.hasPrevPage,
    limit: response.limit,
    nextPage: response.nextPage,
    page: response.page,
    prevPage: response.prevPage,
    totalPages: response.totalPages,
  };
};
