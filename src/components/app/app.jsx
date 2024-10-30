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
      created,
      time: new Date(),
      checked: false,
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

  onClickFilters = (e) => {
    this.setState(() => {
      const filterValue = e.target.innerText.toLowerCase()
      const filtersList = document.querySelector('.filters')
      const filterItems = filtersList.querySelectorAll('button')

      for (const filter of filterItems) {
        filter.classList.remove('selected')
      }
      e.target.classList.add('selected')

      return {
        filter: filterValue,
      }
    })
  }

  render() {
    const { todoData, filter } = this.state

    const completedCount = todoData.filter((el) => !el.completed).length
    const todoCount = todoData.length - completedCount

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            todos={todoData}
            filter={filter}
            onDeleted={this.deleteTask}
            onToggleCompleted={this.onToggleCompleted}
          />

          <Footer
            onDeletedAll={this.onDeletedAll}
            toDo={todoCount}
            completed={completedCount}
            onClickFilters={this.onClickFilters}
          />
        </section>
      </section>
    )
  }
}

/*
  filter = (items, filter) => {

    switch (filter) { 
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.completed); 
      case 'completed':
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  };


  
*/
