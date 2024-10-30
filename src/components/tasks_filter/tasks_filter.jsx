import React, { Component } from 'react'

import './tasks_filter.css'

export default class TasksFilter extends Component {
  render() {
    const { onClickFilters } = this.props

    return (
      <ul className="filters" onClick={onClickFilters} aria-hidden="true">
        <li>
          <button className="selected" type="button">
            All
          </button>
        </li>
        <li>
          <button type="button">Active</button>
        </li>
        <li>
          <button type="button">Completed</button>
        </li>
      </ul>
    )
  }
}

TasksFilter.defaultProps = {
  onClickFilters: () => {},
}
