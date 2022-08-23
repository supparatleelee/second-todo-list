import React from 'react';
import PageLimit from './PageLimit';
import SeachText from './SeachText';
import SearchStatus from './SearchStatus';
import Sort from './Sort';
import TodoList from './TodoList';
import Pagination from './Pagination';

function TodoContainer(props) {
  return (
    <>
      <div className="my-2 d-flex gap-3">
        <SeachText setSearch={props.setSearch} search={props.search} />
        <SearchStatus
          todos={props.todos}
          fetchTodos={props.fetchTodos}
          setCompletedTasks={props.setCompletedTasks}
        />
      </div>

      <div className="my-2 d-flex justify-content-between">
        <PageLimit />
        <Sort setSortAtoZ={props.setSortAtoZ} />
      </div>

      <TodoList todos={props.todos} fetchTodos={props.fetchTodos} />

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        <Pagination />
      </div>
    </>
  );
}

export default TodoContainer;
