document.addEventListener('DOMContentLoaded', () => {
  // console.log('DOMContentLoaded')
  const itemsContainer = document.querySelector('.container')
  const yearsBtn = document.querySelector('#years')
  const monthsBtn = document.querySelector('#months')
  const weeksBtn = document.querySelector('#weeks')
  // console.log(itemsContainer)
  
  renderYearsItems(itemsContainer)

  yearsBtn.addEventListener('click', (e) => {
    renderYearsItems(itemsContainer)
  })
  
  monthsBtn.addEventListener('click', (e) => {
    // itemsContainer.style = `gap: 20px; grid-template-columns: repeat(12, minmax(80px, 80px));`
    updateBtnsClass(e.target)
    updateContainerClasses(itemsContainer, "months")
    itemsContainer.innerHTML = range(1,1200).map((e, i) => ({size: 80, text: getMonthWeekNum(e, i, 11)})).map(e => `<span style="width: ${e.size}px; height: ${e.size}px; background: hsl(216 40 50);">${e.text}</span>`).join('')
  })
  
  weeksBtn.addEventListener('click', (e) => {
    updateBtnsClass(e.target)
    updateContainerClasses(itemsContainer, "weeks")
    // itemsContainer.style = `gap: 12px; grid-template-columns: repeat(52, minmax(20px, 20px));`
    itemsContainer.innerHTML = range(1,5200).map((e, i) => ({size: 24, text: getMonthWeekNum(e, i, 51)})).map(e => `<span style="width: ${e.size}px; height: ${e.size}px; background: hsl(216 40 40);">${e.text}</span>`).join('')
  })
})

const range = (start, end, step = 1) => {
  let arr = []
  while(start <= end) {
    arr.push(start)
    start += step
  }
  return arr
}

const getMonthWeekNum = (n, i, limit) => { return i <= limit ? n : '' };

const renderYearsItems = (e) => {
  updateBtnsClass(document.querySelector('#years'))
  updateContainerClasses(e, "years")
  e.innerHTML = range(1,100).map(e => ({size: 100, text: e})).map(e => `<span style="width: ${e.size}px; height: ${e.size}px; background: hsl(216 40 55);">${e.text}</span>`).join('')
}

const updateBtnsClass = (e) => {
  Array.from(document.querySelectorAll('button')).forEach(e => e.classList.remove('active'))
  e.classList.add('active')
}

const updateContainerClasses = (e, klass) => {
  e.classList.remove("years", "months", "weeks")
  e.classList.add(klass) 
}