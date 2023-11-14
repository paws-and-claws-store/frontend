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
import { TitelContainer, Sorter } from './CatalogLayout.styled';
import { Title } from 'pages/Home.styled';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { setBreadCrumbs } from 'redux/breadCrumbsSlice';
import { useFetchAllStructureQuery } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { SortSelect } from 'components/Filter/SortSelect';
// import { fetchAllStructure } from 'services/api';
export const CatalogLayout = () => {
  const [active, setActive] = useState('');
  const [structure, setStructure] = useState([]);
  const [categories, setCategories] = useState([]);

  const { data, isLoading, isError } = useFetchAllStructureQuery();
  const dispatch = useDispatch();

  const hiddenElement = document.getElementById('hidden');

  // for pagination
  // const [activPage, setActivPage] = useState(1);

  const handleClick = e => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!active) {
      document.addEventListener('click', handleClickOutsideMenu);
      document.body.classList.remove('scroll-lock');
    }

    if (active === e.currentTarget.id) {
      setActive('');
      hiddenElement.style.display = 'none';
      document.body.classList.remove('scroll-lock');
      document.removeEventListener('click', handleClickOutsideMenu);
    } else {
      setActive(e.currentTarget.id);
      hiddenElement.style.display = 'block';
      document.body.classList.add('scroll-lock');
    }
  };

  const handleClickOutsideMenu = e => {
    if (hiddenElement.contains(e.target)) {
      // Клік відбувся поза межами елемента, закриваємо меню
      setActive('');
      hiddenElement.style.display = 'none';

      // Видаляємо слухача події кліку після закриття меню
      document.removeEventListener('click', handleClickOutsideMenu);
      document.body.classList.remove('scroll-lock');
    }
  };

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }
    async function fetchData() {
      // You can await here
      // const structure = await fetchAllStructure();
      //using query by redux api for cached queryies
      setStructure(data);

      if (active) {
        const filter = structure
          .filter(el => el.code === active)
          .map(({ _categories }) => _categories);
        setCategories(...filter);
      }

      //loading structure for breadcrumbs
      const subCategory = structure.flatMap(item => item._categories);
      const variants = subCategory.flatMap(item => item._variants);
      dispatch(setBreadCrumbs([...structure, ...subCategory, ...variants]));
    }

    fetchData();
  }, [active, data, dispatch, isError, isLoading, structure]);

  return (
    <>
      <TitelContainer>
        <Title>Каталог товарів</Title>
        <Sorter>
          <SortSelect style={{ top: '100px', left: '0px' }} />
        </Sorter>
      </TitelContainer>

      <CatalogContainer>
        <AsideCatalog>
          {!isError && structure?.length !== 0 && (
            <CategoryList>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {structure.map((el, i) => {
                  // console.log('el:', el);
                  switch (el.code) {
                    case 'for_dogs':
                      return (
                        <li key={i}>
                          <PetButton
                            active={active}
                            id={el.code}
                            className={active === 'for_dogs' ? 'active' : undefined}
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
                        </li>
                      );
                    case 'for_cats':
                      return (
                        <li key={i}>
                          <PetButton
                            active={active}
                            id={el.code}
                            className={active === 'for_cats' ? 'active' : undefined}
                            onClick={handleClick}
                            // onBlur={() => {
                            //   setActive('');
                            //   document.getElementById(
                            //     'hidden',
                            //   ).style.visibility = 'hidden';
                            // }}
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
        <WrapperCatalog className="WrapperCatalog">
          <BoxHiden className={active ? 'active' : undefined}>
            <ul className="_categories">
              {active &&
                categories.map(({ code, ua, _id, _variants, _pet }, index) => {
                  return (
                    <li key={_id} className="_categories-item">
                      <Category
                        className="Category"
                        to={`${_pet}/${_id}`}
                        onClick={() => {
                          setActive('');
                          hiddenElement.style.display = 'none';
                          document.body.classList.remove('scroll-lock');
                        }}
                      >
                        {ua}
                      </Category>
                      <ul className="_variants">
                        {_variants.map(({ _id, ua, code, _pet, _category }) => {
                          return (
                            <li key={_id} className="_variants-item">
                              <FoodType
                                to={`${_pet}/${_category}/${_id}`}
                                onClick={() => {
                                  setActive('');
                                  hiddenElement.style.display = 'none';
                                  document.body.classList.remove('scroll-lock');
                                }}
                              >
                                {ua}
                              </FoodType>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
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
