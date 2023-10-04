import { CardList } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByOneProductType } from 'services/api';

export const ProductType = () => {
  const { productType } = useParams();
  // console.log('data:', data);
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    // fetchProductsByOneCategory(category).then(res => {
    //   setProductsList(prev => [...prev, ...res]);
    // });
    async function fetchData() {
      // You can await here
      const response = await fetchProductsByOneProductType(productType);
      setProductsList(response.docs);
    }
    fetchData();
  }, [productType]);

  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
