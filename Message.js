import React, { Component } from 'react'

export class Message extends Component {

  constructor(){
    super()
    this.state ={
      msg : 'Welcome to reactjs'
    }
  }
  click(){
    this.setstate({
      msg : "Welcome to our react tutorial"
    })
  }
  render() {
    return (
      <>
      <h1>{this.state.msg}</h1>
      <button onclick={()=> this.click()}>change</button>
      </>
    )
  }
  
}

export default Message;
