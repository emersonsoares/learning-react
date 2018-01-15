import React, { Component } from 'react'
import { ListGroupItem, Button } from 'reactstrap'
import FontAwesomeIcon from 'react-fontawesome'

import PropTypes from 'prop-types'

class TodoListItem extends Component {
  state = {  }
  render() {
    return (
      <ListGroupItem>
        <div className="d-flex">
          <span className="mr-auto" style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}>{this.props.text}</span>
          <div className="justify-content-end">
            <Button color="success" size="sm" className="mr-1" onClick={this.props.handleToggle}>
              <FontAwesomeIcon name="check" />
            </Button>
            <Button color="danger" size="sm">
              <FontAwesomeIcon name="trash" />
            </Button>
          </div>
        </div>
      </ListGroupItem>
    )
  }
}

TodoListItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default TodoListItem