import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function SearchStatus() {
  const { setCompleted } = useContext(TodoContext);
  return (
    <div className="btn-group">
      <input
        type="radio"
        className="btn-check"
        name="status"
        id="all"
        defaultChecked
        value=""
        onClick={(e) => setCompleted(e.target.value)}
      />
      <label className="btn btn-outline-secondary" htmlFor="all">
        <i className="fa-solid fa-list-ul" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="true"
        id="completed"
        onClick={(e) => setCompleted(e.target.value)}
      />
      <label className="btn btn-outline-secondary" htmlFor="completed">
        <i className="fa-solid fa-clipboard-check" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="false"
        id="pending"
        onClick={(e) => setCompleted(e.target.value)}
      />
      <label className="btn btn-outline-secondary" htmlFor="pending">
        <i className="fa-regular fa-clipboard" />
      </label>
    </div>
  );
}

export default SearchStatus;
