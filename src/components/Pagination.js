import React from 'react';

function Pagination(props) {
  return (
    <ul className="pagination pagination-sm mb-0">
      <li className="page-item">
        <button
          className={`page-link ${props.page === 1 ? 'disabled' : ''}`}
          onClick={(e) => props.setPage(props.page - 1)}
        >
          <i className="fa-solid fa-angle-left small" />
        </button>
      </li>
      {/* <li className="page-item">
        <button
          className="page-link"
          onClick={(e) => props.setPage(e.target.value)}
          value="1"
        >
          1
        </button>
      </li>
      <li className="page-item">
        <button
          className="page-link"
          onClick={(e) => props.setPage(e.target.value)}
          value="2"
        >
          2
        </button>
      </li>
      <li className="page-item">
        <button
          className="page-link"
          onClick={(e) => props.setPage(e.target.value)}
          value="3"
        >
          3
        </button>
      </li> */}

      {/* if numPage = 4 => [1, 2, 3, 4] */}
      {new Array(props.numPage).fill().map((_, index) => (
        <li
          className={`page-item ${props.page == index + 1 ? 'active' : ''}`}
          key={index}
        >
          <button
            className="page-link"
            onClick={(e) => props.setPage(e.target.value)}
            value={index + 1}
          >
            {index + 1}
          </button>
        </li>
      ))}

      <li className="page-item">
        <button
          className={`page-link ${
            props.page === props.numPage ? 'disabled' : ''
          }`}
          onClick={(e) => props.setPage(props.page + 1)}
        >
          <i className="fa-solid fa-angle-right small" />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
