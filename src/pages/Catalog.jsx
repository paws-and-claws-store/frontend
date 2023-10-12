import { CardList, Pagination } from 'components';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from 'services/api';

export const Catalog = () => {
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
  console.log('loadMoreProducts:', loadMoreProducts);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false); // Окремий стан для слідкування за натисканням кнопки "Load More"

  useEffect(() => {
    async function fetchInitialData() {
      const response = await fetchAllProducts();
      console.log('response:', response);

      setProductsList([...response.docs]);
      setLoadMoreProducts([...response.docs]);

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
      console.log('pagination:', pagination);
    }

    fetchInitialData();
  }, []);

  useEffect(() => {
    async function fetchMoreData() {
      if (loadMoreClicked) {
        const response = await fetchAllProducts(currentPage);
        console.log('response:', response);

        setLoadMoreProducts(prevLoadMoreProducts => [
          ...prevLoadMoreProducts,
          ...response.docs,
        ]);

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
        console.log('pagination:', pagination);
      } else {
        const response = await fetchAllProducts(currentPage);

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
        console.log('pagination:', pagination);
      }
    }

    // Виконайте запит при натисканні "Load More"
    fetchMoreData();
  }, [currentPage, loadMoreClicked]);

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

  return (
    <>
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
    </>
  );
};
