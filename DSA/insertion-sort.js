function insertionSort(array) {
  const arr = array.slice();

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

const arr = [23, 45, 6, 0, 8, 2, 1, 50, 34];
console.log(insertionSort(arr));
