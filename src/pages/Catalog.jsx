import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useFetchAllProductsQuery } from 'redux/operations';
import { Notify } from 'notiflix';

export const Catalog = () => {
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    hasNextPage: false,
    hasPrevPage: false,
    limit: null,
    nextPage: null,
    page: 1,
    prevPage: null,
    totalPages: null,
  });
  const [loadMoreProducts, setLoadMoreProducts] = useState([]); // Окремий стан для продуктів, завантажених через "Load More"
  const [loadMoreClicked, setLoadMoreClicked] = useState(false); // Окремий стан для слідкування за натисканням кнопки "Load More"
  const {
    data: response,
    error,
    isLoading,
    isFetching,
    isError,
  } = useFetchAllProductsQuery(currentPage);

  useEffect(() => {
    async function fetchInitialData() {
      if (loadMoreClicked) {
        setLoadMoreProducts(prevLoadMoreProducts => [...prevLoadMoreProducts, ...response.docs]);
        const pagination = {
          hasNextPage: response.hasNextPage,
          hasPrevPage: response.hasPrevPage,
          limit: response.limit,
          nextPage: response.nextPage,
          page: response.page,
          prevPage: response.prevPage,
          totalPages: response.totalPages,
        };
        setPaginationData(pagination);
      } else {
        setProductsList([...response.docs]);
        setLoadMoreProducts([...response.docs]);
        setLoadMoreClicked(false);

        const pagination = {
          hasNextPage: response.hasNextPage,
          hasPrevPage: response.hasPrevPage,
          limit: response.limit,
          nextPage: response.nextPage,
          page: response.page,
          prevPage: response.prevPage,
          totalPages: response.totalPages,
        };
        setPaginationData(pagination);
      }
    }

    if (!isFetching && !isError) {
      fetchInitialData();
    }
  }, [error, isError, isFetching, loadMoreClicked, response]);

  const onPageChange = pageNumber => {
    // При кліку на номер сторінки через пагінацію, змініть стан
    setLoadMoreClicked(false);
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onAddPage = async () => {
    // При натисканні на кнопку "Load More", змініть стан
    setLoadMoreClicked(true);
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {isError && !isLoading ? (
        (Notify.failure(error.error), (<></>))
      ) : isLoading && !isError ? (
        <Loader />
      ) : response?.docs.length > 0 ? (
        <>
          <CardList
            productsList={
              currentPage === 1 ? productsList : loadMoreClicked ? loadMoreProducts : productsList
            }
          />
          <Pagination
            paginationData={paginationData}
            onPageChange={onPageChange}
            onAddPage={onAddPage}
          />
        </>
      ) : null}
    </>
  );
};
