import axios from 'axios';
import React, { useState } from 'react';
import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem(props) {
  const { completed } = props.todo;
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateSubmit = async (title) => {
    try {
      await axios.put('http://localhost:8080/todos/' + props.todo.id, {
        title,
        completed: props.todo.completed,
      });
      props.fetchTodos();
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li
      className={`list-group-item p-3 callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      {isEditing ? (
        <TodoForm
          onSubmit={handleUpdateSubmit}
          onCancel={() => setIsEditing(false)}
          initialValue={props.todo.title}
        />
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
