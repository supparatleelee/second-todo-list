import React from 'react';
import PageLimit from './PageLimit';
import SeachText from './SeachText';
import SearchStatus from './SearchStatus';
import Sort from './Sort';
import TodoList from './TodoList';
import Pagination from './Pagination';

function TodoContainer(props) {
  // const [pageLimit, setPageLimit] = useState(5);

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
        <PageLimit
          setPageLimit={props.setPageLimit}
          pageLimit={props.pageLimit}
        />
        <Sort setSortAtoZ={props.setSortAtoZ} />
      </div>

      <TodoList
        todos={props.todos}
        fetchTodos={props.fetchTodos}
        // pageLimit={props.pageLimit}
      />

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">
          {/* page: 1, pageLimit: 5 - 1 to 5 */}
          {/* page: 2, pageLimit: 5 - 6 to 10 */}
          {/* page: 3, pageLimit: 5 - 11 to 14*/}
          Showing {(props.page - 1) * props.pageLimit + 1} to{' '}
          {props.page == props.numPage
            ? props.total
            : props.page * props.pageLimit}{' '}
          of {props.total} entries
        </small>
        <Pagination
          setPage={props.setPage}
          page={props.page}
          pageLimit={props.pageLimit}
          numPage={props.numPage}
        />
      </div>
    </>
  );
}

export default TodoContainer;
