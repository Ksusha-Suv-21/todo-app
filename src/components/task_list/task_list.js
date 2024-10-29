import React from "react";
import Task from '../task';
import PropTypes from 'prop-types';

import './task_list.css';

const TaskList = ({ todos, onDeleted = () => {}, onToggleCompleted = () => {}, filter }) => {
  let elements;

  const taskTemplate = () => {

    elements = todos.map((item) => {
      const {id, ...itemProps} = item;
  
      return (
          <Task {...itemProps} 
            key = {item.id} 
            onDeleted = {() => onDeleted(id)} 
            onToggleCompleted = {() => onToggleCompleted(id)} />
      );
    });
  }
  
  if (filter === 'all') {
    taskTemplate();
  }

  if (filter === 'active') {
    todos = todos.filter((el) => !el.completed);

    taskTemplate();
  }

  if (filter === 'completed') {
    todos = todos.filter((el) => el.completed);

    taskTemplate();
  }

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  filter: PropTypes.string,
  todos: PropTypes.array
};

export default TaskList;
