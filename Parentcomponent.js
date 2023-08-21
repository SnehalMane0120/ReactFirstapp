import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Parentcomponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            ParentName: "john"
        }
        this.parentOne = this.parentOne.bind(this)
    }
    parentOne(){
        alert("hello"+this.state.parentName)
    }

  render() {
    return (
      <div>
        Parentcomponent
      </div>
    )
  }
}
<Childcomponent/>

export default Parentcomponent
