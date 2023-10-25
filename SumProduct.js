function sumAndProduct(arr) {
  if (arr.length === 0) {
    return { sum: 0, product: 0 };
  }

  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }

  return { sum, product };
}

const numbers = [1, 2, 3, 4, 5];
const result = sumAndProduct(numbers);

console.log("Sum:", result.sum);
console.log("Product:", result.product);
