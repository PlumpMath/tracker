/*

- piggyback a central tick, or update?
  - older versions expected their subjects to be DisplayObjects and the CJS 'tick' for instance


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
    _.each(toTrack, key => {
      const sVal = subject[key]
      const tVal = target[key]
      const dist = (tVal - sVal) / 2
      if (Math.abs(dist) <= threshold) {
        subject[key] = tVal
      } else {
        subject[key] += dist
      }
      console.log(`subject ${key} is now ${subject[key]}`)
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
