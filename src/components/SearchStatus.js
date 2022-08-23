import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function SearchStatus(props) {
  const [todos, setTodos] = useState([]);
  const { data, fetchTodos } = props;

  return (
    <div className="btn-group">
      <input
        type="radio"
        className="btn-check"
        name="status"
        id="all"
        defaultChecked
        onClick={(e) => props.setCompletedTasks('')}
      />
      <label className="btn btn-outline-secondary" htmlFor="all">
        <i className="fa-solid fa-list-ul" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="completed"
        id="completed"
        onClick={(e) => props.setCompletedTasks(true)}
      />
      <label className="btn btn-outline-secondary" htmlFor="completed">
        <i className="fa-solid fa-clipboard-check" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="pending"
        id="pending"
        onClick={(e) => props.setCompletedTasks(false)}
      />
      <label className="btn btn-outline-secondary" htmlFor="pending">
        <i className="fa-regular fa-clipboard" />
      </label>
    </div>
  );
}

export default SearchStatus;
