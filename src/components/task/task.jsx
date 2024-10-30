import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './task.css'

export default class Task extends Component {
  render() {
    const { label, onDeleted, onToggleCompleted, completed, time } = this.props

    let classNames = ''

    if (completed) {
      classNames += ' completed'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
          <label htmlFor="span">
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
  completed: false,
}

Task.propTypes = {
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  completed: PropTypes.bool,
  label: PropTypes.node.isRequired,
}

/*
const TodoListItem = (props) => {
    return <span>{ props.label }</span>
};


onSpanClick = () => {
  this.setState((state) => {
    return {
      completed: !state.completed
    };
  });
};



  onSpanClick = () => {
    this.setState(({ completed }) => {
      return {
        completed: !completed
      };
    });
  };
*/
