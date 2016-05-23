
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



const App = ({
  subject
})=>{
  const {x, y} = subject
  return <div>
    <div>{x}</div>
    <div>{y}</div>
  </div>
}

const render = ()=>{
  ReactDOM.render(<App subject={subject}/>, document.getElementById("app"))
}


const t = tracker({
  subject,
  target,
  toTrack: [ "x", "y" ],
  threshold: 0.01,
  callback: render
})

Object.assign(window, {
  subject,
  target,
  t
})
