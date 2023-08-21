import React, { Component } from 'react'

export class UserCondition extends Component {
    constructor(props){
        super(props)
        this.state = {
            login : false
        }

    }
  render() {
    if (this.state.login){
        return <div>UserCondition</div>
    }
    else{
        return <div>Hello worls....</div>
    }
  }
}

export default UserCondition
