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
import { selectSearchQueryStore } from 'redux/selectors/selectors';
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
import { setCategoriesDefault } from 'redux/slice/categoriesFilterSlice';

export default function Search() {
  const searchQuery = useSelector(selectSearchQueryStore); // extract search query from the Redux store
  const [currentPage, setCurrentPage] = useState(1); // to track the current page of search results.
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const abortControllerRef = useRef(); // hooks used to store references to the AbortController.

  const query = searchParams.get('query');
  const sortBy = searchParams.get('sortBy');
  const availability = searchParams.get('availability') || false;
  const sortingType = sortBy; // extract sorting type from the Redux store
  const urlCategories = searchParams.get('categories');
  const urlBrands = searchParams.get('brands');
  const priceRange = searchParams.get('price');
  const priceRangeArray = priceRange ? priceRange.split('-').map(item => Number(item.trim())) : [];

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

  if (priceRange) {
    params.minPrice = priceRangeArray[0];
    params.maxPrice = priceRangeArray[1];
  }

  useEffect(() => {
    setCurrentPage(1); // set page one to the new search query, sorting type or price calue from price slider
  }, [searchQuery, urlBrands, sortBy]);

  if (availability) {
    params.availability = availability;
  }

  if (urlCategories) {
    params.category = urlCategories;
  }

  if (urlBrands) {
    params.brands = urlBrands;
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
    if (response?.categories) {
      dispatch(setCategoriesDefault(response?.categories));
    }
  }, [dispatch, response?.categories]);

  useEffect(() => {
    if (response?.minMax) {
      dispatch(setDefaultPriceRange(response?.minMax));
    }
  }, [dispatch, response?.minMax]);

  useEffect(() => {
    if (response?.brandsDefault) {
      dispatch(setDefaultBrands(response?.brandsDefault));
    }
  }, [dispatch, response?.brandsDefault]);

  useEffect(() => {}, [urlCategories]);

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

  if (
    totalDocs > 0 ||
    (totalDocs === 0 && priceRange) ||
    (totalDocs === 0 && urlBrands) ||
    (totalDocs === 0 && urlCategories) ||
    (totalDocs === 0 && priceRange)
  ) {
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
