import React, { Component } from 'react'
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap'
import FontAwesomeIcon from 'react-fontawesome'

import AddTodo from './AddTodo'
import TodoListContainer from './TodoListContainer'

const db = [
  {
    title: String,
    done: Boolean,
    createdAt: Date
  }
]

export default class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Navbar light>
          <NavbarBrand href="/">Todo List</NavbarBrand>
        </Navbar>
        <Container>
          <Row className="mb-1">
            <Col>
              <AddTodo />
            </Col>
          </Row>
          <Row>
            <Col>
              <TodoListContainer />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
