import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'

import './task_list.css'

function TaskList({ todos, onDeleted = () => {}, onToggleCompleted = () => {}, filter }) {
  let elements

  const taskTemplate = () => {
    elements = todos.map((item) => {
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
  }

  if (filter === 'all') {
    taskTemplate()
  }

  if (filter === 'active') {
    todos = todos.filter((el) => !el.completed)

    taskTemplate()
  }

  if (filter === 'completed') {
    todos = todos.filter((el) => el.completed)

    taskTemplate()
  }

  return <ul className="todo-list">{elements}</ul>
}

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
}

export default TaskList
