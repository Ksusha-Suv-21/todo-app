import React, { Component } from 'react'

import TaskList from '../task_list'
import NewTaskForm from '../new_task_form'
import Footer from '../footer'

import './app.css'

export default class App extends Component {
  maxId = 1

  state = {
    todoData: [],
    filter: 'all',
  }

  createTask(label, created) {
    return {
      label,
      completed: false,
      id: this.maxId++,
      inputId: `taskInputId${this.maxId}`,
      created,
      time: new Date(),
    }
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const idIndex = todoData.findIndex((el) => el.id === id)

      const newArray = [...todoData.slice(0, idIndex), ...todoData.slice(idIndex + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  addTask = (label) => {
    const newItem = this.createTask(label)

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]

      return {
        todoData: newArr,
      }
    })
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idIndex = todoData.findIndex((el) => el.id === id)

      const oldTask = todoData[idIndex]
      const newTask = { ...oldTask, completed: !oldTask.completed }

      const newArray = [...todoData.slice(0, idIndex), newTask, ...todoData.slice(idIndex + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  onDeletedAll = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.completed)

      return {
        todoData: newArr,
      }
    })
  }

  onClickFilters = (type) => {
    this.setState({ filter: type })
  }

  filterTask = () => {
    const { todoData, filter } = this.state
    return todoData.filter((el) => {
      if (filter === 'active') {
        return !el.completed
      }
      if (filter === 'completed') {
        return el.completed
      }
      return true
    })
  }

  render() {
    const { todoData, filter } = this.state

    const completedCount = todoData.filter((el) => !el.completed).length

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            todos={this.filterTask()}
            filter={filter}
            onDeleted={this.deleteTask}
            onToggleCompleted={this.onToggleCompleted}
          />

          <Footer
            onDeletedAll={this.onDeletedAll}
            toDo={completedCount}
            onClickFilters={this.onClickFilters}
            filter={filter}
          />
        </section>
      </section>
    )
  }
}
