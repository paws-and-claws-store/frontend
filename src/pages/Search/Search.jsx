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
  const [currentPage, setCurrentPage] = useState(1); // to track the current page of search results.

  const abortControllerRef = useRef(); // hooks used to store references to the AbortController.
  const searchRef = useRef(); // hooks used to store references to the search query.

  const searchQuery = useSelector(selectSearchQueryStore); // extract search query from the Redux store
  const sortingType = useSelector(selectSortingTypeStore); // extract sorting type from the Redux store

  const params = { findBy: encodeURIComponent(searchQuery).toLowerCase(), page: currentPage }; // params object to be used in the API call hook useFetchSearchQuery.

  //This is watching for changing current page, if user now on 2-nd or nore page and he change query page must be again 1
  useEffect(() => {
    setCurrentPage(1); // set page one to the new search query
  }, [searchQuery]);
  if (sortingType !== '') {
    params.sortBy = sortingType; // set to params object sorting type if sorting type is exists
  }

  if (abortControllerRef.current && searchQuery === '') {
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
    // query: searchQuery,
    // sorting: sortingType ? `&sortBy=${sortingType}` : '',
    signal,
    params,
    // pageNumber: `&page=${currentPage}`,
  }); // Utilizes a custom hook useFetchSearchQuery to fetch search results based on the params object and the abort signal. It receives data, error, isLoading, isFetching, and isError as response states.
  searchRef.current = { searchQuery: searchQuery, totalDocs: response?.totalDocs }; // set object of current search query and current response to avoid rerender unnecessary rerenders

  const {
    productsList,
    paginationData,
    loadMoreProducts,
    onAddPage,
    onPageChange,
    loadMoreClicked,
  } = usePagination({ response, isFetching, isError, setCurrentPage, currentPage }); // Use a custom hook usePagination to handle pagination-related functionalities such as managing product lists, pagination data, and changing pages.

  return (
    <div style={{ minHeight: '640px' }}>
      {error?.status >= 500 ? (
        (Notify.failure(error.error), (<></>)) // If there's a server error (status >= 500), it triggers a failure notification using Notify.failure(error.error).
      ) : isLoading && !isError ? (
        <Loader /> // Show a loader if data is loading (isLoading && !isError).
      ) : error?.status < 500 ? (
        <NoSearch /> // Show a component indicating no search results (<NoSearch />) if there's an error with status less than 500.
      ) : response ? ( // Display search results (response) with appropriate components for sorting, descriptions, categories, and pagination.
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
