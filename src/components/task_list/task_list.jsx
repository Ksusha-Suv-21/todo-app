import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'

import './task_list.css'

function TaskList({ todos, onDeleted = () => {}, onToggleCompleted = () => {} }) {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item

    return (
      <Task
        {...itemProps}
        key={item.id}
        onDeleted={() => onDeleted(id)}
        onToggleCompleted={() => onToggleCompleted(id)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
}

export default TaskList
