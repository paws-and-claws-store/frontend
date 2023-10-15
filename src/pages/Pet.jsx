import { CardList } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByOnePet } from 'services/api';

export const Pet = () => {
  const { pet } = useParams();
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function fetchPet() {
      // console.log(`await fetchProductsByOnePet(${data.pet})`);
      const res = await fetchProductsByOnePet(pet);

      if (res) {
        setProductsList([...res.docs]);
      }
      // console.log('res:', res);
    }
    fetchPet();
  }, [pet]);
  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
