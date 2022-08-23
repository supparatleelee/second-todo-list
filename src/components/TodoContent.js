import React, { useState } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';

function TodoContent(props) {
  const { title, completed } = props.todo;

  const handleClickDelete = async () => {
    try {
      await axios.delete('http://localhost:8080/todos/' + props.todo.id);
      // fetch data so it will rerender
      props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickStatus = async () => {
    try {
      await axios.put('http://localhost:8080/todos/' + props.todo.id, {
        title,
        completed: !completed,
      });
      props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button" onClick={props.openEdit}>
        {title}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary"
          onClick={handleClickStatus}
        >
          <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'} `} />
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
