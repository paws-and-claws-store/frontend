import { CardList } from 'components';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductsByOneProductTypeQuery } from 'redux/operations';
import { Notify } from 'notiflix';

export const ProductType = () => {
  const { productType } = useParams();
  const { data, isLoading, isError, error } = useFetchProductsByOneProductTypeQuery(productType);

  return (
    <>
      {isError && !isLoading ? (
        (Notify.failure(error.error), (<></>))
      ) : isLoading && !isError ? (
        <Loader />
      ) : (
        <CardList productsList={data.docs} />
      )}
    </>
  );
};
