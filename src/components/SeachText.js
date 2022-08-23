import React from 'react';

function SeachText(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={props.search}
        placeholder="Search Todo-List..."
        onChange={(e) => {
          props.setSearch(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        className="btn btn-outline-secondary"
        onClick={(e) => props.setSearch('')}
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}

export default SeachText;
