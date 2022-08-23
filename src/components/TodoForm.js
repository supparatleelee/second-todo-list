import { useEffect, useState } from 'react';
import axios from 'axios';

function TodoForm(props) {
  const [title, setTitle] = useState(props.initialValue || '');

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // validate first

    //success validation
    props.onSubmit(title);
    setTitle('');

    // try {
    //   const res = await axios.post('http://localhost:8080/todos', {
    //     title,
    //     completed: false,
    //   });
    //   props.fetchTodos();
    //   setTitle('');
    //   // console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleClickCancel = () => {
    setTitle('');
    props.onCancel?.();
    // ? - optional chaining. if have props.onCancle -> use it
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={title}
          placeholder="Create Todo-List..."
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(title);
          }}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleClickCancel}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
