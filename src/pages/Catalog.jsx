import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { useFetchAllProductsQuery } from 'redux/operations';
import { Notify } from 'notiflix';
import { usePagination } from 'components/CustomHooks/usePagination';
import { useSelector } from 'react-redux';
import { selectSortingTypeStore } from 'redux/selectors';

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sortingType = useSelector(selectSortingTypeStore);

  const params = { page: currentPage };
  if (sortingType !== '') {
    params.sortBy = sortingType;
  }

  const {
    data: response,
    error,
    isLoading,
    isFetching,
    isError,
  } = useFetchAllProductsQuery({
    params,
  });

  const {
    productsList,
    paginationData,
    loadMoreProducts,
    onAddPage,
    onPageChange,
    loadMoreClicked,
  } = usePagination({ response, isFetching, isError, setCurrentPage, currentPage });

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
