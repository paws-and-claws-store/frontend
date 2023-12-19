import { Cat, Dog, Rodents, Fish, Bird, RightArrow } from 'components/Icons';

import {
  AsideCatalog,
  BoxHiden,
  CatalogContainer,
  Category,
  CategoryList,
  FoodType,
  PetButton,
  WrapperCatalog,
} from 'pages/Catalog/Catalog.styled';
import { TitelContainer, Sorter } from './CatalogLayout.styled';
import { Title } from 'pages/Home/Home.styled';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { setBreadCrumbs } from 'redux/slice/breadCrumbsSlice';
import { useFetchAllStructureQuery } from 'redux/api/operations';
import { useDispatch } from 'react-redux';
import { SortSelect } from 'components/SortSelect/SortSelect';
import { flattenCategories } from 'helpers';
// import { fetchAllStructure } from 'services/api';

const defaultData = [
  {
    code: 'for_dogs',
    en: 'For Dogs',
    ua: 'Товари для собак',
    _categories: [
      {
        code: 'food_for_dogs',
        en: 'Food for Dogs',
        ua: 'Корм для собак',
        _id: '64cef5e853f2bc3e1c807063',
        _pet: '64cef53b53f2bc3e1c80705e',
        _variants: [
          {
            code: 'dry_dog_food',
            en: 'Dry Dog Food',
            ua: 'Сухий корм для собак',
            _category: '64cef5e853f2bc3e1c807063',
            _id: '64d0055d76de8bce9cf3eebd',
            _pet: '64cef53b53f2bc3e1c80705e',
          },
          {
            code: 'wet_dog_food',
            en: 'Wet Dog Food',
            ua: 'Консерви для собак',
            _category: '64cef5e853f2bc3e1c807063',
            _id: '64d0055d76de8bce9cf3eebe',
            _pet: '64cef53b53f2bc3e1c80705e',
          },
          {
            code: 'food_for_puppies',
            en: 'Food for Puppies',
            ua: 'Корм для цуценят',
            _category: '64cef5e853f2bc3e1c807063',
            _id: '652c447b8c1c553f533b4241',
            _pet: '64cef53b53f2bc3e1c80705e',
          },
        ],
      },
    ],
    _id: '64cef53b53f2bc3e1c80705e',
  },
  {
    code: 'for_cats',
    en: 'For Cats',
    ua: 'Товари для котів',
    _categories: [
      {
        code: 'food_for_cats',
        en: 'Food for Cats',
        ua: 'Корм для котів',
        _id: '64cef5e853f2bc3e1c807064',
        _pet: '64cef53b53f2bc3e1c80705f',
        _variants: [
          {
            code: 'dry_cat_food',
            en: 'Dry Cat Food',
            ua: 'Сухий корм для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eebf',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'wet_cat_food',
            en: 'Wet Cat Food',
            ua: 'Консерви для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec0',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'food_for_kittens',
            en: 'Food for Kittens',
            ua: 'Корм для кошенят',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec1',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
        ],
      },
    ],
    _id: '64cef53b53f2bc3e1c80705f',
  },
  {
    code: 'for_rodents',
    en: 'For Cats',
    ua: 'Товари для котів',
    _categories: [
      {
        code: 'food_for_cats',
        en: 'Food for Cats',
        ua: 'Корм для котів',
        _id: '64cef5e853f2bc3e1c807064',
        _pet: '64cef53b53f2bc3e1c80705f',
        _variants: [
          {
            code: 'dry_cat_food',
            en: 'Dry Cat Food',
            ua: 'Сухий корм для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eebf',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'wet_cat_food',
            en: 'Wet Cat Food',
            ua: 'Консерви для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec0',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'food_for_kittens',
            en: 'Food for Kittens',
            ua: 'Корм для кошенят',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec1',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
        ],
      },
    ],
    _id: '64cef53b53f2bc3e1c80705f',
  },
  {
    code: 'for_aquarium_science',
    en: 'For Cats',
    ua: 'Товари для котів',
    _categories: [
      {
        code: 'food_for_cats',
        en: 'Food for Cats',
        ua: 'Корм для котів',
        _id: '64cef5e853f2bc3e1c807064',
        _pet: '64cef53b53f2bc3e1c80705f',
        _variants: [
          {
            code: 'dry_cat_food',
            en: 'Dry Cat Food',
            ua: 'Сухий корм для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eebf',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'wet_cat_food',
            en: 'Wet Cat Food',
            ua: 'Консерви для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec0',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'food_for_kittens',
            en: 'Food for Kittens',
            ua: 'Корм для кошенят',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec1',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
        ],
      },
    ],
    _id: '64cef53b53f2bc3e1c80705f',
  },
  {
    code: 'for_birds',
    en: 'For Cats',
    ua: 'Товари для котів',
    _categories: [
      {
        code: 'food_for_cats',
        en: 'Food for Cats',
        ua: 'Корм для котів',
        _id: '64cef5e853f2bc3e1c807064',
        _pet: '64cef53b53f2bc3e1c80705f',
        _variants: [
          {
            code: 'dry_cat_food',
            en: 'Dry Cat Food',
            ua: 'Сухий корм для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eebf',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'wet_cat_food',
            en: 'Wet Cat Food',
            ua: 'Консерви для котів',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec0',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
          {
            code: 'food_for_kittens',
            en: 'Food for Kittens',
            ua: 'Корм для кошенят',
            _category: '64cef5e853f2bc3e1c807064',
            _id: '64d0055d76de8bce9cf3eec1',
            _pet: '64cef53b53f2bc3e1c80705f',
          },
        ],
      },
    ],
    _id: '64cef53b53f2bc3e1c80705f',
  },
];

export const CatalogLayout = () => {
  const [active, setActive] = useState('');
  const [structure, setStructure] = useState([]);
  const [categories, setCategories] = useState([]);
  const pathname = useLocation().pathname;

  const pathParts = pathname.split('/');
  const lastPathParts = pathParts[pathParts.length - 1];

  const { data, isLoading, isError } = useFetchAllStructureQuery();

  const flattenedCategories = flattenCategories(data);
  const title = flattenedCategories?.find(item => {
    return item.id.toString() === lastPathParts.toString();
  });

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
      // setStructure(data);
      setStructure(defaultData);

      if (active) {
        const filter = structure
          .filter(el => el.code === active)
          .map(({ _categories }) => _categories);
        setCategories(...filter);
      }

      //loading structure for breadcrumbs
      const subCategory = structure.flatMap(item => {
        return item._categories;
      });
      const variants = subCategory.flatMap(item => item._variants);
      dispatch(setBreadCrumbs([...structure, ...subCategory, ...variants]));
    }

    fetchData();
  }, [active, data, dispatch, isError, isLoading, structure]);

  return (
    <>
      <TitelContainer>
        <Title>
          {/* Каталог товарів */}
          {title ? title?.title : 'Каталог товарів'}
        </Title>
        <Sorter>
          <SortSelect style={{ top: '100px', left: '0px' }} />
        </Sorter>
      </TitelContainer>

      <CatalogContainer>
        <AsideCatalog>
          {!isError && structure?.length !== 0 && (
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
                            active={active}
                            id={el.code}
                            className={
                              active === 'for_dogs' ? 'active' : undefined
                            }
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
                            className={
                              active === 'for_cats' ? 'active' : undefined
                            }
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
                    case 'for_rodents':
                      return (
                        <li key={i}>
                          <PetButton
                            active={active}
                            id={el.code}
                            className={
                              active === 'for_rodents' ? 'active' : undefined
                            }
                            onClick={handleClick}
                          >
                            <span>
                              <Rodents />
                              <span>Гризуни</span>
                            </span>
                            <span>
                              <RightArrow />
                            </span>
                          </PetButton>
                        </li>
                      );
                    case 'for_aquarium_science':
                      return (
                        <li key={i}>
                          <PetButton
                            active={active}
                            id={el.code}
                            className={
                              active === 'for_aquarium_science'
                                ? 'active'
                                : undefined
                            }
                            onClick={handleClick}
                          >
                            <span>
                              <Fish />
                              <span>Акваріумістика</span>
                            </span>
                            <span>
                              <RightArrow />
                            </span>
                          </PetButton>
                        </li>
                      );
                    case 'for_birds':
                      return (
                        <li key={i}>
                          <PetButton
                            active={active}
                            id={el.code}
                            className={
                              active === 'for_birds' ? 'active' : undefined
                            }
                            onClick={handleClick}
                          >
                            <span>
                              <Bird />
                              <span>Птахи</span>
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
