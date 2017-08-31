export function throttle(fn, delay) {
  let timer = null,
    previous = null

  return function() {
    const now = +new Date()

    if (!previous) previous = now
    if (now - previous >= delay) {
      fn()
      previous = now
      clearTimeout(timer)
    } else {
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn()
      }, delay)
    }
  }
}

export function debounce(fn, delay) {
  let timer = null,
    previous = null

  return function() {
    const now = +new Date()
    if (!previous) previous = now

    if (now - previous < delay) {
      previous = now
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn()
        previous = null
        clearTimeout(timer)
      }, delay)
    }
  }
}
