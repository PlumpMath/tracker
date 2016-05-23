
// import _ from "lodash"
import React from "react"
import ReactDOM from "react-dom"

import tracker from "./tracker"

// will track its way towards `target`
const subject = {
  x: 0,
  y: 0
}

// will be tracked by `subject`
const target = {
  x: 300,
  y: 300
}

// _.delay(t.stop, 2000)

window.addEventListener("click", (e) => {
  console.log("window click", e)
  target.x = e.x
  target.y = e.y

})

const App = ({
  subject
})=>{
  const {x, y} = subject
  return <div
    // onClick={()=>console.log('click!')}
  >
    <div>{x}</div>
    <div>{y}</div>
    <div
      style={{
        position: "absolute",
        left: x,
        top: y
      }}>
      <div
        style={{
          position: "relative",
          width: 20,
          height: 20,
          left: -10,
          top: -10,
          borderRadius: "50%",
          backgroundColor: "red"
        }}>
      </div>
    </div>
  </div>
}

const render = ()=>{
  ReactDOM.render(<App subject={subject}/>, document.getElementById("app"))
}

const t = tracker({
  subject,
  target,
  tracking: ["x", "y"],
  threshold: 0.01,
  callback: render
})

Object.assign(window, {
  subject,
  target,
  t
})

/*



*/

