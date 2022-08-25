import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function PageLimit() {
  const { setPageLimit } = useContext(TodoContext);
  return (
    <div className="my-2 d-flex gap-3">
      <small className="text-muted">Display</small>
      <select
        className="form-select form-select-sm"
        style={{ width: '5rem' }}
        onChange={(e) => setPageLimit(e.target.value)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
    </div>
  );
}

export default PageLimit;
