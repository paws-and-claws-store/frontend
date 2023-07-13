import { Header } from 'components';
import { Footer } from 'components/Footer/Footer';
import { AboutUs, Brands, Cart, Catalog, Home, ProductCard } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productCard" element={<ProductCard />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </>
  );
};
