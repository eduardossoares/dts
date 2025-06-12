const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) return mid;
    else if (target > arr[mid]) low = arr[mid] + 1;
    else high = arr[mid] - 1;
  }

  return -1;
};

console.log(binarySearch([0, 1, 2, 3, 4, 5], 4));
