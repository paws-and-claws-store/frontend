import { Outlet } from 'react-router-dom';
import { Content } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Footer, Header } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Content>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Content>
      <Footer />
    </>
  );
};

export default SharedLayout;
