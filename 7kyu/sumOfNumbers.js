// Can do better, I'll check later.

function sumOfNumbers (a, b) {
  if (a === b) return a;

  let bigger = a > b ? a : b;
  let smaller = bigger === a ? b : a;

  let sum = 0;

  while (bigger >= smaller) {
    sum += smaller;
    smaller++;
  }

  return sum;
}

console.log(sumOfNumbers(0,-1), -1);