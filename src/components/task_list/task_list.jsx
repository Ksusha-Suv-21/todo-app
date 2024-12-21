import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'

import './task_list.css'

function TaskList({
  todos,
  onDeleted = () => {},
  onToggleCompleted = () => {},
  taskOnPlay = () => {},
  taskOnPause = () => {},
}) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <Task
          key={item.id}
          onDeleted={() => onDeleted(item.id)}
          onToggleCompleted={onToggleCompleted}
          item={item}
          taskOnPlay={() => taskOnPlay(item.id)}
          taskOnPause={() => taskOnPause(item.id)}
        />
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  taskOnPlay: PropTypes.func.isRequired,
  taskOnPause: PropTypes.func.isRequired,
}

export default TaskList
