import SharedLayout from 'components/SharedLayout/SharedLayout';
import {
  AboutUs,
  Brands,
  Cart,
  Catalog,
  Category,
  Contacts,
  Home,
  PageNotFound,
  PageUnderConstruction,
  PricesDrop,
  ProductCard,
} from 'pages';
import { Search } from 'pages/Search';
import { Route, Routes } from 'react-router-dom';
import { Hidden } from './App.styled';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path=":category" element={<Category />} />
          </Route>
          <Route path=":id" element={<ProductCard />} />

          <Route path="brands" element={<Brands />} />
          <Route path="cart" element={<Cart />} />
          <Route path="prices-drop" element={<PricesDrop />} />
          <Route path="search" element={<Search />} />

          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="/pageUnderConstruction"
            element={<PageUnderConstruction />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Hidden className="" id="hidden"></Hidden>
    </>
  );
};
