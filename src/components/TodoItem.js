import React, { useState } from 'react';
import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem(props) {
  const { completed } = props.todo;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li
      className={`list-group-item p-3 callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      {isEditing ? (
        <TodoForm />
      ) : (
        <TodoContent
          todo={props.todo}
          fetchTodos={props.fetchTodos}
          openEdit={() => setIsEditing(true)}
        />
      )}
    </li>
  );
}

export default TodoItem;
