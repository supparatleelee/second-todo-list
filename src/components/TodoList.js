import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  // const [itemsLimit, setItemsLimit] = useState(5);

  return (
    <>
      <ul className="list-group my-2">
        {/* Don't forget to put key when mapping */}
        {/* {props.todos.map((item) => (
          <TodoItem key={item.id} todo={item} fetchTodos={props.fetchTodos} />
        ))} */}
        {props.todos
          // .slice(0, props.pageLimit ? props.pageLimit : props.todos.length)
          .map((item) => (
            <TodoItem key={item.id} todo={item} fetchTodos={props.fetchTodos} />
          ))}
      </ul>
    </>
  );
}

export default TodoList;
