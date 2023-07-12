import { Container, Section } from 'components';
import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';
import ControlledCarousel from 'components/Carousel/Carousel';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Hero>
          <ControlledCarousel />
        </Hero>
        <Title>акційні пропозиції</Title>
        <CardList />
      </Container>
    </Section>
  );
};
