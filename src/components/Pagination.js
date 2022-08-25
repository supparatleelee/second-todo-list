import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function Pagination() {
  const { setPage, page, numPage } = useContext(TodoContext);
  return (
    <ul className="pagination pagination-sm mb-0">
      <li className="page-item">
        <button
          className={`page-link ${page == 1 ? 'disabled' : ''}`}
          onClick={(e) => setPage(page - 1)}
        >
          <i className="fa-solid fa-angle-left small" />
        </button>
      </li>

      {new Array(numPage).fill().map((item, index) => (
        <li
          className={`page-item ${page === index + 1 ? 'active' : ''}`}
          key={index}
        >
          <button
            className="page-link"
            value={index + 1}
            onClick={(e) => setPage(e.target.value)}
          >
            {index + 1}
          </button>
        </li>
      ))}

      <li className="page-item">
        <button
          className={`page-link ${page == numPage ? 'disabled' : ''}`}
          onClick={(e) => setPage(page + 1)}
        >
          <i className="fa-solid fa-angle-right small" />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
