import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { useFetchSearchQuery } from 'redux/operations';
import {
  FoldedContainer,
  SearchAsideCatalog,
  SearchBrands,
  SearchCategoryList,
  SearchContainer,
  SearchDescriptionSpan,
  SearchDesriptionResults,
  SearchFilter,
  SearchQuery,
  SearchWrapperCatalog,
  SortingContainer,
  TitleSearch,
  UpsideSearchContainer,
} from './Search.styled';
import { RightArrow } from 'components/Icons';
import { useSelector } from 'react-redux';
import { PriceSlider } from 'components/PriceSlider/PriceSlider';
import React from 'react';
import { Filter } from 'components/Filter/Filter';
import { SortSelect } from 'components/Filter/SortSelect';
import { theme } from 'styles';
import { selectSearchQueryStore, selectSortingTypeStore } from 'redux/selectors';
import { NoSearch } from 'components/NoSearch/NoSearch';
import { Notify } from 'notiflix';

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
  const abortControllerRef = useRef();
  const searchRef = useRef();

  const searchQuery = useSelector(selectSearchQueryStore);
  const sortingType = useSelector(selectSortingTypeStore);

  if (abortControllerRef.current && searchQuery === '') {
    abortControllerRef.current.abort('empty query');
  }

  abortControllerRef.current = new AbortController();
  const signal = abortControllerRef.current.signal;

  const {
    data: response,
    error,
    isLoading,
    isFetching,
    status,
    currentData,
  } = useFetchSearchQuery({
    query: searchQuery,
    sorting: sortingType ? `&sortBy=${sortingType}` : '',
    signal,
  });
  searchRef.current = { searchQuery: searchQuery, totalDocs: response?.totalDocs };
  if (error) {
    console.log('error :>> ', error.error);
    Notify.failure(error.error);
  }

  useEffect(() => {
    if (response) {
      async function fetchInitialData() {
        if (loadMoreClicked) {
          setLoadMoreProducts(prevLoadMoreProducts => [...prevLoadMoreProducts, ...response.docs]);
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
    active[e.currentTarget.attributes.name.value]
      ? setActive({ ...active, [e.currentTarget.attributes.name.value]: false })
      : setActive({ ...active, [e.currentTarget.attributes.name.value]: true });
  };

  return (
    <div style={{ minHeight: '640px' }}>
      {error?.status >= 500 ? (
        <>Oops, there was an error ...</>
      ) : isLoading ? (
        <Loader />
      ) : error?.status < 500 ? (
        <NoSearch status={status} />
      ) : currentData ? (
        <>
          <UpsideSearchContainer>
            <TitleSearch>Результати пошуку</TitleSearch>
            <SearchDesriptionResults>
              <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
              <SearchQuery>{searchRef.current.searchQuery}</SearchQuery>
              <SearchDescriptionSpan> знайдено </SearchDescriptionSpan>
              <SearchQuery>{searchRef.current.totalDocs} </SearchQuery>
              <SearchDescriptionSpan>
                {searchRef.current.totalDocs === 1
                  ? 'товар'
                  : searchRef.current.totalDocs < 5
                  ? 'товари'
                  : 'товарів'}
              </SearchDescriptionSpan>
            </SearchDesriptionResults>
            <SortingContainer>
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
                        onClick={handleClickToggle}
                        name="price"
                      >
                        <span>Ціна</span>
                        <button name="price">
                          <RightArrow direction={active['price'] ? 'rotate(90)' : 'rotate(-90)'} />
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
                        onClick={handleClickToggle}
                        name="brands"
                      >
                        <span>Бренди</span>
                        <button name="brands">
                          <RightArrow direction={active['brands'] ? 'rotate(90)' : 'rotate(-90)'} />
                        </button>
                      </FoldedContainer>
                      <Filter active={active['brands']} />
                    </SearchBrands>
                  </li>
                </ul>
              </SearchCategoryList>
            </SearchAsideCatalog>

            <SearchWrapperCatalog>
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
            </SearchWrapperCatalog>
          </SearchContainer>
        </>
      ) : null}
    </div>
  );
};
