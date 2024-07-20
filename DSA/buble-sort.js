function bubleSort(array) {
  // creating a shallow copy of our array for us to do pure implementantion of buble sort(for it to be a pure function)
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        //   flipped same as the above
        //   [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}

const arr = [23, 45, 6, 0, 8, 2, 1, 50, 34];
console.log(bubleSort(arr));
console.log(arr);
