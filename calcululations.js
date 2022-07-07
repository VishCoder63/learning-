function sum(a, b) {
  return Number(a) + Number(b);
}

function divide(a, b) {
  if (b === 0) {
    return 0;
  }
  return Number(a) / Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

console.log(sum(4, 5))
console.log(divide(10, 5))
console.log(multiply(4, 5))
