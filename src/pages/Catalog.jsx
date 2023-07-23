import { Title } from './Home.styled';
import { CardList } from 'components';
import {
  AsideCatalog,
  BoxHiden,
  CatalogContainer,
  CategoryList,
  PetButton,
  WrapperCatalog,
} from './Catalog.styled';

import catalog from '../DB/catalog.json';
import { uniqueObjArray } from 'helpers';
import { useState } from 'react';

import { Cat, Dog, RightArrow } from 'components/Icons';

export const Catalog = () => {
  const [active, setActive] = useState('');
  const catCatalog = catalog.filter(el => el.pet === 'Коти');
  const dogCatalog = catalog.filter(el => el.pet === 'Собаки');
  console.log('dogCatalog:', dogCatalog);
  console.log('catCatalog:', catCatalog);

  const handleClick = e => {
    if (active === e.target.id) {
      setActive('');
    } else {
      setActive(e.target.id);
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
                        <span>{el.category}</span>
                      </li>
                      <li>
                        <ul>
                          {uniqueObjArray(catCatalog, 'foodType').map(
                            (el, i) => {
                              return <li key={i}>{el.foodType}</li>;
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
                          <span>{el.category}</span>
                        </li>
                        <li>
                          <ul>
                            {uniqueObjArray(dogCatalog, 'foodType').map(
                              (el, i) => {
                                return <li key={i}>{el.foodType}</li>;
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
          <CardList uniqueObjArray={uniqueObjArray(catalog, 'foodName')} />
        </WrapperCatalog>
      </CatalogContainer>
    </>
  );
};
