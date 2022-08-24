import React from 'react';

function PageLimit(props) {
  return (
    <div className="my-2 d-flex gap-3 align-items-center">
      <small className="text-muted">Display</small>
      <select
        className="form-select form-select-sm"
        style={{ width: '5rem' }}
        value={props.pageLimit}
        onChange={(e) => {
          props.setPageLimit(e.target.value);
          // console.log(e.target.value);
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
    </div>
  );
}

export default PageLimit;
