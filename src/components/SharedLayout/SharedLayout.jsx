import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import { showUserPage } from 'redux/slice/authSlice';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  useEffect(()=>{
      
  if(token) {
    localStorage.setItem("accessToken", token);
    dispatch(showUserPage());
    navigation('/user')
  }
  },[token, dispatch, navigation])

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
