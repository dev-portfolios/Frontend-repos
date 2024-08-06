document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  const hueValue = document.querySelector('input.hue-value')
  const hueValueSpan = document.querySelector('span.hue-value')
  setValueToElement(`Hue ${hueValue.value}`, hueValueSpan)
  buildColorHTML(hueValue.value)
  
  const hueStep = document.querySelector('input.hue-step')
  const hueStepSpan = document.querySelector('span.hue-step')
  setValueToElement(`Hue step ${hueStep.value}`, hueStepSpan)
  
  hueValue.addEventListener('input', (e) => {
    const huevalue = e.target.value
    setValueToElement(`Hue ${huevalue}`, hueValueSpan)
    buildColorHTML(huevalue)
  })

  hueStep.addEventListener('input', (e) => {
    setValueToElement(`Hue step ${e.target.value}`, hueStepSpan)
    hueValue.setAttribute('step', e.target.value)
  })
})

const buildColorHTML = (h) => {
  const colorItems = buildColorsMatrx(h)
  // console.log(colorItems)
  const htmlContent = colorItems.map(({h,s,l})=> `<div class="color-item" data-copy="hsl(${h} ${s} ${l})"><span class="item" data-copy="hsl(${h} ${s} ${l})" style="background: hsl(${h} ${s} ${l})"></span><span data-copy="hsl(${h} ${s} ${l})" class="color-title">hsl(${h} ${s} ${l})</span></div>`).join('')
  const colorContainer = document.querySelector('.container')
  colorContainer.innerHTML = htmlContent
  // console.log(colorContainer.children)
  Array.from(colorContainer.children).forEach(e => e.addEventListener('click', clickToCopy))
}

const setValueToElement = (v , e) => {
  e.innerText = v
}

const range = (start, end, step = 1) => {
  let arr = []
  while(start <= end) {
    arr.push(start)
    start += step
  }
  return arr
}

const slArr = range(10, 90, 10)

const buildColorsMatrx = (h) => {
  const marix = []
  slArr.forEach((s, i) => {
    slArr.forEach((l, j) => {
      marix.push({h: h, s: s, l: l, x: i, y: j})
    })
  })
  return marix
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

async function wirteDataToClipboard(data) {
  try {
    await navigator.clipboard.writeText(data);
    // console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

