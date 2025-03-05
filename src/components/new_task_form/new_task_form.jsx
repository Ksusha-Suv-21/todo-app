import React, { useState } from 'react'
import './new_task_form.css'
import PropTypes from 'prop-types'

function NewTaskForm({ addTask }) {
  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function onSubmit(e) {
    e.preventDefault()
    let finelMinutes = +minutes
    let finelSeconds = +seconds
    if (finelSeconds >= 60) {
      const additionalMinutes = parseInt(finelSeconds / 60, 10)
      finelMinutes += additionalMinutes
      finelSeconds -= additionalMinutes * 60
    }
    addTask(label, finelMinutes, finelSeconds)
    setLabel('')
    setMinutes(0)
    setSeconds(0)
  }

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setLabel(e.target.value)}
        value={label}
        required
        pattern="^[^\s]+(\s.*)?$"
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        autoFocus
        onChange={(e) => setMinutes(e.target.value)}
        value={minutes === 0 ? '' : minutes}
        pattern="[0-9]*"
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        autoFocus
        onChange={(e) => setSeconds(e.target.value)}
        value={seconds === 0 ? '' : seconds}
        pattern="[0-9]*"
      />
      <button className="new-todo-form__submit" type="submit" aria-label="form__submit" />
    </form>
  )
}

export default NewTaskForm

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

/*
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
*/
