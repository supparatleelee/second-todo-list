import React from 'react';

function Sort() {
  return (
    <div className="my-2 d-flex justify-content-between">
      <div className="d-flex gap-2 align-items-center">
        <small className="text-muted">Sort by</small>
        <select
          className="form-select form-select-sm"
          style={{ width: '8rem' }}
        >
          <option>Title: A-Z</option>
          <option>Title: Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
