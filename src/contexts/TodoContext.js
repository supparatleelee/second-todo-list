import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Context Object
const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [completed, setCompleted] = useState('');
  const [pageLimit, setPageLimit] = useState(5);
  const [sortAtoZ, setSortAtoZ] = useState('title');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const numPage = Math.ceil(total / pageLimit);

  const url = `http://localhost:8080/todos?title=${search}&completed=${completed}&limit=${pageLimit}&sort=${sortAtoZ}&page=${page}`;

  const fetchTodos = async () => {
    try {
      const res = await axios.get(url);
      setTodos(res.data.todos);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setTodos(res.data.todos);
          setTotal(res.data.total);
        })
        .catch((err) => console.log(err));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [url]);

  const createTodos = (title) => {
    axios
      .post('http://localhost:8080/todos', { title, completed: false })
      .then((res) => {
        // just one object, not array like above
        setTodos([res.data.todo, ...todos]);
      })
      .catch((err) => console.log(err));
  };

  // const deleteTodos = (id) => {
  //   axios
  //     .delete('http://localhost:8080/todos/' + id)
  //     .then(() => {
  //       setTodos(todos.filter((item) => item.id !== id));
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const updateTodos = id => {
  //   axios.put()
  // }
  // set instructor code in github

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        createTodos,
        setTodos,
        search,
        setSearch,
        setCompleted,
        setPageLimit,
        setSortAtoZ,
        setPage,
        page,
        pageLimit,
        numPage,
        total,
        url,
        fetchTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
