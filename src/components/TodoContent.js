import React from 'react';
// import { useContext } from 'react';
// import { ContextObject } from '../App';

function TodoContent({ todo: { title, completed } }) {
  // const contextValue = useContext(ContextObject);
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button">
        {/* {contextValue.name} */}
        {title}
      </span>
      <div className="btn-group">
        <button className="btn btn-outline-secondary">
          <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`} />
        </button>
        <button className="btn btn-outline-secondary">
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default TodoContent;
