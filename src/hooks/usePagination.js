import { updatePaginationData } from 'helpers';
import { useEffect, useState } from 'react';

export function usePagination({
  response,
  isFetching,
  isError,
  setCurrentPage,
  currentPage,
  sortingType,
}) {
  const [productsList, setProductsList] = useState([]);
  const [paginationData, setPaginationData] = useState({
    hasNextPage: false,
    hasPrevPage: false,
    limit: null,
    nextPage: null,
    page: 1,
    prevPage: null,
    totalPages: null,
  });
  const [loadMoreClicked, setLoadMoreClicked] = useState(false); // Окремий стан для слідкування за натисканням кнопки "Load More"
  const [pageNumberClicked, setPageNumberClicked] = useState(false);

  useEffect(() => {
    async function fetchInitialData() {
      if (loadMoreClicked && !sortingType && !pageNumberClicked) {
        setProductsList(prevState => [...prevState, ...response.docs]);
        setPaginationData(updatePaginationData(response));
        return;
      }

      if (!loadMoreClicked && currentPage === 1 && !pageNumberClicked) {
        setProductsList([...response.docs]);
        setLoadMoreClicked(false);
        setPaginationData(updatePaginationData(response));
        return;
      }

      if (loadMoreClicked && sortingType && currentPage === 1) {
        setProductsList(response.docs);
        setPaginationData(updatePaginationData(response));
        return;
      }

      if (
        loadMoreClicked &&
        sortingType &&
        currentPage !== 1 &&
        !pageNumberClicked
      ) {
        setProductsList(prevState => [...prevState, ...response.docs]);
        setPaginationData(updatePaginationData(response));
        setLoadMoreClicked(false);
        return;
      }

      if (!loadMoreClicked && pageNumberClicked) {
        setProductsList(response.docs);
        setPaginationData(updatePaginationData(response));
        return;
      }
    }

    if (!isFetching && !isError) {
      fetchInitialData();
    }
  }, [
    currentPage,
    isError,
    isFetching,
    loadMoreClicked,
    pageNumberClicked,
    response,
    sortingType,
  ]);

  const onPageChange = pageNumber => {
    console.log('pageNumber:', pageNumber);
    // При кліку на номер сторінки через пагінацію, змініть стан
    setLoadMoreClicked(false);
    setPageNumberClicked(true);
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onAddPage = pageNumber => {
    // При натисканні на кнопку "Load More", змініть стан
    setLoadMoreClicked(true);
    setPageNumberClicked(false);
    setCurrentPage(pageNumber + 1);
  };

  return {
    productsList,
    paginationData,
    onAddPage,
    onPageChange,
    currentPage,
    loadMoreClicked,
  };
}
