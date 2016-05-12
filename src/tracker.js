/*

- some way to piggyback a central tick, or update?

*/


export default ({
  subject,
  target,
  toTrack
}) => {

  let interval

  const track = () => {
    console.log("tracking")
    _.each(toTrack, val => {
      const sVal = subject[val]
      const tVal = target[val]
      subject[val] += (tVal - sVal) / 2
      console.log(`subject ${val} is now ${subject[val]}`)
    })
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
