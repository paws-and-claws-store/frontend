import { CardList } from 'components';
import { useEffect, useState } from 'react';
import { fetchProducts } from 'services/api';

export const Catalog = () => {
  // const [active, setActive] = useState('');

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    // fetchAllProducts().
    fetchProducts().then(res => {
      setProductsList(prev => [...prev, ...res]);
    });
  }, []);

  // const handleClick = e => {
  //   // document.addEventListener('click', e => console.log(e.target));
  //   console.log(e.currentTarget);
  //   if (active === e.currentTarget.id) {
  //     setActive('');
  //     document.getElementById('hidden').style.visibility = 'hidden';
  //   } else {
  //     setActive(e.currentTarget.id);
  //     document.getElementById('hidden').style.visibility = 'visible';
  //   }
  // };

  return (
    <>
      <CardList productsList={productsList} />
    </>
  );
};
