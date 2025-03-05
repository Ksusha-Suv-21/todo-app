import React, { useState } from 'react'

import TaskList from '../task_list'
import NewTaskForm from '../new_task_form'
import Footer from '../footer'

import './app.css'

let maxId = 1

function App() {
  const [todoData, setTodoData] = useState([])
  const [filter, setFilter] = useState('all')

  function createTask(label, minutes, seconds) {
    return {
      label,
      completed: false,
      id: maxId++,
      inputId: `taskInputId${maxId}`,
      time: new Date(),
      minutes,
      seconds,
      timer: null,
    }
  }

  const deleteTask = (id) => {
    const idIndex = todoData.findIndex((el) => el.id === id)

    if (todoData[idIndex].timer !== null) {
      clearInterval(todoData[idIndex].timer)
    }
    setTodoData([...todoData.slice(0, idIndex), ...todoData.slice(idIndex + 1)])
  }

  const addTask = (label, minutes, seconds) => {
    const newItem = createTask(label, minutes, seconds)
    const newArray = [...todoData, newItem]
    setTodoData(newArray)
  }

  const onToggleCompleted = (id) => {
    const newArr = [...todoData].filter((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newArr)
  }

  const onDeletedAll = () => {
    setTodoData(todoData.filter((el) => !el.completed))
  }

  const onClickFilters = (type) => {
    setFilter(type)
  }

  const filterTask = () => {
    if (filter === 'active') {
      return todoData.filter((el) => !el.completed)
    }
    if (filter === 'completed') {
      return todoData.filter((el) => el.completed)
    }
    return todoData
  }

  const taskOnPause = (id) => {
    const newArr = [...todoData]
    const idIndex = newArr.findIndex((el) => el.id === id)

    if (newArr[idIndex].timer !== null) {
      clearInterval(newArr[idIndex].timer)
    }
    newArr[idIndex].timer = null
    setTodoData(newArr)
  }

  const taskOnPlay = (id) => {
    const data = todoData

    const idIndex = data.findIndex((el) => el.id === id)
    const currentTodo = data[idIndex]

    if (!(currentTodo.seconds === 0 && currentTodo.minutes === 0)) {
      if (currentTodo.timer !== null) {
        clearInterval(currentTodo.timer)
      }

      currentTodo.timer = setInterval(() => {
        if (currentTodo.seconds > 0) {
          const newArr = [...todoData]
          newArr[idIndex].seconds--
          setTodoData(newArr)
        } else if (currentTodo.minutes > 0) {
          const newArr = [...todoData]
          newArr[idIndex].seconds = 59
          newArr[idIndex].minutes--
          setTodoData(newArr)
        } else {
          taskOnPause(id)
        }
      }, 1000)
    }
  }

  const completedCount = Array.isArray(todoData) ? todoData.filter((el) => !el.completed).length : []
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList
          todos={filterTask()}
          setTodoData={setTodoData}
          filter={filter}
          onDeleted={deleteTask}
          onToggleCompleted={onToggleCompleted}
          taskOnPlay={taskOnPlay}
          taskOnPause={taskOnPause}
        />

        <Footer onDeletedAll={onDeletedAll} toDo={completedCount} onClickFilters={onClickFilters} filter={filter} />
      </section>
    </section>
  )
}

export default App
