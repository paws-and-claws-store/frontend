import { updatePaginationData } from 'helpers';
import { useEffect, useState } from 'react';

export function usePagination({
  response,
  isFetching,
  isError,
  setCurrentPage,
  currentPage,
  sortingType,
  isPriceRangeSet,
  isLoading,
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
  const [priceRangeSet, setPriceRangeSet] = useState(isPriceRangeSet); // internal state to price range setted

  useEffect(() => {
    async function fetchInitialData() {
      // console.groupCollapsed();
      // console.log('loadMoreClicked :>> ', loadMoreClicked);
      // console.log('pageNumberClicked :>> ', pageNumberClicked);
      // console.log('sortingType :>> ', sortingType);
      // console.log('currentPage :>> ', currentPage);
      // console.log('isPriceRangeSet :>> ', isPriceRangeSet);
      // console.log('priceRangeSet :>> ', priceRangeSet);
      // console.groupEnd();

      if (loadMoreClicked && !sortingType && !pageNumberClicked) {
        // console.log('1');
        setProductsList(prevState => [...prevState, ...response.docs]);
        setPaginationData(updatePaginationData(response));
        //setPriceRangeSet(false);
        return;
      }

      if (!loadMoreClicked && currentPage === 1 && !pageNumberClicked) {
        // console.log('2');
        setProductsList(response.docs);
        setLoadMoreClicked(false);
        setPaginationData(updatePaginationData(response));
        if (priceRangeSet) {
          setPriceRangeSet(false);
        }
        return;
      }

      if (loadMoreClicked && sortingType && currentPage === 1) {
        // console.log('3');
        setProductsList(response.docs);
        setPaginationData(updatePaginationData(response));

        return;
      }

      if (loadMoreClicked && sortingType && currentPage !== 1 && !pageNumberClicked) {
        // console.log('4');
        setProductsList(prevState => [...prevState, ...response.docs]);
        setPaginationData(updatePaginationData(response));
        setLoadMoreClicked(false);
        return;
      }

      if (!loadMoreClicked && pageNumberClicked) {
        // console.log('5');
        setProductsList(response.docs);
        setPaginationData(updatePaginationData(response));
        setPageNumberClicked(false);
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
    priceRangeSet,
    response,
    sortingType,
    isPriceRangeSet,
  ]);

  useEffect(() => {
    return () => {
      if (pageNumberClicked) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  }, [pageNumberClicked]);

  const onPageChange = pageNumber => {
    // console.log('pageNumber:', pageNumber);
    // При кліку на номер сторінки через пагінацію, змініть стан
    setLoadMoreClicked(false);
    setPageNumberClicked(true);
    setCurrentPage(pageNumber);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
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
    priceRangeSet,
  };
}
