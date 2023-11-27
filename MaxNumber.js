function MaxNumber() {
  const numbers = [1, 20, 10, 7, 2, 9];
  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  console.log(maxNumber);
}

MaxNumber();
