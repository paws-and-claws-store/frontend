import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductsByOnePetQuery } from 'redux/operations';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { selectSortingTypeStore } from 'redux/selectors';
import { usePagination } from 'components/CustomHooks/usePagination';

export const Pet = () => {
  const { pet } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const sortingType = useSelector(selectSortingTypeStore);

  const params = { page: currentPage };
  if (sortingType !== '') {
    params.sortBy = sortingType;
  }

  const {
    data: response = {},
    isLoading,
    isError,
    error,
    isFetching,
  } = useFetchProductsByOnePetQuery({
    pet,
    params,
  });

  const { productsList, paginationData, onAddPage, onPageChange } = usePagination({
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
