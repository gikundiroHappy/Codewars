function QuickSort(array) {
  const arr = array.slice();

  if (arr.length === 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...QuickSort(leftArr), pivot];
  } else {
    return [pivot, ...QuickSort(rightArr)];
  }
}

const arr = [23, 45, 6, 0, 8, 2, 1, 50, 34];
console.log(QuickSort(arr));
