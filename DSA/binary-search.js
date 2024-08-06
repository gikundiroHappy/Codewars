function BinarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === target ? middle : -1;
}

const arr = [1, 2, 5, 6, 18, 23, 45, 50, 67];
console.log(BinarySearch(arr, 6));
