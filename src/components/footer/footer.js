import React from "react";
import TasksFilter from "../tasks_filter";
import PropTypes from 'prop-types';

import './footer.css';

const Footer = ({ toDo, onDeletedAll = () => {}, onClickFilters =() => {} }) => {

    return (
        <footer className="footer">
          <span className="todo-count">{ toDo } items left</span>
          <TasksFilter onClickFilters={(e) => onClickFilters(e)} />
          <button className="clear-completed" onClick = {onDeletedAll}>Clear completed</button>
        </footer>
    );
};

Footer.propTypes = {
  onDeletedAll: PropTypes.func.isRequired, 
  onClickFilters: PropTypes.func.isRequired,
  toDo: PropTypes.number
};

export default Footer;