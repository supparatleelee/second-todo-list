import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoForm() {
  const [title, setTitle] = useState('');
  const ctx = useContext(TodoContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    ctx.createTodos(title);
    setTitle('');
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
          onClick={() => setTitle('')}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
