import { Container, Section } from 'components';
import { Hero } from './Home.styled';

export const Home = () => {
  return (
    <Section>
      <Container>
        <h1>Home page</h1>
        <Hero>Hero</Hero>
      </Container>
    </Section>
  );
};
