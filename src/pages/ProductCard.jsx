import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Reviews from 'components/ProductDetailsCarousel/Reviews/Reviews';
import { fetchOneProduct } from 'services/api';
import { ProductDetailsCarousel } from 'components/ProductDetailsCarousel/ProductDetailsCarousel';
import { CardContainer, ImageContainer, ProductContainer } from './ProductCard.styled';

import MainInfo from 'components/ProductCard/MainInfo/MainInfo';
import DetailsList from 'components/ProductCard/DetailsList/DetailsList';

import ViewedProducts from 'components/ProductCard/ViewedProducts/ViewedProducts';
import { CardList } from 'components';
import { setBreadCrumbs } from 'redux/breadCrumbsSlice';
import { useDispatch } from 'react-redux';
import { useFetchAllStructureQuery } from 'redux/operations';

export const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // eslint-disable-next-line no-unused-vars
  const [productsList, setProductsList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchOneProduct(id).then(res => {
      setProduct({ ...res });
      //set data ro breadcrumbs by one product
      dispatch(setBreadCrumbs([res]));
    });
  }, [dispatch, id]);

  const { data: structure, isLoading } = useFetchAllStructureQuery();

  useEffect(() => {
    //loading structure for breadcrumbs when we going directly by link to the product card
    if (isLoading) {
      return;
    }
    const subCategory = structure.flatMap(item => item._categories);
    const variants = subCategory.flatMap(item => item._variants);
    dispatch(setBreadCrumbs([...structure, ...subCategory, ...variants]));
  }, [dispatch, isLoading, structure]);

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
