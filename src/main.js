
import _ from "lodash"
import tracker from "./tracker"

const subject = {
  x: 0,
  y: 0
}

const target = {
  x: 300,
  y: 300
}

const t = tracker({
  subject,
  target,
  toTrack: ["x", "y"]
})

_.delay(t.stop, 2000)

Object.assign(window, {
  subject,
  target,
  t
})
