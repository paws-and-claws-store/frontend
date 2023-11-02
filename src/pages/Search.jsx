import { CardList, Pagination } from 'components';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useFetchSearchQuery } from 'redux/operations';
import {
  FoldedContainer,
  SearchAsideCatalog,
  SearchBrands,
  SearchCardList,
  SearchCategoryList,
  SearchContainer,
  SearchDescriptionSpan,
  SearchDesriptionResults,
  SearchFilter,
  SearchQuery,
  SearchTravelBag,
  SearchWrapperCatalog,
  SortingContainer,
  SortingSpan,
  TitleSearch,
  UpsideSearchContainer,
} from './Search.styled';
import { RightArrow } from 'components/Icons';
import { useSelector } from 'react-redux';
import { PriceSlider } from 'components/PriceSlider/PriceSlider';
import React from 'react';
import { Filter } from 'components/Filter/Filter';
import { SortSelect } from 'components/Filter/SortSelect';
import { theme } from 'styles';
import { selectSearchQueryStore, selectSortingTypeStore } from 'redux/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const Search = () => {
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    hasNextPage: false,
    hasPrevPage: false,
    limit: null,
    nextPage: null,
    page: 1,
    prevPage: null,
    totalPages: null,
  });
  const [loadMoreProducts, setLoadMoreProducts] = useState([]); // Окремий стан для продуктів, завантажених через "Load More"
  const [loadMoreClicked, setLoadMoreClicked] = useState(false); // Окремий стан для слідкування за натисканням кнопки "Load More"
  const [active, setActive] = useState({ price: false, brands: false });

  const searchQuery = useSelector(selectSearchQueryStore);
  const sortingType = useSelector(selectSortingTypeStore);
  const {
    data: response,
    error,
    isLoading,
    isFetching,
  } = useFetchSearchQuery({
    query: searchQuery,
    sorting: sortingType ? `&sortBy=${sortingType}` : '',
  });

  useEffect(() => {
    if (response) {
      async function fetchInitialData() {
        if (loadMoreClicked) {
          setLoadMoreProducts(prevLoadMoreProducts => [...prevLoadMoreProducts, ...response.docs]);
          const pagination = {
            hasNextPage: response.hasNextPage,
            hasPrevPage: response.hasPrevPage,
            limit: response.limit,
            nextPage: response.nextPage,
            page: response.page,
            prevPage: response.prevPage,
            totalPages: response.totalPages,
          };
          setPaginationData(pagination);
        } else {
          setProductsList([...response.docs]);
          setLoadMoreProducts([...response.docs]);
          setLoadMoreClicked(false);

          const pagination = {
            hasNextPage: response.hasNextPage,
            hasPrevPage: response.hasPrevPage,
            limit: response.limit,
            nextPage: response.nextPage,
            page: response.page,
            prevPage: response.prevPage,
            totalPages: response.totalPages,
          };
          setPaginationData(pagination);
        }
      }

      if (!isFetching) {
        fetchInitialData();
      }
    }
  }, [isFetching, loadMoreClicked, response]);

  const onPageChange = pageNumber => {
    // При кліку на номер сторінки через пагінацію, змініть стан
    setLoadMoreClicked(false);
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onAddPage = async () => {
    // При натисканні на кнопку "Load More", змініть стан
    setLoadMoreClicked(true);
    setCurrentPage(currentPage + 1);
  };

  const handleClickToggle = e => {
    active[e.currentTarget.name]
      ? setActive({ ...active, [e.currentTarget.name]: false })
      : setActive({ ...active, [e.currentTarget.name]: true });
  };

  return (
    <>
      {error?.status >= 500 ? (
        <>Oops, there was an error ...</>
      ) : isLoading ? (
        <Loader />
      ) : error?.status < 500 ? (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginTop: '48px' }}>
            <SearchDesriptionResults style={{ fontSize: '24px' }}>
              <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
              <SearchQuery>{searchQuery}</SearchQuery>
              <SearchDescriptionSpan> нічого не знайдено </SearchDescriptionSpan>
            </SearchDesriptionResults>
            <div style={{ marginTop: '180px', width: '520px' }}>
              <div style={{ marginBottom: '20px' }}>Спробуйте ще раз, уточнивши свій запит:</div>
              <SearchBar />
            </div>
          </div>

          <SearchTravelBag />
        </div>
      ) : response?.docs.length > 0 ? (
        <>
          <UpsideSearchContainer>
            <TitleSearch>Результати пошуку</TitleSearch>
            <SearchDesriptionResults>
              <SearchDescriptionSpan>За запитом </SearchDescriptionSpan>
              <SearchQuery>{searchQuery}</SearchQuery>
              <SearchDescriptionSpan> знайдено </SearchDescriptionSpan>
              <SearchQuery>{response.totalDocs} </SearchQuery>
              <SearchDescriptionSpan>
                {response.totalDocs === 1 ? 'товар' : response.totalDocs < 5 ? 'товари' : 'товарів'}
              </SearchDescriptionSpan>
            </SearchDesriptionResults>
            <SortingContainer>
              <SortingSpan>Сортування:</SortingSpan>
              <SortSelect />
            </SortingContainer>
          </UpsideSearchContainer>

          <SearchContainer>
            <SearchAsideCatalog>
              <SearchCategoryList>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <li key={1}>
                    <SearchFilter active={active['price']}>
                      <FoldedContainer
                        active={active['price']}
                        style={{
                          backgroundColor: active['price']
                            ? theme.colors.secGreen
                            : theme.colors.beige,
                        }}
                      >
                        <span>Ціна</span>
                        <button onClick={handleClickToggle} name="price">
                          <RightArrow direction={active['price'] ? 'rotate(90)' : 'rotate(-90)'} />
                        </button>
                      </FoldedContainer>
                      <PriceSlider active={active['price']} />
                    </SearchFilter>
                  </li>
                  <li key={2}>
                    <SearchBrands activeBrands={active['brands']}>
                      <FoldedContainer
                        style={{
                          backgroundColor: active['brands']
                            ? theme.colors.secGreen
                            : theme.colors.beige,
                        }}
                      >
                        <span>Бренди</span>
                        <button onClick={handleClickToggle} name="brands">
                          <RightArrow direction={active['brands'] ? 'rotate(90)' : 'rotate(-90)'} />
                        </button>
                      </FoldedContainer>
                      <Filter active={active['brands']} />
                    </SearchBrands>
                  </li>
                </ul>
              </SearchCategoryList>
            </SearchAsideCatalog>

            <SearchWrapperCatalog>
              <SearchCardList>
                <CardList
                  productsList={
                    currentPage === 1
                      ? productsList
                      : loadMoreClicked
                      ? loadMoreProducts
                      : productsList
                  }
                />
                <Pagination
                  paginationData={paginationData}
                  onPageChange={onPageChange}
                  onAddPage={onAddPage}
                />
              </SearchCardList>
            </SearchWrapperCatalog>
          </SearchContainer>
        </>
      ) : null}
    </>
  );
};
