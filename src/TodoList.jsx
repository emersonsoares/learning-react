import React, { Component } from 'react'
import { ListGroup, Button } from 'reactstrap'
import FontAwesomeIcon from 'react-fontawesome'
import PropTypes from 'prop-types'

import TodoListItem from './TodoListItem'

//Functional Components or Pure Components
const TodoList = ({ todos, handleToggle, handleRemove }) => (
  <ListGroup>
    {todos.map((todo) => (
      <TodoListItem key={todo.id} {...todo} 
        handleToggle={() => handleToggle(todo.id)}
        handleRemove={() => handleRemove(todo.id) } />
    ))}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default TodoList