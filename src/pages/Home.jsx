import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';
import ControlledCarousel from 'components/Carousel/Carousel';
import catalog from '../DB/catalog.json';
import { uniqueObjArray } from 'helpers';
import { useEffect, useState } from 'react';
import { fetchAllProducts, fetchProducts } from 'services/api';

export const Home = () => {
  const filterItems = catalog.filter(
    el => el.sale && (el.count !== 0 || el.count !== null),
  );

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    // fetchProducts().then(res => console.log(res));
    fetchAllProducts().then(res => setProductsList(prev => [...prev, ...res]));
  }, []);
  return (
    <>
      <Hero>
        <ControlledCarousel />
      </Hero>
      <Title>Aкційні пропозиції</Title>
      <CardList
        // uniqueObjArray={uniqueObjArray(filterItems, 'foodName').slice(0, 12)}
        productsList={productsList}
      />
    </>
  );
};
