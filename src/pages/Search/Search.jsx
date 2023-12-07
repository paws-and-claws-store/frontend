import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { SortSelect } from 'components/SortSelect/SortSelect';
import {
  selectIsPriceRangeSet,
  selectPriceValue,
  selectSearchQueryStore,
  selectSortingTypeStore,
} from 'redux/selectors';
import { NoSearch } from 'components/NoSearch/NoSearch';
import { Notify } from 'notiflix';
import SearchWrapper from './SearchWarapper';
import SearchDescription from './SearchDescription';
import SearchCategory from './SearchCategory';
import { usePagination } from 'hooks/usePagination';
import { useSearchParams } from 'react-router-dom';
import { setQuerySearch } from 'redux/slice/searchSlice';
import { setPriceChange } from 'redux/slice/priceRangeSlice';

export default function Search() {
  const [currentPage, setCurrentPage] = useState(1); // to track the current page of search results.
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const abortControllerRef = useRef(); // hooks used to store references to the AbortController.
  const searchRef = useRef(); // hooks used to store references to the search query.

  const searchQuery = useSelector(selectSearchQueryStore); // extract search query from the Redux store
  const sortingType = useSelector(selectSortingTypeStore); // extract sorting type from the Redux store
  const priceValue = useSelector(selectPriceValue); // get price value from price slider
  const isPriceRangeSet = useSelector(selectIsPriceRangeSet); // get price range set state from price slider
  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    }
  }, [searchQuery, setSearchParams]);

  const query = searchParams.get('query');
  useEffect(() => {
    if (query || query !== null) {
      dispatch(setQuerySearch(query));
    }
  }, [dispatch, query, searchParams]);

  const params = {
    findBy: encodeURIComponent(query ? query : searchQuery).toLowerCase(),
    page: currentPage,
    minPrice: priceValue[0], // set min price for query
    maxPrice: priceValue[1], // set max price for query
  }; // params object to be used in the API call hook useFetchSearchQuery.

  //This is watching for changing current page, if user now on 2-nd or nore page and he change query page must be again 1
  useEffect(() => {
    setCurrentPage(1); // set page one to the new search query, sorting type or price calue from price slider
  }, [searchQuery, sortingType, priceValue]);
  if (sortingType !== '') {
    params.sortBy = sortingType; // set to params object sorting type if sorting type is exists
  }

  if (abortControllerRef.current && searchParams === '') {
    abortControllerRef.current.abort('empty query'); // If there's an existing abortControllerRef.current and the searchQuery becomes empty, it aborts the ongoing fetch with a message 'empty query, to avoid abort fetch permamently
  }

  abortControllerRef.current = new AbortController(); // create AbortController and set it to current ref
  const signal = abortControllerRef.current.signal; // set signal type to abort unneccesary fetch

  const {
    data: response,
    error,
    isLoading,
    isFetching,
    isError,
  } = useFetchSearchQuery({
    signal,
    params,
  }); // Utilizes a custom hook useFetchSearchQuery to fetch search results based on the params object and the abort signal. It receives data, error, isLoading, isFetching, and isError as response states.
  searchRef.current = {
    searchQuery: searchParams ? searchParams.get('query') : searchQuery,
    totalDocs: response?.totalDocs,
  }; // set object of current search query and current response to avoid rerender unnecessary rerenders

  const { productsList, paginationData, onAddPage, onPageChange, priceRangeSet } = usePagination({
    response,
    isFetching,
    isError,
    setCurrentPage,
    currentPage,
    sortingType,
    priceValue,
    isPriceRangeSet,
  }); // Use a custom hook usePagination to handle pagination-related functionalities such as managing product lists, pagination data, and changing pages.

  const totalDocs = response?.totalDocs;
  useEffect(() => {
    // return () => {
    //   dispatch(setPriceChange(true)); // set to redux store state of setted price range from hook usePagination
    // };
  }, [totalDocs]);

  // useEffect(() => {
  //   console.log('priceRangeSet saxdsdcs :>> ', priceRangeSet);
  //   dispatch(setPriceChange(priceRangeSet)); // set to redux store state of setted price range from hook usePagination
  // }, [dispatch, priceRangeSet]);
  return (
    <div style={{ minHeight: '640px' }}>
      {error?.status >= 500 ? (
        (Notify.failure(error.error), (<></>)) // If there's a server error (status >= 500), it triggers a failure notification using Notify.failure(error.error).
      ) : isLoading && !isError ? (
        <Loader /> // Show a loader if data is loading (isLoading && !isError).
      ) : response?.totalDocs === 0 ? (
        <NoSearch /> // Show a component indicating no search results (<NoSearch />) if there's an error with status less than 500.
      ) : response?.totalDocs > 0 ? ( // Display search results (response) with appropriate components for sorting, descriptions, categories, and pagination.
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
