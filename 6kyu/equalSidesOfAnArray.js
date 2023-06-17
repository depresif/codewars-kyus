function findEvenIndex(arr) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    let part1 = arr.slice(0, i),
        part2 = arr.slice(i + 1);

    if (part1.reduce((a, b) => a + b, 0) === part2.reduce((a, b) => a + b, 0)) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(findEvenIndex([8,0]));