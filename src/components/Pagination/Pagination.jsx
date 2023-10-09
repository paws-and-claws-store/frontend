import React from 'react';

const Pagination = ({
  hasNextPage,
  hasPrevPage,
  limit,
  nextPage,
  page,
  prevPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <nav>
      <ul className="pagination">
        {hasPrevPage && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => onPageChange(prevPage)}
            >
              Попередня
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
              className="page-link"
              onClick={() => onPageChange(nextPage)}
            >
              Наступна
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
