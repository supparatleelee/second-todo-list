import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [completedTasks, setCompletedTasks] = useState('');
  const [sortAtoZ, setSortAtoZ] = useState('title');
  const [pageLimit, setPageLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const numPage = Math.ceil(total / pageLimit);

  const url = `http://localhost:8080/todos?title=${search}&completed=${completedTasks}&sort=${sortAtoZ}&page=${page}&limit=${pageLimit}`;

  const fetchTodos = async () => {
    try {
      const res = await axios.get(url);
      setTodos(res.data.todos);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    }
  };

  // link data from the server into todos state -- use useEffect as we need that data from external.
  useEffect(() => {
    // axios
    //   .get('http://localhost:8080/todos')
    //   .then((res) => {
    //     //response from axios => data, status, statusText. headers, request
    //     // console.log(res.data);
    //     setTodos(res.data.todos);
    //     console.log(todos);
    //     // see react components in the browser.
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (search === '') {
      fetchTodos();
    } else {
      const delayDebounceFn = setTimeout(() => {
        console.log(search);
        // Send Axios request here
        fetchTodos();
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    }
    // eslint-disable-next-line
  }, [url]); // [] - because we just want to fetch data just once.
  // [p1, p2, p3] - if one of them changes, this fetchTodos function will be worked.

  const handleSubmitCreate = async (title) => {
    try {
      await axios.post('http://localhost:8080/todos', {
        title,
        completed: false,
      });
      fetchTodos();
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        {/* because we're gonna reuse the TodoForm again, so we don't want margin-y 4 */}
        <TodoForm onSubmit={handleSubmitCreate} />
      </div>

      <TodoContainer
        todos={todos}
        fetchTodos={fetchTodos}
        setSearch={setSearch}
        search={search}
        setCompletedTasks={setCompletedTasks}
        setSortAtoZ={setSortAtoZ}
        setPageLimit={setPageLimit}
        pageLimit={pageLimit}
        setPage={setPage}
        page={page}
        numPage={numPage}
        total={total}
      />
    </div>
  );
}

export default App;
