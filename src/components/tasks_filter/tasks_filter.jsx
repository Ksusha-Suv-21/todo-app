import React, { Component } from 'react'

import './tasks_filter.css'

export default class TasksFilter extends Component {
  render() {
    const { onClickFilters, filter } = this.props

    return (
      <ul className="filters">
        <li>
          <button
            className={filter === 'all' ? 'selected' : ''}
            type="button"
            onClick={() => {
              onClickFilters('all')
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === 'active' ? 'selected' : ''}
            type="button"
            onClick={() => {
              onClickFilters('active')
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === 'completed' ? 'selected' : ''}
            type="button"
            onClick={() => {
              onClickFilters('completed')
            }}
          >
            Completed
          </button>
        </li>
      </ul>
    )
  }
}

TasksFilter.defaultProps = {
  onClickFilters: () => {},
}
