import React, { Component } from 'react'

export class EventBinding extends Component {

    constructor(props){
        super(props)
        this.state = {
            msg :"hello"
        }
        this.Clickhandler = this.Clickhandler.bind(this)
    }

    Clickhandler(){
        this.state ={
            msg : "thist is 1st way"
        }
    }
  render() {
    return (
        <>
      <div> {this.state.msg}</div>
      <button onClick={this.Clickhandler.bind(this)}>Click me</button>
      </>
    )
  }
}

export default EventBinding
