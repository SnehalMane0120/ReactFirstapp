import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    countdown(){
        this.setState({
            count : this.state.count+1
        })
        console.log(this.state.count);
    }
  render() {
    return (
        <>

        <h3>Counter ={this.state.count}</h3>
        <button onClick={()=>this.countdown()}>Increment</button>
        </>
      
        
    
    )
  }
}

export default Counter
