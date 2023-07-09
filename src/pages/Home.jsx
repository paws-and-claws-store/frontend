import { Container, Section } from 'components';
import { Hero } from './Home.styled';
import { CarouselBanner } from 'components/Carousel/Carousel';

export const Home = () => {
  return (
    <Section>
      <Container>
        <>
          <Hero>
            <CarouselBanner />
          </Hero>
        </>
      </Container>
    </Section>
  );
};
