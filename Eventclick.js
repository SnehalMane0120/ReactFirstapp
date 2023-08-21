import React from 'react'

function Eventclick() {
    function clickHandler(){
  console.log("User clickrd on button")
    }
  return (
    <>
    <div>
      Eventclick
    </div>
    <button onClick={clickHandler}>ClickMe</button>
    </>
  )
}

export default Eventclick;
