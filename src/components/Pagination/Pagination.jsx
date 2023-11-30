import React from 'react';
import {
  BoxPagination,
  BtnLoadMore,
  BtnPagination,
  PaginationArrow,
  PaginationList,
  PaginationListItem,
} from './Pagination.styled';
import { CaretLeftPagination, CaretRightPagination } from 'components/Icons';

export const Pagination = ({ paginationData, onPageChange, onAddPage }) => {
  const { hasNextPage, hasPrevPage, totalPages, nextPage, page, prevPage } = paginationData;

  const displayedPages = [];

  const maxPagesToShow = 3; // Максимальна кількість сторінок для відображення

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxPagesToShow) {
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    if (page <= halfPagesToShow) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (page + halfPagesToShow >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = page - halfPagesToShow;
      endPage = page + halfPagesToShow;
    }
  }

  if (startPage > 1) {
    displayedPages.push(1);
    if (startPage > 2) {
      displayedPages.push('...');
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    displayedPages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      displayedPages.push('...');
    }
    displayedPages.push(totalPages);
  }

  return totalPages <= 1 ? null : (
    <BoxPagination>
      {hasNextPage && <BtnLoadMore onClick={() => onAddPage(page)}>Завантажити ще</BtnLoadMore>}
      <nav>
        <PaginationList>
          <li>
            <PaginationArrow onClick={() => onPageChange(prevPage)} disabled={!hasPrevPage}>
              <CaretLeftPagination />
            </PaginationArrow>
          </li>

          {displayedPages.map((item, index) => (
            <PaginationListItem key={index} className={`${item === page ? 'active' : ''}`}>
              {item === '...' ? (
                <span>...</span>
              ) : (
                <BtnPagination onClick={() => onPageChange(item)}>{item}</BtnPagination>
              )}
            </PaginationListItem>
          ))}

          <li>
            <PaginationArrow onClick={() => onPageChange(nextPage)} disabled={!hasNextPage}>
              <CaretRightPagination />
            </PaginationArrow>
          </li>
        </PaginationList>
      </nav>
    </BoxPagination>
  );
};
