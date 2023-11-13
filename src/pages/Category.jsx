import { CardList } from 'components';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductsByOneCategoryQuery } from 'redux/operations';
import { Notify } from 'notiflix';

export const Category = () => {
  const { category: oneCategory } = useParams();

  const { data, isLoading, isError, error } = useFetchProductsByOneCategoryQuery(oneCategory);
  if (error) {
    console.log('error :>> ', error);
    Notify.failure(error.error);
  }

  return <>{isError ? <></> : isLoading ? <Loader /> : <CardList productsList={data.docs} />}</>;
};
