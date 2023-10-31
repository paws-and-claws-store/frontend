import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import {
  useFetchAllProductsQuery,
  // useFetchAllStructureQuery
} from 'redux/operations';
import {
  FoldedContainer,
  SearchAsideCatalog,
  SearchBrands,
  SearchCardList,
  SearchCategoryList,
  SearchContainer,
  SearchDescriptionSpan,
  SearchDesriptionResults,
  SearchFilter,
  SearchQuery,
  SearchWrapperCatalog,
  SortingContainer,
  SortingSpan,
  TitleSearch,
  UpsideSearchContainer,
} from './Search.styled';
import { RightArrow } from 'components/Icons';
// import { useDispatch } from 'react-redux';
// import { setBreadCrumbs } from 'redux/breadCrumbsSlice';
import { PriceSlider } from 'components/PriceSlider/PriceSlider';
import React from 'react';
import { Filter } from 'components/Filter/Filter';
import { SortSelect } from 'components/Filter/SortSelect';
import { theme } from 'styles';

export const Search = () => {
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    hasNextPage: false,
    hasPrevPage: false,
    limit: null,
    nextPage: null,
    page: 1,
    prevPage: null,
    totalPages: null,
  });
  const [loadMoreProducts, setLoadMoreProducts] = useState([]); // Окремий стан для продуктів, завантажених через "Load More"
  const [loadMoreClicked, setLoadMoreClicked] = useState(false); // Окремий стан для слідкування за натисканням кнопки "Load More"
  const [active, setActive] = useState({ price: false, brands: false });
  const {
    data: response,
    error,
    isLoading,
    isFetching,
  } = useFetchAllProductsQuery(currentPage);
  // const { data } = useFetchAllStructureQuery();
  // const dispatch = useDispatch();

  useEffect(() => {
    if (response) {
      async function fetchInitialData() {
        if (loadMoreClicked) {
          setLoadMoreProducts(prevLoadMoreProducts => [
            ...prevLoadMoreProducts,
            ...response.docs,
          ]);
          const pagination = {
            hasNextPage: response.hasNextPage,
            hasPrevPage: response.hasPrevPage,
            limit: response.limit,
            nextPage: response.nextPage,
            page: response.page,
            prevPage: response.prevPage,
            totalPages: response.totalPages,
          };
          setPaginationData(pagination);
        } else {
          setProductsList([...response.docs]);
          setLoadMoreProducts([...response.docs]);
          setLoadMoreClicked(false);

          const pagination = {
            hasNextPage: response.hasNextPage,
            hasPrevPage: response.hasPrevPage,
            limit: response.limit,
            nextPage: response.nextPage,
            page: response.page,
            prevPage: response.prevPage,
            totalPages: response.totalPages,
          };
          setPaginationData(pagination);
        }
      }

      if (!isFetching) {
        fetchInitialData();
      }
    }
  }, [isFetching, loadMoreClicked, response]);

  const onPageChange = pageNumber => {
    // При кліку на номер сторінки через пагінацію, змініть стан
    setLoadMoreClicked(false);
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onAddPage = async () => {
    // При натисканні на кнопку "Load More", змініть стан
    setLoadMoreClicked(true);
    setCurrentPage(currentPage + 1);
  };

  const handleClickToggle = e => {
    active[e.currentTarget.name]
      ? setActive({ ...active, [e.currentTarget.name]: false })
      : setActive({ ...active, [e.currentTarget.name]: true });
  };

  return (
    <>
      {error ? (
        <>Oops, there was an error ...</>
      ) : isLoading ? (
        <Loader />
      ) : response?.docs.length > 0 ? (
        <>
          <UpsideSearchContainer>
            <TitleSearch>Результати пошуку</TitleSearch>
            <SearchDesriptionResults>
              <SearchDescriptionSpan> За запитом</SearchDescriptionSpan>
              <SearchQuery>
                “Спробував цей корм за рекомендацією знайомого, але не був
                вражений. Моя собака, Барон, мало зацікавився ним і не показав
                особливого інтересу під час годівлі. Після переходу на цей корм,
                я помітив, що його енергія знизилася цей корм за
                рекомендацією///блаб”
              </SearchQuery>
              <SearchDescriptionSpan> знайдено</SearchDescriptionSpan>{' '}
              <SearchQuery>103</SearchQuery>{' '}
              <SearchDescriptionSpan>товари</SearchDescriptionSpan>
            </SearchDesriptionResults>
            <SortingContainer>
              <SortingSpan>Сортування:</SortingSpan>
              <SortSelect />
            </SortingContainer>
          </UpsideSearchContainer>

          <SearchContainer>
            <SearchAsideCatalog>
              <SearchCategoryList>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <li key={1}>
                    <SearchFilter active={active['price']}>
                      <FoldedContainer
                        active={active['price']}
                        style={{
                          backgroundColor: active['price']
                            ? theme.colors.secGreen
                            : theme.colors.beige,
                        }}
                      >
                        <span>Ціна</span>
                        <button onClick={handleClickToggle} name="price">
                          <RightArrow
                            direction={
                              active['price'] ? 'rotate(90)' : 'rotate(-90)'
                            }
                          />
                        </button>
                      </FoldedContainer>
                      <PriceSlider active={active['price']} />
                    </SearchFilter>
                  </li>
                  <li key={2}>
                    <SearchBrands activeBrands={active['brands']}>
                      <FoldedContainer
                        style={{
                          backgroundColor: active['brands']
                            ? theme.colors.secGreen
                            : theme.colors.beige,
                        }}
                      >
                        <span>Бренди</span>
                        <button onClick={handleClickToggle} name="brands">
                          <RightArrow
                            direction={
                              active['brands'] ? 'rotate(90)' : 'rotate(-90)'
                            }
                          />
                        </button>
                      </FoldedContainer>
                      <Filter active={active['brands']} />
                    </SearchBrands>
                  </li>
                </ul>
              </SearchCategoryList>
            </SearchAsideCatalog>

            <SearchWrapperCatalog>
              <SearchCardList>
                <CardList
                  productsList={
                    currentPage === 1
                      ? productsList
                      : loadMoreClicked
                      ? loadMoreProducts
                      : productsList
                  }
                />
                <Pagination
                  paginationData={paginationData}
                  onPageChange={onPageChange}
                  onAddPage={onAddPage}
                />
              </SearchCardList>
            </SearchWrapperCatalog>
          </SearchContainer>
        </>
      ) : null}
    </>
  );
};
