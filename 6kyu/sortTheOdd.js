// Stolen :(

function sortArray (array) {
  let indices = [];

  array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

  return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))