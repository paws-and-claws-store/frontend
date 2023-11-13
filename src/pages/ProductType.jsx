import { CardList } from 'components';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductsByOneProductTypeQuery } from 'redux/operations';
import { Notify } from 'notiflix';

export const ProductType = () => {
  const { productType } = useParams();
  const { data, isLoading, isError, error } = useFetchProductsByOneProductTypeQuery(productType);
  if (error) {
    console.log('error :>> ', error.error);
    Notify.failure(error.error);
  }

  return <>{isError ? <></> : isLoading ? <Loader /> : <CardList productsList={data.docs} />}</>;
};
