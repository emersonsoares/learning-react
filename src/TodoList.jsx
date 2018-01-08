import React, { Component } from 'react'
import { ListGroup, Button } from 'reactstrap'
import FontAwesomeIcon from 'react-fontawesome'

import TodoListItem from './TodoListItem'

//Functional Components or Pure Components
export default props => (
  <ListGroup>
    {props.todos.map((todo, index) => (
      <TodoListItem key={index} title={todo.title} />
    ))}
  </ListGroup>
)