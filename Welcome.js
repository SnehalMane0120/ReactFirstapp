import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div>
        Welcome to class components
        <h1>hello my name is{this.props.name}and is am from {this.state.city}</h1>
      </div>
    )
  }
}

export default Welcome;
