function checkRange(num1, num2, num3) {
  let isInRange =
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99);
  return isInRange;
}
var result = checkRange(10, 59, 5);
console.log("Are any of the numbers in the range 50..99? " + result);
