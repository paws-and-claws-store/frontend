import { memo } from 'react';
import { SearchDescriptionSpan, SearchDesriptionResults, SearchQuery } from './Search.styled';

export default memo(function SearchDescription({ searchRef }) {
  return (
    <SearchDesriptionResults>
      <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
      <SearchQuery>{searchRef.current.searchQuery}</SearchQuery>
      <SearchDescriptionSpan> знайдено </SearchDescriptionSpan>
      <SearchQuery>{searchRef.current.totalDocs} </SearchQuery>
      <SearchDescriptionSpan>
        {searchRef.current.totalDocs === 1
          ? 'товар'
          : searchRef.current.totalDocs < 5
          ? 'товари'
          : 'товарів'}
      </SearchDescriptionSpan>
    </SearchDesriptionResults>
  );
});
