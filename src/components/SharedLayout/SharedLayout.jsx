import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  BoxMT,
  Footer,
  Header,
  Container,
  Section,
  SharedLayoutBox,
  NavStyle,
  Link,
} from 'components';

const SharedLayout = () => {
  return (
    <SharedLayoutBox className="SharedLayoutBox">
      <Header />
      <Section>
        <Container>
          <BoxMT>
            <NavStyle>
              <Link to={'catalog'}>Каталог</Link>
              <Link to={'prices-drop'}>Акції</Link>
              <Link to={'brands'}>Бренди</Link>
              <Link to={'aboutUs'}>Про компанію</Link>
              <Link to={'contacts'}>Контакти</Link>
            </NavStyle>
            <main>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </main>
          </BoxMT>
        </Container>
      </Section>

      <Footer />
    </SharedLayoutBox>
  );
};

export default SharedLayout;
