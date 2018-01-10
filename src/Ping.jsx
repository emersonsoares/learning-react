import React, { Component } from 'react'

export default class Ping extends Component {
  constructor(props) {
    super(props)

    this.state = { pongs: [] }
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({ pongs: [...this.state.pongs, 'Pong'] })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Ping</button>
        <ul>
          {this.state.pongs.map(pong => <li>{pong}</li>)}
        </ul>
      </div>
    )
  }
}