function findLargestNumber(num1, num2, num3) {
  var largestNumber = Math.max(num1, num2, num3);

  return largestNumber;
}

var result = findLargestNumber(7, 5, 3);

console.log("The largest number among is", result);
