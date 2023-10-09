import React from 'react';
import { BoxPagination, BtnLoadMore } from './Pagination.styled';
import { CaretLeftPagination, CaretRightPagination } from 'components/Icons';

const Pagination = ({
  hasNextPage = true,
  hasPrevPage = true,
  limit,
  nextPage,
  page,
  prevPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <BoxPagination>
      <BtnLoadMore>Завантажити ще</BtnLoadMore>
      <nav>
        <ul className="pagination">
          {hasPrevPage && (
            <li className="page-item">
              <button
              // className="page-link"
              // onClick={() => onPageChange(prevPage)}
              >
                <CaretLeftPagination />
              </button>
            </li>
          )}

          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${index + 1 === page ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {hasNextPage && (
            <li className="page-item">
              <button
              // className="page-link"
              // onClick={() => onPageChange(nextPage)}
              >
                <CaretRightPagination />
              </button>
            </li>
          )}
        </ul>
      </nav>
    </BoxPagination>
  );
};

export default Pagination;
