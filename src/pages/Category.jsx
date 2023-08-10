import { CardList } from 'components';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchProductsByOneCategory } from 'services/api';

export const Category = () => {
  const { pet, category } = useParams();
  console.log('pet', pet, 'category:', category);
  const [currentCategory, setCurrentCategory] = useState(category);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    setCurrentCategory(category);
    console.log('category:', category);
  }, [category]);

  useEffect(() => {
    // fetchProductsByOneCategory(category).then(res => {
    //   setProductsList(prev => [...prev, ...res]);
    // });
    async function fetchData() {
      // You can await here
      const response = await fetchProductsByOneCategory(currentCategory);
      console.log('response:', response);
      setProductsList(prev => [...prev, ...response.docs]);
    }
    fetchData();
  }, [currentCategory, category]);

  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
