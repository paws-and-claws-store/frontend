import { CardList, Pagination } from 'components';
import { SearchWrapperCatalog } from './Search.styled';
import { memo } from 'react';

export default memo(function SearchWrapper({ params }) {
  const {
    productsList,

    paginationData,
    onPageChange,
    onAddPage,
  } = params;

  return (
    <SearchWrapperCatalog>
      <CardList productsList={productsList} />
      <Pagination
        paginationData={paginationData}
        onPageChange={onPageChange}
        onAddPage={onAddPage}
      />
    </SearchWrapperCatalog>
  );
});
