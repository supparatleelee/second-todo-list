import React from 'react';
import TodoContent from './TodoContent';

function TodoItem(props) {
  return (
    <li
      className={`list-group-item p-3 callout-${
        props.todo.completed ? 'success' : 'warning'
      }`}
    >
      <TodoContent todo={props.todo} />
    </li>
  );
}

export default TodoItem;
