import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <div>
      <label>
        Filter:
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notDone">Not Done</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
