import React from 'react';
import Loader from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { useFetchSearchQuery } from 'redux/operations';
import {
  SearchAsideCatalog,
  SearchContainer,
  SortingContainer,
  TitleSearch,
  UpsideSearchContainer,
} from './Search.styled';
import { useSelector } from 'react-redux';
import { SortSelect } from 'components/SortSelect/SortSelect';
import { selectSearchQueryStore, selectSortingTypeStore } from 'redux/selectors';
import { NoSearch } from 'components/NoSearch/NoSearch';
import { Notify } from 'notiflix';
import SearchWrapper from './SearchWarapper';
import SearchDescription from './SearchDescription';
import SearchCategory from './SearchCategory';

export default function Search() {
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
  // const [active, setActive] = useState({ price: false, brands: false });
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
    isError,
  } = useFetchSearchQuery({
    query: searchQuery,
    sorting: sortingType ? `&sortBy=${sortingType}` : '',
    signal,
  });
  searchRef.current = { searchQuery: searchQuery, totalDocs: response?.totalDocs };

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

  return (
    <div style={{ minHeight: '640px' }}>
      {error?.status >= 500 ? (
        (Notify.failure(error.error), (<></>))
      ) : isLoading && !isError ? (
        <Loader />
      ) : error?.status < 500 ? (
        <NoSearch status={status} />
      ) : response ? (
        <>
          <UpsideSearchContainer>
            <TitleSearch>Результати пошуку</TitleSearch>
            <SearchDescription searchRef={searchRef} />
            <SortingContainer>
              <SortSelect />
            </SortingContainer>
          </UpsideSearchContainer>

          <SearchContainer>
            <SearchAsideCatalog>
              <SearchCategory />
            </SearchAsideCatalog>
            <SearchWrapper
              params={{
                currentPage,
                productsList,
                loadMoreClicked,
                loadMoreProducts,
                paginationData,
                onPageChange,
                onAddPage,
              }}
            />
          </SearchContainer>
        </>
      ) : null}
    </div>
  );
}
