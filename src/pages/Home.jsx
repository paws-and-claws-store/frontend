import { Container, Section } from 'components';
import { Box, Hero } from './Home.styled';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <h1>Home page</h1>
          <Hero>Hero</Hero>
        </Box>
      </Container>
    </Section>
  );
};
