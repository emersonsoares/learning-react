import React, { Component } from 'react'
import TodoList from './TodoList'

export default class extends Component {
  //Aways remember to set inital state!
  state = { todos: [] }

  componentDidMount() {
    this.setState({
      todos: [{ title: 'Do something' }, { title: 'Do something else'}, { title: 'Go home!' } ]
    })
  }

  render() {
    return (
      <TodoList todos={this.state.todos}/>
    )
  }
}