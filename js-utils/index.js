const range = (start, end, step = 1) => {
  let arr = []
  while(start <= end) {
    arr.push(start)
    start += step
  }
  return arr
}

const randomInRange = (start = 0, end = 100) => Math.ceil(Math.random() * (end - start + 1));

export {range, randomInRange}