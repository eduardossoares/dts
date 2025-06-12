const findLow = (arr) => {
  let low = arr[0];
  let lowIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
      lowIndex = i;
    }
  }

  return lowIndex;
};
