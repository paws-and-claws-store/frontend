import React, { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { useRef, useState } from 'react';
import { useFetchSearchQuery } from 'redux/api/operations';
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
  selectBrandsFilter,
  selectCheckedBrands,
  selectIsBrandsFilterSet,
  selectIsPriceRangeSet,
  selectPriceValue,
  selectSearchQueryStore,
  selectSortingTypeStoreDefault,
} from 'redux/selectors/selectors';
import { NoSearch } from 'components/NoSearch/NoSearch';
import { Notify } from 'notiflix';
import SearchWrapper from './SearchWarapper';
import SearchDescription from './SearchDescription';
import SearchCategory from './SearchCategory';
import { usePagination } from 'hooks/usePagination';
import { useSearchParams } from 'react-router-dom';
import { setQuerySearch } from 'redux/slice/searchSlice';
import {
  setClearSetStatusPriceRange,
  setDefaultPriceRange,
  setPriceChange,
} from 'redux/slice/priceRangeSlice';
import { setClearSetStatusBrandsFilter, setDefaultBrands } from 'redux/slice/brandsFilterSlice';

export default function Search() {
  const searchQuery = useSelector(selectSearchQueryStore); // extract search query from the Redux store
  const [currentPage, setCurrentPage] = useState(1); // to track the current page of search results.
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const abortControllerRef = useRef(); // hooks used to store references to the AbortController.
  const priceValue = useSelector(selectPriceValue); // get price value from price slider
  const isPriceRangeSet = useSelector(selectIsPriceRangeSet); // get price range set state from price slider
  const isBrandsSet = useSelector(selectIsBrandsFilterSet);
  const checkedBrands = useSelector(selectCheckedBrands);

  const brandsString = useSelector(selectBrandsFilter);
  const defaultSortSelect = useSelector(selectSortingTypeStoreDefault);
  const query = searchParams.get('query');
  const sortBy = searchParams.get('sortBy') || defaultSortSelect;
  const availability = searchParams.get('availability') || false;
  const sortingType = sortBy; // extract sorting type from the Redux store

  useEffect(() => {
    setSearchParams(prevSearchParams => {
      const updatedSearchParams = new URLSearchParams(prevSearchParams);

      if (searchQuery) {
        updatedSearchParams.set('query', searchQuery);
      }

      if (sortBy) {
        updatedSearchParams.set('sortBy', sortBy);
      }

      return updatedSearchParams;
    });
  }, [searchQuery, sortBy, setSearchParams]);

  useEffect(() => {
    dispatch(setPriceChange(false));
    dispatch(setClearSetStatusPriceRange(true)); // reset status to price range redux store
    dispatch(setClearSetStatusBrandsFilter(true)); // reset status to Brands filter redux store
  }, [dispatch, searchQuery]); // reset filters if search query was changed

  useEffect(() => {
    if (query) {
      dispatch(setQuerySearch(query));
    }

    if (query || query !== null) {
      dispatch(setQuerySearch(query));
    }
  }, [dispatch, query]);

  const params = {
    findBy: encodeURIComponent(query ? query : searchQuery).toLowerCase(),
    page: currentPage,
    sortBy,
  }; // params object to be used in the API call hook useFetchSearchQuery.

  // add price value data if defaultValue is updated in priceRangeSlice
  if (priceValue[1] !== 1000000) {
    params.minPrice = priceValue[0];
    params.maxPrice = priceValue[1];
  }

  useEffect(() => {
    setCurrentPage(1); // set page one to the new search query, sorting type or price calue from price slider
  }, [searchQuery, checkedBrands, sortBy]);

  // if (sortingType !== '') {
  //   params.sortBy = sortingType; // set to params object sorting type if sorting type is exists
  // }

  // if (!sortBy) {
  //   params.sortBy = defaultSortSelect;
  // }

  // if (sortBy) {
  //   params.sortBy = sortBy; // set to params object sorting type if sorting type is exists
  // }

  if (availability) {
    params.availability = availability;
  }

  if (brandsString !== '') {
    params.brands = brandsString; // set brands to query
  }

  if (abortControllerRef.current && searchParams.get('query') === '') {
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

  const { productsList, paginationData, onAddPage, onPageChange } = usePagination({
    response,
    isFetching,
    isError,
    setCurrentPage,
    currentPage,
    sortingType,
  }); // Use a custom hook usePagination to handle pagination-related functionalities such as managing product lists, pagination data, and changing pages.

  const totalDocs = response?.totalDocs;
  useEffect(() => {}, [totalDocs]); // rerender search component when total docs are changed

  useEffect(() => {
    if (!isPriceRangeSet && !isBrandsSet) {
      if (response?.minMax) {
        dispatch(setDefaultPriceRange(response?.minMax));
      }
      if (response?.brands) {
        dispatch(setDefaultBrands(response?.brands));
      }
    }
  }, [dispatch, isBrandsSet, isPriceRangeSet, query, response?.brands, response?.minMax]); // update default price range value only if query are changed and response are exists, not selected filters

  // Render Section

  if (error?.status >= 500) {
    return <div style={{ minHeight: '640px' }}>{(Notify.failure(error.error), (<></>))}</div>; // If there's a server error (status >= 500), it triggers a failure notification using Notify.failure(error.error).
  }

  if (isLoading && !isError) {
    return (
      <div style={{ minHeight: '640px' }}>
        <Loader />
      </div>
    ); // Show a loader if data is loading (isLoading && !isError).
  }

  if (totalDocs > 0 || (totalDocs === 0 && isPriceRangeSet) || (totalDocs === 0 && isBrandsSet)) {
    return (
      <div style={{ minHeight: '640px' }}>
        {
          // Display search results (response) with appropriate components for sorting, descriptions, categories, and pagination.
          <>
            <UpsideSearchContainer>
              <TitleSearch>Результати пошуку</TitleSearch>
              <SearchDescription
                totalDocs={totalDocs}
                searchQuery={searchParams ? query : searchQuery}
              />
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
        }
      </div>
    ); // If there's a server error (status >= 500), it triggers a failure notification using Notify.failure(error.error).
  }

  if (totalDocs === 0) {
    return (
      <div style={{ minHeight: '640px' }}>
        <NoSearch />
      </div>
    ); // Show a component indicating no search results (<NoSearch />) if there's an error with status less than 500.
  }
}
