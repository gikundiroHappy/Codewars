const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const midleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midleIndex);
  const rightArr = arr.slice(midleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
const arr = [23, 45, 6, 0, 8, 2, 1, 50, 34];
console.log(mergeSort(arr));
