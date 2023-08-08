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
  Pet,
  PricesDrop,
  ProductCard,
} from 'pages';
import { Search } from 'pages/Search';
import { Route, Routes } from 'react-router-dom';
import { Hidden } from './App.styled';
import { CatalogLayout } from 'components/CatalogLayout/CatalogLayout';
import { ProductType } from 'pages/ProductType';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogLayout />}>
            <Route path=":pet" element={<Pet />}>
              <Route path=":category" element={<Category />}>
                <Route path=":productType" element={<ProductType />}></Route>
              </Route>
            </Route>
            <Route index element={<Catalog />} />
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
