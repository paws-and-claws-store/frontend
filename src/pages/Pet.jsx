import { CardList } from 'components';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchProductsByOnePet } from 'services/api';

export const Pet = () => {
  const data = useParams();
  // console.log('data:', data.pet);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function fetchPet() {
      // console.log(`await fetchProductsByOnePet(${data.pet})`);
      const res = await fetchProductsByOnePet(data.pet);

      if (res) {
        setProductsList([...res.docs]);
      }
      // console.log('res:', res);
    }
    fetchPet();
  }, [data.pet]);
  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
