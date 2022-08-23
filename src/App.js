import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:8080/todos');
      setTodos(res.data.todos);
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
    fetchTodos();
  }, []); // because we just want to fetch data just once.

  const handleSubmitCreate = async (title) => {
    try {
      const res = await axios.post('http://localhost:8080/todos', {
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

      <TodoContainer todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
