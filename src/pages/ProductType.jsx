import { CardList } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByOneProductType } from 'services/api';

export const ProductType = () => {
  const data = useParams();
  console.log('data:', data);
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    // fetchProductsByOneCategory(category).then(res => {
    //   setProductsList(prev => [...prev, ...res]);
    // });
    async function fetchData() {
      // You can await here
      const response = await fetchProductsByOneProductType(data.productType);
      console.log('response:', response);
      setProductsList(prev => [...prev, ...response.docs]);
    }
    fetchData();
  }, [data.productType]);

  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
