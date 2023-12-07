import { memo } from 'react';
import {
  SearchDescriptionSpan,
  SearchDesriptionResultsSuccess,
  SearchQuery,
} from './Search.styled';

export default memo(function SearchDescription({ totalDocs, searchQuery }) {
  return (
    <SearchDesriptionResultsSuccess>
      <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
      <SearchQuery> “{searchQuery}” </SearchQuery>
      <SearchDescriptionSpan> знайдено </SearchDescriptionSpan>
      <SearchQuery>{totalDocs} </SearchQuery>
      <SearchDescriptionSpan>
        {totalDocs === 1 ? 'товар' : totalDocs < 5 ? 'товари' : 'товарів'}
      </SearchDescriptionSpan>
    </SearchDesriptionResultsSuccess>
  );
});
