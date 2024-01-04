import { memo } from 'react';
import {
  SearchDescriptionSpan,
  SearchDesriptionResultsSuccess,
  SearchQuery,
} from './Search.styled';
import { goodsSpan } from 'helpers/goodsSpan';

export default memo(function SearchDescription({ totalDocs, searchQuery }) {
  return (
    <SearchDesriptionResultsSuccess>
      <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
      <SearchQuery> “{searchQuery}” </SearchQuery>
      <SearchDescriptionSpan> знайдено </SearchDescriptionSpan>
      <SearchQuery>{totalDocs} </SearchQuery>
      <SearchDescriptionSpan>{goodsSpan(totalDocs)}</SearchDescriptionSpan>
    </SearchDesriptionResultsSuccess>
  );
});
