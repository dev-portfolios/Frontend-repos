document.addEventListener('DOMContentLoaded', () => {
  // console.log(range(1,6))
  getHTMLItems()
  document.querySelector('button').addEventListener('click', getHTMLItems)
})

const range = (start, end, step = 1) => {
  let arr = []
  while(start <= end) {
    arr.push(start)
    start += step
  }
  return arr
}

const getHTMLItems = () => {
  const htmlContent = range(1,40, 1).map((e)=> `<div class="div-item"><span class="item" style="background: hsl(210 50 50); padding: ${e}px;">${e}px</span></div>`).join('')
  const colorContainer = document.querySelector('.container')
  colorContainer.innerHTML = htmlContent
}