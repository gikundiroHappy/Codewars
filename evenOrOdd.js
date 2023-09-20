function evenOrOdd(number) {
  let isEven = "Even";
  let isOdd = "Odd";
  if (number % 2 === 0) {
    return isEven;
  }
  return isOdd;
}
console.log(evenOrOdd(3));
