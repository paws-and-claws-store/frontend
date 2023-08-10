import { Cat, Dog, RightArrow } from 'components/Icons';

import {
  AsideCatalog,
  BoxHiden,
  CatalogContainer,
  Category,
  CategoryList,
  FoodType,
  PetButton,
  WrapperCatalog,
} from 'pages/Catalog.styled';
import { Title } from 'pages/Home.styled';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchAllStructure } from 'services/api';

export const CatalogLayout = () => {
  const [active, setActive] = useState('');
  const [structure, setStructure] = useState([]);
  const [categories, setCategories] = useState([]);

  // for pagination
  // const [activPage, setActivPage] = useState(1);

  const handleClick = e => {
    // document.addEventListener('click', e => console.log(e.target));
    // console.log(e.currentTarget);
    if (active === e.currentTarget.id) {
      setActive('');
      document.getElementById('hidden').style.visibility = 'hidden';
    } else {
      setActive(e.currentTarget.id);
      document.getElementById('hidden').style.visibility = 'visible';
    }
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const structure = await fetchAllStructure();
      setStructure([...structure]);

      if (active) {
        const filter = structure
          .filter(el => el.code === active)
          .map(({ _categories }) => _categories);
        setCategories(...filter);
      }
      // ...
    }
    fetchData();
  }, [active]);

  return (
    <>
      <Title>Каталог товарів</Title>

      <CatalogContainer>
        <AsideCatalog>
          {structure.length !== 0 && (
            <CategoryList>
              <ul
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                {structure.map((el, i) => {
                  // console.log('el:', el);
                  switch (el.code) {
                    case 'for_dogs':
                      return (
                        <li key={i}>
                          <PetButton
                            id={el.code}
                            className={
                              active === 'for_dogs' ? 'active' : undefined
                            }
                            onClick={handleClick}
                            onBlur={() => {
                              setActive('');
                              document.getElementById(
                                'hidden',
                              ).style.visibility = 'hidden';
                            }}
                          >
                            <span>
                              <Dog />
                              <span>Собаки</span>
                            </span>
                            <span>
                              <RightArrow />
                            </span>
                          </PetButton>
                        </li>
                      );
                    case 'for_cats':
                      return (
                        <li key={i}>
                          <PetButton
                            id={el.code}
                            className={
                              active === 'for_cats' ? 'active' : undefined
                            }
                            onClick={handleClick}
                            onBlur={() => {
                              setActive('');
                              document.getElementById(
                                'hidden',
                              ).style.visibility = 'hidden';
                            }}
                          >
                            <span>
                              <Cat />
                              <span>Коти</span>
                            </span>
                            <span>
                              <RightArrow />
                            </span>
                          </PetButton>
                        </li>
                      );

                    default:
                      return <></>;
                  }
                })}
              </ul>
            </CategoryList>
          )}
        </AsideCatalog>
        <WrapperCatalog>
          <BoxHiden className={active ? 'active' : undefined}>
            <ul className="_categories">
              {active &&
                categories.map(({ code, ua, _id, _variants, _pet }) => {
                  console.log('categories:', categories);

                  return (
                    <>
                      <li>
                        <Category to={`${_pet}/${code}`}>{ua}</Category>
                      </li>
                      <li key={_id} className=" _categories-item">
                        <ul className="_variants">
                          {_variants.map(({ _id, ua, code }) => {
                            return (
                              <li key={_id} className="_variants-item">
                                <FoodType to={`pet/${code}`}>{ua}</FoodType>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </>
                  );
                })}
            </ul>
          </BoxHiden>

          <Outlet />
        </WrapperCatalog>
      </CatalogContainer>
    </>
  );
};
