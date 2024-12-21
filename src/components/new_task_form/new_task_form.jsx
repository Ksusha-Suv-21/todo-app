import React, { Component } from 'react'
import './new_task_form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minutes: 0,
    seconds: 0,
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onChangeMin = (e) => {
    this.setState({
      minutes: e.target.value,
    })
  }

  onChangeSec = (e) => {
    this.setState({
      seconds: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let finelMinutes = +this.state.minutes
    let finelSeconds = +this.state.seconds
    if (finelSeconds >= 60) {
      const additionalMinutes = parseInt(finelSeconds / 60, 10)
      finelMinutes += additionalMinutes
      finelSeconds -= additionalMinutes * 60
    }
    this.props.addTask(this.state.label, finelMinutes, finelSeconds)
    this.setState({
      label: '',
      minutes: 0,
      seconds: 0,
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
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          onChange={this.onChangeMin}
          value={this.state.minutes === 0 ? '' : this.state.minutes}
          pattern="[0-9]*"
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onChange={this.onChangeSec}
          value={this.state.seconds === 0 ? '' : this.state.seconds}
          pattern="[0-9]*"
        />
        <button className="new-todo-form__submit" type="submit" aria-label="form__submit" />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}
