import React, { Component } from 'react'
import { InputGroup, Input, Button, Form } from 'reactstrap'
import FontAwesomeIcon from 'react-fontawesome'

export default class extends Component {
  state = {  }
  render() {
    return (
      <Form>
        <InputGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" className="mr-2" placeholder="What needs to be done?" />
          <Button>
            <FontAwesomeIcon name="plus" />
          </Button>
        </InputGroup>
      </Form>
    )
  }
}