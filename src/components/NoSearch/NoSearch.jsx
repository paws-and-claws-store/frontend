import { SearchBar } from 'components/SearchBar/SearchBar';
import {
  SearchDescriptionSpan,
  SearchDesriptionResults,
  SearchQuery,
  SearchTravelBag,
} from 'pages/Search/Search.styled';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchQueryStore } from 'redux/selectors';

export const NoSearch = ({ status }) => {
  const searchQuery = useSelector(selectSearchQueryStore);
  const ref = useRef();
  ref.current = searchQuery;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', minHeight: '640px' }}>
      <div style={{ marginTop: '48px' }}>
        <SearchDesriptionResults style={{ fontSize: '24px', width: '736px' }}>
          <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
          <SearchQuery>{ref.current}</SearchQuery>
          <SearchDescriptionSpan> нічого не знайдено </SearchDescriptionSpan>
        </SearchDesriptionResults>
        <div style={{ marginTop: '180px', width: '520px' }}>
          <div style={{ marginBottom: '20px' }}>Спробуйте ще раз, уточнивши свій запит:</div>
          <SearchBar status={status} />
        </div>
      </div>

      <SearchTravelBag />
    </div>
  );
};
