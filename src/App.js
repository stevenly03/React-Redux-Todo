import React, { Component } from 'react'
import Todos from './components/Todos'
export default class App extends Component {
state = {
  todos:[
    {id: 1, content: 'buy milk'},
    {id:2, content: 'play mario'}
  ]
}
deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id
  })
  this.setState({
    todos
  })
}
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo ={this.deleteTodo}/>
      </div>
    )
  }
}
