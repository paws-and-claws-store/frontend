import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useFetchAllProductsQuery } from 'redux/api/operations';
import { Notify } from 'notiflix';
import { usePagination } from 'hooks/usePagination';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSortingTypeStoreDefault } from 'redux/selectors/selectors';

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // const sortingType = useSelector(selectSortingTypeStore);
  const [searchParams] = useSearchParams();
  // const sortingType = searchParams.get('sortBy');
  const defaultSortSelect = useSelector(selectSortingTypeStoreDefault);
  const sortingType = searchParams.get('sortBy') || defaultSortSelect;

  const params = { page: currentPage };
  if (sortingType !== '') {
    params.sortBy = sortingType;
  }

  useEffect(() => {
    setCurrentPage(1); // set page one to the new type of sorting
  }, [sortingType]);

  const {
    data: response,
    error,
    isLoading,
    isFetching,
    isError,
  } = useFetchAllProductsQuery({
    params,
  });

  const { productsList, paginationData, onAddPage, onPageChange } =
    usePagination({
      response,
      isFetching,
      isError,
      setCurrentPage,
      currentPage,
      sortingType,
      isLoading,
    });

  return (
    <>
      {isError && !isLoading ? (
        (Notify.failure(error.error), (<></>))
      ) : isLoading && !isError ? (
        <Loader />
      ) : response?.docs.length > 0 ? (
        <>
          <CardList productsList={productsList} />
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
