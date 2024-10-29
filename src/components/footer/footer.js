import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../tasks_filter'

import './footer.css'

function Footer({ toDo, onDeletedAll = () => {}, onClickFilters = () => {} }) {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TasksFilter onClickFilters={(e) => onClickFilters(e)} />
      <button className="clear-completed" onClick={onDeletedAll} type="button">
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  onDeletedAll: PropTypes.func.isRequired,
  onClickFilters: PropTypes.func.isRequired,
}

export default Footer
