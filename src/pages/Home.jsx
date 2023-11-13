import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';
import ControlledCarousel from 'components/Carousel/Carousel';
import { useFetchProductsQuery } from 'redux/operations';
import { Loader } from 'rsuite';
import { Notify } from 'notiflix';

export const Home = () => {
  const { data, isLoading, isError, error } = useFetchProductsQuery();

  return (
    <>
      <Hero>
        <ControlledCarousel />
      </Hero>
      <Title>Aкційні пропозиції</Title>
      {isError && !isLoading ? (
        (Notify.failure(error.error), (<></>))
      ) : isLoading && !isError ? (
        <Loader />
      ) : (
        <CardList productsList={data} />
      )}
    </>
  );
};
