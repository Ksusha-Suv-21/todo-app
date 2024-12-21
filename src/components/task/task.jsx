import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './task.css'

export default class Task extends Component {
  render() {
    const { onDeleted, onToggleCompleted, item, taskOnPlay, taskOnPause } = this.props

    const { completed = false, label, inputId, time, minutes, seconds, timer } = item

    let classNames = ''

    if (completed) {
      classNames += ' completed'
      if (timer !== null) {
        clearInterval(timer)
      }
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
            <span className="title">{label}</span>
            <span className="description">
              <button className="icon icon-play" aria-label="play" type="button" onClick={taskOnPlay} />
              <button className="icon icon-pause" aria-label="pause" type="button" onClick={taskOnPause} />
              <span className="time">{`${minutes}:${seconds}`}</span>
            </span>
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
  taskOnPlay: () => {},
  taskOnPause: () => {},
}

Task.propTypes = {
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  taskOnPlay: PropTypes.func,
  taskOnPause: PropTypes.func,
}
