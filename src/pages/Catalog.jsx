import { Title } from './Home.styled';
import { CardList } from 'components';
import {
  AsideCatalog,
  BoxHiden,
  CatalogContainer,
  Category,
  CategoryList,
  FoodType,
  PetButton,
  WrapperCatalog,
} from './Catalog.styled';

import catalog from '../DB/catalog.json';
import { uniqueObjArray } from 'helpers';
import { useEffect, useState } from 'react';

import { Cat, Dog, RightArrow } from 'components/Icons';
import { Outlet } from 'react-router-dom';
import { fetchAllProducts } from 'services/api';

export const Catalog = () => {
  const [active, setActive] = useState('');

  const [productsList, setProductsList] = useState([]);

  const catCatalog = catalog.filter(el => el.pet === 'Коти');
  const dogCatalog = catalog.filter(el => el.pet === 'Собаки');
  // console.log('dogCatalog:', dogCatalog);
  // console.log('catCatalog:', catCatalog);

  useEffect(() => {
    fetchAllProducts().then(res => {
      setProductsList(prev => [...prev, ...res]);
    });
  }, []);

  const handleClick = e => {
    // document.addEventListener('click', e => console.log(e.target));
    console.log(e.currentTarget);
    if (active === e.currentTarget.id) {
      setActive('');
      document.getElementById('hidden').style.visibility = 'hidden';
    } else {
      setActive(e.currentTarget.id);
      document.getElementById('hidden').style.visibility = 'visible';
    }
  };

  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
