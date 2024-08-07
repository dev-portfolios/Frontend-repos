document.addEventListener('DOMContentLoaded', () => {
  // console.log('DOMContentLoaded')
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

const getFontSizes = () => range(4, 40);

const randomInRange = (start = 0, end = 100) => Math.ceil(Math.random() * (end - start + 1));

const charSets = range(97,122).map(x => String.fromCharCode(x))

const getHTMLItems = () => {
  const hValue = randomInRange(0, 360)
  const randomChar = charSets[randomInRange(0, charSets.length - 1)]
  const htmlContent = range(10,60).map((e)=> `<div class="div-item"><span class="item" style="border: solid 1px hsl(${hValue} 50 50); font-size: ${e}px;">${randomChar.toUpperCase()}${randomChar}</span><span class="item-title" style="font-size: 16px;">${e}px</span></div>`).join('')
  const itemsContainer = document.querySelector('.container')
  itemsContainer.innerHTML = htmlContent
}