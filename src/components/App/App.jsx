import { Header } from 'components';
import { AboutUs, Brands, Cart, Catalog, Home } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
