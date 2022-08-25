import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
// import { useContext } from 'react';
// import { ContextObject } from '../App';

function TodoContent({ todo: { title, completed, id }, openEdit }) {
  // const contextValue = useContext(ContextObject);
  const { fetchTodos } = useContext(TodoContext);

  const handleClickDelete = async () => {
    try {
      await axios.delete('http://localhost:8080/todos/' + id);
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickStatus = async () => {
    try {
      await axios.put('http://localhost:8080/todos/' + id, {
        title,
        completed: !completed,
      });
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button" onClick={openEdit}>
        {/* {contextValue.name} */}
        {title}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary"
          onClick={handleClickStatus}
        >
          <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`} />
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={handleClickDelete}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default TodoContent;
