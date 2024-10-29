import React, { Component } from "react";
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';


export default class Task extends Component {

  static defaultProps = {
    onDeleted: () => {},
    onToggleCompleted: () => {},
    completed: false
  };

  static propTypes = {
    onDeleted: PropTypes.func.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    completed: PropTypes.bool,
    label: PropTypes.node.isRequired,
  };

  render() {
    const { label, onDeleted, onToggleCompleted, completed } = this.props;

    let classNames = '';
    
    if (completed) {
      classNames += ' completed';
    };

    return (
      <li className= { classNames }>
        <div className="view">
          <input className="toggle" type="checkbox"  onClick = {onToggleCompleted} />
              <label>
                <span className="description">{ label }</span>
                <span className="created">created {formatDistanceToNow(new Date())} ago</span>
              </label>
          <button className="icon icon-edit" ></button>
          <button className="icon icon-destroy"
                  onClick = {onDeleted} ></button>
        </div>
      </li>
    );
  };
};





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