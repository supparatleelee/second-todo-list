import React, { useContext, useState } from 'react';
import PageLimit from './PageLimit';
import SeachText from './SeachText';
import SearchStatus from './SearchStatus';
import Sort from './Sort';
import TodoList from './TodoList';
import Pagination from './Pagination';
import { TodoContext } from '../contexts/TodoContext';

function TodoContainer(props) {
  const { page, pageLimit, numPage, total } = useContext(TodoContext);
  return (
    <>
      <div className="my-2 d-flex gap-3">
        <SeachText />
        <SearchStatus />
      </div>

      <div className="my-2 d-flex justify-content-between">
        <PageLimit />
        <Sort />
      </div>

      <TodoList todos={props.todos} />

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">
          Showing {(page - 1) * pageLimit + 1} to{' '}
          {page == numPage ? total : page * pageLimit} of {total} entries
        </small>
        <Pagination />
      </div>
    </>
  );
}

export default TodoContainer;
