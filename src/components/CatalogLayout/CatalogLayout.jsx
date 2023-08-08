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
import { fetchAllPets, fetchAllStructure, fetchProducts } from 'services/api';

export const CatalogLayout = () => {
  const [active, setActive] = useState('');
  const [structure, setStructure] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [petCollection, setPetCollection] = useState([]);
  // for pagination
  // const [activPage, setActivPage] = useState(1);
  const [catalogList, setCatalogList] = useState([]);

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

  useEffect(() => {
    fetchAllStructure().then(res => setStructure([...res]));
    fetchAllPets().then(res => setPetCollection([...res]));
    //fetchAllProsucts()
    fetchProducts().then(res => setProductsList([...res]));
  }, []);

  useEffect(() => {
    console.log('structure:', structure);
  }, [structure]);

  return (
    <>
      <Title>Каталог товарів</Title>

      <CatalogContainer>
        <AsideCatalog>
          {structure.length && (
            <CategoryList>
              <ul
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                {structure.map((el, i) => {
                  switch (el.code) {
                    case 'for_dogs':
                      return (
                        <li key={i}>
                          <PetButton
                            id={'dog'}
                            className={active === 'dog' ? 'active' : undefined}
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
                            id={'cat'}
                            className={active === 'cat' ? 'active' : undefined}
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
                      break;
                  }
                })}
              </ul>

              {/* <PetButton
              id={'dog'}
              className={active === 'dog' ? 'active' : undefined}
              onClick={handleClick}
              onBlur={() => {
                setActive('');
                document.getElementById('hidden').style.visibility = 'hidden';
              }}
            >
              <span>
                <Dog />
                <span>Собаки</span>
              </span>
              <span>
                <RightArrow />
              </span>
            </PetButton> */}

              {/* <PetButton
              id={'cat'}
              className={active === 'cat' ? 'active' : undefined}
              onClick={handleClick}
              onBlur={() => {
                setActive('');
                document.getElementById('hidden').style.visibility = 'hidden';
              }}
            >
              <span>
                <Cat />
                <span>Коти</span>
              </span>
              <span>
                <RightArrow />
              </span>
            </PetButton> */}
            </CategoryList>
          )}
        </AsideCatalog>
        <WrapperCatalog>
          {/* {(active === 'cat' && (
            <BoxHiden className={active ? 'active' : undefined}>
              <ul>
                {uniqueObjArray(catCatalog, 'category').map((el, i) => {
                  console.log('Cat category', el);
                  return (
                    <>
                      <li key={i}>
                        <Category to={`${el.category}`}>{el.category}</Category>
                      </li>
                      <li>
                        <ul>
                          {uniqueObjArray(catCatalog, 'foodType').map(
                            (el, i) => {
                              return (
                                <li key={i}>
                                  <FoodType>{el.foodType}</FoodType>
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </li>
                    </>
                  );
                })}
              </ul>
            </BoxHiden>
          )) ||
            (active === 'dog' && (
              <BoxHiden className={active ? 'active' : undefined}>
                <ul>
                  {uniqueObjArray(dogCatalog, 'category').map((el, i) => {
                    return (
                      <>
                        <li key={i}>
                          <Category>{el.category}</Category>
                        </li>
                        <li>
                          <ul>
                            {uniqueObjArray(dogCatalog, 'foodType').map(
                              (el, i) => {
                                return (
                                  <li key={i}>
                                    <FoodType>{el.foodType}</FoodType>
                                  </li>
                                );
                              },
                            )}
                          </ul>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </BoxHiden>
            ))} */}
          <Outlet />
        </WrapperCatalog>
      </CatalogContainer>
    </>
  );
};
