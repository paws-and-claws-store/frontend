import { Container, Section } from 'components';
import { Hero, Title } from './Home.styled';
import { CarouselBanner } from 'components/Carousel/Carousel';
import { CardList } from 'components/CardList/CardList';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Hero>
          <CarouselBanner />
        </Hero>
        <Title>акційні пропозиції</Title>
        <CardList />
      </Container>
    </Section>
  );
};
