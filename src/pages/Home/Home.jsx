import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';
import ControlledCarousel from 'components/Carousel/Carousel';
import { useFetchProductsQuery } from 'redux/operations';

import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';

export const Home = () => {
  const { data, isLoading, isError, error } = useFetchProductsQuery();

  return (
    <>
      <Hero>
        <ControlledCarousel />
      </Hero>
      {isError && !isLoading ? (
        (Notify.failure(error.error), (<></>))
      ) : isLoading && !isError ? (
        <Loader />
      ) : (
        <>
          <Title>Aкційні пропозиції</Title>
          <CardList productsList={data} />
        </>
      )}
    </>
  );
};
