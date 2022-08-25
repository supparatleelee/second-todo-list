import React, { useContext } from 'react';
import TodoContent from './TodoContent';
import { useState } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import { TodoContext } from '../contexts/TodoContext';

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { fetchTodos } = useContext(TodoContext);

  const handleUpdateSubmit = async (title) => {
    try {
      await axios.put('http://localhost:8080/todos/' + props.todo.id, {
        title,
        completed: props.todo.completed,
      });
      fetchTodos();
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <li
      className={`list-group-item p-3 callout-${
        props.todo.completed ? 'success' : 'warning'
      }`}
    >
      {/* do conditional rendering here for Edit mode */}
      {isEditing ? (
        <TodoForm
          onSubmit={handleUpdateSubmit}
          // onCancel to setIsEditing onclick in there to false
          onCancel={() => setIsEditing(false)}
          initialValue={props.todo.title}
        />
      ) : (
        //openEdit to setIsEditing onclick on click in there to true
        <TodoContent todo={props.todo} openEdit={() => setIsEditing(true)} />
      )}
    </li>
  );
}

export default TodoItem;
