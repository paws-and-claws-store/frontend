import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';
import ControlledCarousel from 'components/Carousel/Carousel';
import { useEffect, useState } from 'react';
import { fetchProducts } from 'services/api';

export const Home = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => setProductsList(res));
  }, []);
  return (
    <>
      <Hero>
        <ControlledCarousel />
      </Hero>
      <Title>Aкційні пропозиції</Title>
      <CardList productsList={productsList} />
    </>
  );
};
