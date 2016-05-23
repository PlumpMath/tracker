/*

- piggyback a central tick, or update?
  - older versions expected their subjects to be DisplayObjects and the CJS 'tick' for instance

*/

import _ from "lodash"

export default ({
  subject,
  target,
  tracking,
  threshold,
  callback
}) => {

  let interval

  const track = () => {
    _.each(tracking, key => {
      const sVal = subject[key]
      const tVal = target[key]
      const dist = (tVal - sVal) / 2
      if (Math.abs(dist) <= threshold) {
        subject[key] = tVal
      } else {
        subject[key] += dist
      }
    })
    callback()
  }

  const start = () => {
    interval = setInterval(track, 30)
  }

  const stop = () => {
    clearInterval(interval)
  }

  start()

  return {
    start,
    stop
  }
}
