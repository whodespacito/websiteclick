var Interval
window.start = function() {
  let x = 0;
  let y = 0;
  document.addEventListener("mousemove", (event) => {
    x = event.pageX;
    y = event.pageY;
  })
  Interval = setInterval(() => {
    var element = document.elementFromPoint(x, y)
    element.click()
  })
}
window.stop = function() {
  clearInterval(Interval)
}
