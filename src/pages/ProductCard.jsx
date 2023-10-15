import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Reviews from 'components/ProductDetailsCarousel/Reviews/Reviews';
import { fetchOneProduct, fetchProducts } from 'services/api';
import { ProductDetailsCarousel } from 'components/ProductDetailsCarousel/ProductDetailsCarousel';
import {
  CardContainer,
  ImageContainer,
  ProductContainer,
} from './ProductCard.styled';

import MainInfo from 'components/ProductCard/MainInfo/MainInfo';
import DetailsList from 'components/ProductCard/DetailsList/DetailsList';
import ViewedProducts from 'components/ProductCard/ViewedProducts/ViewedProducts';
import { CardList } from 'components';

export const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchOneProduct(id).then(res => {
      setProduct({ ...res });
    });

    fetchProducts().then(res => setProductsList(res));
  }, [id]);

  return (
    <>
      {Object.keys(product).length !== 0 && (
        <ProductContainer>
          <div
            style={{
              maxWidth: '736px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
            }}
          >
            <ImageContainer style={{ maxWidth: '628px', marginLeft: 'auto' }}>
              <ProductDetailsCarousel id={id} image={product.mainImage} />
            </ImageContainer>
            <div>
              <DetailsList />
              <Outlet />
              {/* <InfoLinkList>
                <li>
                  <CustomNavLink to="description">Опис товару</CustomNavLink>
                </li>
                <li>
                  <CustomNavLink to="composition">Склад</CustomNavLink>
                </li>
                <li>
                  <CustomNavLink to="comments">Відгуки</CustomNavLink>
                </li>
              </InfoLinkList> */}
            </div>
            <Reviews />
          </div>

          <CardContainer style={{ position: 'relative' }}>
            <MainInfo product={product} />
          </CardContainer>
        </ProductContainer>
      )}
      <ViewedProducts />
      {productsList && <CardList productsList={productsList.slice(0, 4)} />}
    </>
  );
};
