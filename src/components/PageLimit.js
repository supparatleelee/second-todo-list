import React from 'react';

function PageLimit() {
  return (
    <div className="my-2 d-flex gap-3">
      <small className="text-muted">Display</small>
      <select className="form-select form-select-sm" style={{ width: '5rem' }}>
        <option>5</option>
        <option>10</option>
        <option>25</option>
      </select>
    </div>
  );
}

export default PageLimit;
