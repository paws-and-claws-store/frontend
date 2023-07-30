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
import { useState } from 'react';

import { Cat, Dog, RightArrow } from 'components/Icons';
import { Outlet } from 'react-router-dom';

export const Catalog = () => {
  const [active, setActive] = useState('');
  const catCatalog = catalog.filter(el => el.pet === 'Коти');
  const dogCatalog = catalog.filter(el => el.pet === 'Собаки');
  // console.log('dogCatalog:', dogCatalog);
  // console.log('catCatalog:', catCatalog);

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
      <Title>Каталог товарів</Title>

      <CatalogContainer>
        <AsideCatalog>
          <CategoryList>
            <PetButton
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
            </PetButton>

            <PetButton
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
            </PetButton>
          </CategoryList>
        </AsideCatalog>
        <WrapperCatalog>
          {(active === 'cat' && (
            <BoxHiden className={active ? 'active' : undefined}>
              <ul>
                {uniqueObjArray(catCatalog, 'category').map((el, i) => {
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
            ))}

          <Outlet />

          <CardList uniqueObjArray={uniqueObjArray(catalog, 'foodName')} />
        </WrapperCatalog>
      </CatalogContainer>
    </>
  );
};
