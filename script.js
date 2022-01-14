
window.start = function() {
  let x = 0;
  let y = 0;
  document.addEventListener("mousemove", (event) => {
    x = event.pageX;
    y = event.pageY;
  })
  window.interval = setInterval(() => {
    var element = document.elementFromPoint(x, y)
    element.click()
  })
}
window.stop = function() {
  clearInterval(window.interval)
}
