// This could be better: [Math.min(...arr), Math.max(...arr)];

function minMax (arr) {
  let sorted = arr.sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))