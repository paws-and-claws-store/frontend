import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductsByOneProductTypeQuery } from 'redux/operations';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { selectSortingTypeStore } from 'redux/selectors';
import { usePagination } from 'components/CustomHooks/usePagination';

export const ProductType = () => {
  const { productType } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const sortingType = useSelector(selectSortingTypeStore);

  const params = { page: currentPage };
  if (sortingType !== '') {
    params.sortBy = sortingType;
  }
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
      ) : (
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
      )}
    </>
  );
};
