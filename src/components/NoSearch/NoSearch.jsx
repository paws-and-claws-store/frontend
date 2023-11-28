// this component is used for rendering page if search results are empty

import {
  SearchCallToAction,
  SearchDescriptionSpan,
  SearchDesriptionResults,
  SearchQuery,
  SearchTravelBag,
} from 'pages/Search/Search.styled';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchQueryStore } from 'redux/selectors';

export const NoSearch = () => {
  const searchQuery = useSelector(selectSearchQueryStore); // extract search query from the Redux store
  const ref = useRef();
  ref.current = searchQuery; // used to store references to the search query.

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', minHeight: '640px' }}>
      <div style={{ marginTop: '48px' }}>
        <SearchDesriptionResults style={{ fontSize: '24px', width: '736px' }}>
          <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
          <SearchQuery>{ref.current}</SearchQuery>
          <SearchDescriptionSpan> нічого не знайдено </SearchDescriptionSpan>
        </SearchDesriptionResults>

        <SearchCallToAction>Спробуйте ще раз, уточнивши свій запит</SearchCallToAction>
      </div>

      <SearchTravelBag />
    </div>
  );
};
