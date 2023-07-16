import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';
import ControlledCarousel from 'components/Carousel/Carousel';

export const Home = () => {
  return (
    <>
      <Hero>
        <ControlledCarousel />
      </Hero>
      <Title>Aкційні пропозиції</Title>
      <CardList />
    </>
  );
};