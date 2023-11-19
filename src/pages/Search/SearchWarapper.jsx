import { CardList, Pagination } from 'components';
import { SearchWrapperCatalog } from './Search.styled';
import { memo } from 'react';

export default memo(function SearchWrapper({ params }) {
  const {
    currentPage,
    productsList,
    loadMoreClicked,
    loadMoreProducts,
    paginationData,
    onPageChange,
    onAddPage,
  } = params;

  return (
    <SearchWrapperCatalog>
      <CardList
        productsList={
          currentPage === 1 ? productsList : loadMoreClicked ? loadMoreProducts : productsList
        }
      />
      <Pagination
        paginationData={paginationData}
        onPageChange={onPageChange}
        onAddPage={onAddPage}
      />
    </SearchWrapperCatalog>
  );
});
