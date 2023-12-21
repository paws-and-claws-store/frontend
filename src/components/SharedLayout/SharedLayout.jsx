import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
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
  ScrollToTopOnRouteChange,
} from 'components';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Breadcrumbs from 'components/Breadcrumbs/BreadCrumbs';
import { getCurrentUser } from 'redux/api/auth-operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const { user, isActive} = useAuth();

  useEffect(() => {
   if(isActive&&!user.name){ dispatch(getCurrentUser());}
  }, [dispatch, user, isActive]);
  return (
    <SharedLayoutBox className="SharedLayoutBox">
      <ScrollToTopOnRouteChange />
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
                <Breadcrumbs />
                <Outlet />
              </Suspense>
              <ScrollToTop />
            </main>
          </BoxMT>
        </Container>
      </Section>

      <Footer />
    </SharedLayoutBox>
  );
};

export default SharedLayout;
