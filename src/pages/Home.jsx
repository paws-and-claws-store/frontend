import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';
import ControlledCarousel from 'components/Carousel/Carousel';
import catalog from '../DB/catalog.json';
import { uniqueObjArray } from 'helpers';

export const Home = () => {
  const filterItems = catalog.filter(
    el => el.sale && (el.count !== 0 || el.count !== null),
  );
  return (
    <>
      <Hero>
        <ControlledCarousel />
      </Hero>
      <Title>Aкційні пропозиції</Title>
      <CardList
        uniqueObjArray={uniqueObjArray(filterItems, 'foodName').slice(0, 12)}
      />
    </>
  );
};
