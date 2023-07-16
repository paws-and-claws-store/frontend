import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AboutUs, Brands, Cart, Catalog, Home, ProductCard } from 'pages';
import { PageNotFound } from 'pages/PageNotFound';
import { PageUnderConstruction } from 'pages/PageUnderConstruction';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productCard" element={<ProductCard />} />
          <Route
            path="/pageUnderConstruction"
            element={<PageUnderConstruction />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
