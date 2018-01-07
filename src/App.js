import React, { Component } from 'react'

import { Navbar, NavbarBrand } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { InputGroup, Input, Button } from 'reactstrap'

import FontAwesomeIcon from 'react-fontawesome'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar light>
          <NavbarBrand href="/">Todo List</NavbarBrand>
        </Navbar>
        <Container>
          <Row className="mb-1">
            <Col>
              <InputGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" className="mr-2" placeholder="What needs to be done?" />
                <Button>
                  <FontAwesomeIcon name="plus" />
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup>
                {[0,1,2,3,4].map(value => (
                  <ListGroupItem key={value}>
                    <div className="d-flex">
                      <span className="mr-auto">Cras justo odio</span>
                      <div className="justify-content-end">
                        <Button color="success" size="sm" className="mr-1">
                          <FontAwesomeIcon name="check" />
                        </Button>
                        <Button color="danger" size="sm">
                          <FontAwesomeIcon name="trash" />
                        </Button>
                      </div>
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
