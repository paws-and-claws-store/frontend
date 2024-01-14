import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFetchProductsByOneProductTypeQuery } from 'redux/api/operations';
import { Notify } from 'notiflix';
import { usePagination } from 'hooks/usePagination';
import { useSelector } from 'react-redux';
import { selectSortingTypeStoreDefault } from 'redux/selectors/selectors';

export const ProductType = () => {
  const { productType } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  // const sortingType = useSelector(selectSortingTypeStore);
  const [searchParams] = useSearchParams();
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
    isLoading,
    isError,
    error,
    isFetching,
  } = useFetchProductsByOneProductTypeQuery({
    productType,
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
    });

  return (
    <>
      {isError && !isLoading ? (
        (Notify.failure(error.error), (<></>))
      ) : isLoading && !isError ? (
        <Loader />
      ) : (
        <>
          <CardList productsList={productsList} />
          <Pagination
            paginationData={paginationData}
            onPageChange={onPageChange}
            onAddPage={onAddPage}
          />
        </>
      )}
    </>
  );
};
