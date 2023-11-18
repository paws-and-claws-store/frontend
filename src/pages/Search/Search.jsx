import React from 'react';
import Loader from 'components/Loader/Loader';
import { useRef, useState } from 'react';
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
import { usePagination } from 'components/CustomHooks/usePagination';

export default function Search() {
  const [currentPage, setCurrentPage] = useState(1);

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
    // pageNumber: `&page=${currentPage}`,
  });
  searchRef.current = { searchQuery: searchQuery, totalDocs: response?.totalDocs };
  const {
    productsList,
    paginationData,
    loadMoreProducts,
    onAddPage,
    onPageChange,
    loadMoreClicked,
  } = usePagination({ response, isFetching, isError, setCurrentPage, currentPage });

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
