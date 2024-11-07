import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './task.css'

export default class Task extends Component {
  render() {
    const { onDeleted, onToggleCompleted, item } = this.props

    const { completed = false, label, inputId, time } = item

    let classNames = ''

    if (completed) {
      classNames += ' completed'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={completed}
            onClick={() => onToggleCompleted(item.id)}
            id={inputId}
          />
          <label htmlFor={inputId}>
            <span className="description">{label}</span>
            <span className="created">created {formatDistanceToNow(time)} ago</span>
          </label>
          <button className="icon icon-edit" aria-label="edit" type="button" />
          <button className="icon icon-destroy" onClick={onDeleted} aria-label="destroy" type="button" />
        </div>
      </li>
    )
  }
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleCompleted: () => {},
}

Task.propTypes = {
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
}
