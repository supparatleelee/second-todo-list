import React from 'react';

function SeachText() {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search Todo Lists..."
      />
      <button className="btn btn-outline-secondary">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}

export default SeachText;
