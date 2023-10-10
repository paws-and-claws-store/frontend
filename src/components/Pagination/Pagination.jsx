import React, { useState } from 'react';
import { BoxPagination, BtnLoadMore } from './Pagination.styled';
import { CaretLeftPagination, CaretRightPagination } from 'components/Icons';

const Pagination = ({ paginationData, onPageChange, onAddPage }) => {
  console.log('paginationData:', paginationData);
  const {
    hasNextPage,
    hasPrevPage,
    limit = 12,
    nextPage,
    page,
    prevPage,
    totalPages = 10,
  } = paginationData;

  console.log('hasNextPage:', hasNextPage);
  return (
    <BoxPagination>
      {hasNextPage && (
        <BtnLoadMore onClick={onAddPage}>Завантажити ще</BtnLoadMore>
      )}
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

// import React, { useState } from 'react';

// const Pagination = ({ hasNextPage, hasPrevPage, limit, nextPage, page, prevPage, totalPages, onPageChange }) => {
//   return (
//     <nav>
//       <ul className="pagination">
//         {hasPrevPage && (
//           <li className="page-item">
//             <button className="page-link" onClick={() => onPageChange(prevPage)}>Попередня</button>
//           </li>
//         )}

//         {Array.from({ length: totalPages }).map((_, index) => (
//           <li key={index} className={`page-item ${index + 1 === page ? 'active' : ''}`}>
//             <button className="page-link" onClick={() => onPageChange(index + 1)}>{index + 1}</button>
//           </li>
//         ))}

//         {hasNextPage && (
//           <li className="page-item">
//             <button className="page-link" onClick={() => onPageChange(nextPage)}>Наступна</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

// import React, { useState } from 'react';
// import Pagination from './Pagination';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12; // Кількість елементів на сторінці
//   const totalDocs = 20; // Загальна кількість документів
//   const totalPages = Math.ceil(totalDocs / itemsPerPage);

//   const onPageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {/* Рендер вашого списку документів для поточної сторінки currentPage */}
//       <Pagination
//         hasNextPage={currentPage < totalPages}
//         hasPrevPage={currentPage > 1}
//         limit={itemsPerPage}
//         nextPage={currentPage + 1}
//         page={currentPage}
//         prevPage={currentPage - 1}
//         totalPages={totalPages}
//         onPageChange={onPageChange}
//       />
//     </div>
//   );
// };

// export default App;
