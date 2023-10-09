import { CardList } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByOneCategory } from 'services/api';

export const Category = () => {
  const { category } = useParams();

  // const [currentCategory, setCurrentCategory] = useState(category);
  const [productsList, setProductsList] = useState([]);

  // useEffect(() => {
  //   setCurrentCategory(category);
  // }, [category]);

  useEffect(() => {
    // fetchProductsByOneCategory(category).then(res => {
    //   setProductsList( [ ...res]);
    // });

    async function fetchData() {
      // You can await here
      const res = await fetchProductsByOneCategory(category);

      if (res) {
        setProductsList([...res.docs]);
      }
      // console.log('response:', res);
    }
    fetchData();
  }, [category]);

  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
