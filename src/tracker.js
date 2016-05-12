/*

- piggyback a central tick, or update?
  - older versions used a cjs DisplayObjects tick for instance
*/

import _ from "lodash"

export default ({
  subject,
  target,
  toTrack,
  threshold,
  callback
}) => {

  let interval

  const track = () => {
    _.each(toTrack, val => {
      const sVal = subject[val]
      const tVal = target[val]
      const dist = (tVal - sVal) / 2
      if (Math.abs(dist) <= threshold) {
        subject[val] = tVal
      } else {
        subject[val] += dist
      }
      console.log(`subject ${val} is now ${subject[val]}`)
    })
    callback()
  }

  const start = () => {
    console.log("start tracking")
    interval = setInterval(track, 30)
  }

  const stop = () => {
    console.log("stop tracking")
    clearInterval(interval)
  }

  start()

  return {
    start,
    stop
  }
}
