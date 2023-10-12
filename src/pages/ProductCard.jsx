import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Reviews from 'components/ProductDetailsCarousel/Reviews/Reviews';
import { fetchOneProduct } from 'services/api';
import { ProductDetailsCarousel } from 'components/ProductDetailsCarousel/ProductDetailsCarousel';
import {
  CardContainer,
  ImageContainer,
  ProductContainer,
} from './ProductCard.styled';

import MainInfo from 'components/ProductCard/MainInfo/MainInfo';
import DetailsList from 'components/ProductCard/DetailsList/DetailsList';
import ViewedProducts from 'components/ProductCard/ViewedProducts/ViewedProducts';

export const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(product);

  useEffect(() => {
    fetchOneProduct(id).then(res => {
      setProduct({ ...res });
    });
  }, [id]);

  return (
    <>
      <ProductContainer>
        <div style={{ maxWidth: '736px' }}>
          <ImageContainer>
            <ProductDetailsCarousel id={id} image={product.mainImage} />
          </ImageContainer>
          <div>
            <DetailsList />
            <Outlet />
          </div>
          <Reviews />
        </div>

        <CardContainer style={{ position: 'relative' }}>
          <MainInfo product={product} />
        </CardContainer>
      </ProductContainer>
      <ViewedProducts />
      {/* <CardList productsList={product.slice(0, 4)} /> */}
    </>
  );
};
