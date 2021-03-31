const nums = [3, 5, 6, 82, 1, 4, 3, 5, 82]

//we're going to make an object from an even and odd version of each number
const result = nums.reduce((acc, item) => {
  acc[item] = {
    odd: item % 2 ? item : item - 1,
    even: item % 2 ? item + 1 : item
  }
  return acc
}, {})

console.log(result)