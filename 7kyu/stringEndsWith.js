function solution (str, ending) {
  // This is without endsWith function.
  return ending.length > 0 ?
    str.slice(-ending.length) === ending :
    true;
}

console.log(solution("abcde", "cde"))