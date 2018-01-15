import React, { Component } from 'react'
import { InputGroup, Input, Button, Form } from 'reactstrap'
import FontAwesomeIcon from 'react-fontawesome'

import { addTodo } from './actions'
import { connect } from 'react-redux'

class AddTodo extends Component {
  state = { 
    text: ''
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addTodo(this.state.text))
    this.setState({ text: '' })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <InputGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" className="mr-2" placeholder="What needs to be done?" 
            onChange={this.handleChange.bind(this)}
            value={this.state.text} />
          <Button>
            <FontAwesomeIcon name="plus" />
          </Button>
        </InputGroup>
      </Form>
    )
  }
}

export default connect()(AddTodo)