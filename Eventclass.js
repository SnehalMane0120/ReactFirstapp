import React, { Component } from 'react'

export class Eventclass extends Component {
  render() {
  function clickHandler(){
    console.log("User clickred on button")
  }

    return (
      <>
      <div>Eventclass</div>
      <button onclick={clickHandler}>Click Me</button>
      
      
      </>
    )
  }
}

export default Eventclass
