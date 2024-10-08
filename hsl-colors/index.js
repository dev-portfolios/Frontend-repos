if (navigator.clipboard) {
  // console.log('Clipboard API available');
  // controlSection.innerHTML += `<h2>Clipboard API available<h2>`
}

async function wirteDataToClipboard(data) {
  try {
    await navigator.clipboard.writeText(data);
    // console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // console.log('DOMContentLoaded')
  getColorItems()
  const colorBtn = document.querySelector('#color-btn')
  colorBtn.addEventListener('click', getColorItems)
})

const randomInRange = (start = 0, end = 100) => Math.ceil(Math.random() * (end - start + 1));

const slArray = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const getColors = () => {
  let arr = []
  let n = 6
  while (n > 0) {
    const h = randomInRange(0, 360)
    const s = slArray.map(x => ({h: h, s: x, l: x}))
    arr = arr.concat(s)
    n--
  }
  return arr
}


const clickToCopy = (e) => {
  const copyedData = e.target.getAttribute('data-copy')
  const copyedElement = document.createElement('p')
  copyedElement.textContent = copyedData + ' copyed!'
  const controlSection = document.querySelector('.control')
  const preCopyed = controlSection.querySelectorAll('p')
  preCopyed.forEach(e => e.remove())
  wirteDataToClipboard(copyedData)
  controlSection.appendChild(copyedElement)
}

const getColorItems = () => {
  const colorItems = getColors()
  const htmlContent = colorItems.map(({h,s,l})=> `<div class="color-item" data-copy="hsl(${h} ${s} ${l})"><span class="item" data-copy="hsl(${h} ${s} ${l})" style="background: hsl(${h} ${s} ${l})"></span><span data-copy="hsl(${h} ${s} ${l})" class="color-title">hsl(${h} ${s} ${l})</span></div>`).join('')
  const colorContainer = document.querySelector('.container')
  colorContainer.innerHTML = htmlContent
  Array.from(colorContainer.children).forEach(e => e.addEventListener('click', clickToCopy))
}
// x is a number from 0 - 360
// y is a percentage from 0% to 100%
// z is a number from 0.0 to 1.0
// hsl(x, y, y); or hsla(x, y, y, z);

// Example: hsla(150, 50%, 50%, 0.5);