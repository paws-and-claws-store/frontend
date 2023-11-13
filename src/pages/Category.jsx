import { CardList } from 'components';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductsByOneCategoryQuery } from 'redux/operations';
import { Notify } from 'notiflix';

export const Category = () => {
  const { category: oneCategory } = useParams();

  const { data, isLoading, isError, error } = useFetchProductsByOneCategoryQuery(oneCategory);

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
