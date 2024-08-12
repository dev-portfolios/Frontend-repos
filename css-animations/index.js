document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  const btns = Array.from(document.querySelectorAll('button'))
  console.log(btns)
  btns.forEach(b => b.addEventListener('click', btnClicked))
  // initState(3)
})

const initState = (n) => {
  const itemsContainer = document.querySelector('.container')
  buildGrid(itemsContainer, n)
  buildItems(itemsContainer, n)
}

const btnClicked = (e) => {
  // console.log(e)
  const n = e.target.dataset.count
  // console.log(e, n)
  const itemsContainer = document.querySelector('.container')
  buildGrid(itemsContainer, n)
  buildItems(itemsContainer, n)
}

const itemSize = (n) => {
  const i = parseInt(n)
  return n <= 6 ? 100 : n <= 10 ? 60 : 40
}

const buildGrid = (e, n) => {
  e.style = `grid-template-columns: repeat(${3}, minmax(${itemSize(n)}px, ${itemSize(n)}px));`
}
const buildItems = (e, n) => {
  const arr = range(1, parseInt(n))
  const animationStyle = `blink 2s ease-in-out 0.2s infinite alternate`
  // const animationStyle = `animation-delay: 0.${randomInRange(1, 20)}s;`
  e.innerHTML = arr.map(x => `<span class="item animate" style="width: ${itemSize(n)}px; height: ${itemSize(n)}px; animation: blink ${randomInRange(1,3)}s ease-in-out 0.${randomInRange(2,5)}s infinite alternate;animation-delay: 0.${randomInRange(20, 50)}s;"></span>`).join('')
}

const range = (start, end, step = 1) => {
  let arr = []
  while(start <= end) {
    arr.push(start)
    start += step
  }
  return arr
}

const randomInRange = (start = 0, end = 100) => Math.ceil(Math.random() * (end - start + 1));