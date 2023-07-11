import { Container, Section } from 'components';
import { Hero, Title } from './Home.styled';
import { CardList } from 'components/CardList/CardList';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Hero></Hero>
        <Title>акційні пропозиції</Title>
        <CardList />
      </Container>
    </Section>
  );
};
