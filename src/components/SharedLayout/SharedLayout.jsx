import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { BoxMT, Footer, Header, Container, Section } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <BoxMT>
            <nav>
              <NavLink to={'catalog'}>Каталог</NavLink>
              <NavLink to={'prices-drop'}>Акції</NavLink>
              <NavLink to={'brands'}>Бренди</NavLink>
              <NavLink to={'aboutUs'}>Про компанію</NavLink>
              <NavLink to={'contacts'}>Контакти</NavLink>
            </nav>
            <main>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </main>
          </BoxMT>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default SharedLayout;
