import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'

import './task_list.css'

function TaskList({ todos, onDeleted = () => {}, onToggleCompleted = () => {}, filter }) {
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
  const preperElements = elements.filter((el) => {
    if (filter === 'active') {
      return !el.props.completed
    }
    if (filter === 'completed') {
      return el.props.completed
    }

    return true
  })

  return <ul className="todo-list">{preperElements}</ul>
}

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
}

export default TaskList
