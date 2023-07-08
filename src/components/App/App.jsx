import { Header } from 'components';
import { AboutUs, Brands, Catalog, Home } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
