import React from 'react'

function greet(props) {
  return (
    <div>
      
      <h1>Hello my name is {props.name} and my skill is {props.skill}</h1>
      {props.children}
      </div>
  )
}

export default greet;

