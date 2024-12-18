import React, { Component } from 'react'
import './new_task_form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
          required
          pattern="^[^\s]+(\s.*)?$"
        />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
        <button className="new-todo-form__submit" type="submit" aria-label="form__submit" />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}
