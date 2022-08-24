import React from 'react';

function Sort(props) {
  return (
    <div className="my-2 d-flex justify-content-between">
      <div className="d-flex gap-2 align-items-center">
        <small className="text-muted">Sort by</small>
        <select
          className="form-select form-select-sm"
          style={{ width: '8rem' }}
          onChange={(e) => {
            props.setSortAtoZ(e.target.value);
            // console.log(e.target.value);
          }}
          defaultValue="title"
        >
          <option value="">Default</option>
          <option value="title">Title: A-Z</option>
          <option value="-title">Title: Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
