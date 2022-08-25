import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoForm(props) {
  const [title, setTitle] = useState(props.initialValue || '');
  const { createTodos, fetchTodos } = useContext(TodoContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    createTodos(title);
    // props.onSubmit(title);
    setTitle('');
  };

  const handleClickCancel = () => {
    setTitle('');
    props.onCancel?.();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Create Todo Lists..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleClickCancel}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
