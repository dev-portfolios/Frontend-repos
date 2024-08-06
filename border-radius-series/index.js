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

const randomInRange = (start = 0, end = 100) => Math.ceil(Math.random() * (end - start + 1));

const getHTMLItems = () => {
  const hValue = randomInRange(0, 360)
  const htmlContent = range(1,40, 1).map((e)=> `<div class="div-item"><span class="item" style="border: solid 1px hsl(${hValue} 50 50); border-radius: ${e}px; background: hsl(${hValue} 50 50);"></span><span class="color-title">${e}px</span></div>`).join('')
  const colorContainer = document.querySelector('.container')
  colorContainer.innerHTML = htmlContent
}