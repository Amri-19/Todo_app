import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', description);
    if (newDescription) {
      dispatch(editTask(id, newDescription));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {description}
      </span>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
