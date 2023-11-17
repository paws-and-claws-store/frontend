import { CardList } from 'components';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductsByOnePetQuery } from 'redux/operations';
import { Notify } from 'notiflix';

export const Pet = () => {
  const { pet } = useParams();

  const { data = {}, isLoading, isError, error } = useFetchProductsByOnePetQuery(pet);

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
