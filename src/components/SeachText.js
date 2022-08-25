import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function SeachText(props) {
  const { search, setSearch } = useContext(TodoContext);
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search Todo Lists..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        className="btn btn-outline-secondary"
        onClick={() => setSearch('')}
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}

export default SeachText;
