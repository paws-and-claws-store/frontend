import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { ProductDetailsCarousel } from 'components/ProductDetailsCarousel/ProductCarousel/ProductCarousel';
import { CardContainer, ImageContainer, ProductContainer } from './ProductCard.styled';

import MainInfo from 'components/ProductCard/MainInfo/MainInfo';
import DetailsList from 'components/ProductCard/DetailsList/DetailsList';

import { ViewedProducts } from 'components/ProductCard/ViewedProducts/ViewedProducts';
// import { CardList } from 'components';
import { setBreadCrumbs } from 'redux/breadCrumbsSlice';
import { useDispatch } from 'react-redux';
import { useFetchAllStructureQuery, useFetchOneProductQuery } from 'redux/operations';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';

export const ProductCard = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const {
    data: response,
    error: errorProduct,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
  } = useFetchOneProductQuery(id);

  useEffect(() => {
    //set data ro breadcrumbs by one product
    if (!isErrorProduct && !isLoadingProduct) {
      dispatch(setBreadCrumbs([response]));
    }
  }, [dispatch, isErrorProduct, isLoadingProduct, response]);

  const { data: structure, isLoading, isError } = useFetchAllStructureQuery();

  useEffect(() => {
    //loading structure for breadcrumbs when we going directly by link to the product card
    if (isLoading || isError) {
      return;
    }
    const subCategory = structure.flatMap(item => item._categories);
    const variants = subCategory.flatMap(item => item._variants);
    dispatch(setBreadCrumbs([...structure, ...subCategory, ...variants]));
  }, [dispatch, isError, isLoading, structure]);

  if (errorProduct) {
    console.log('error :>> ', errorProduct);
    Notify.failure(errorProduct.error);
  }
  return (
    <>
      {isErrorProduct ? (
        <></>
      ) : isLoadingProduct ? (
        <Loader />
      ) : (
        <>
          <div style={{ minHeight: '930px' }}>
            {Object.keys(response).length !== 0 && (
              <ProductContainer>
                <div
                  style={{
                    maxWidth: '736px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                  }}
                >
                  <ImageContainer>
                    <ProductDetailsCarousel
                      id={id}
                      mainImage={response.mainImage}
                      images={response.images}
                    />
                  </ImageContainer>
                  <div>
                    <DetailsList product={response} />
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
                  {/* <Reviews /> */}
                </div>

                <CardContainer style={{ position: 'relative' }}>
                  <MainInfo product={response} prodNameLength={response.productName.length} />
                </CardContainer>
              </ProductContainer>
            )}
          </div>

          <ViewedProducts />
        </>
      )}
    </>
  );
};
