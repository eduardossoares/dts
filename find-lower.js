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

const sort = (arr) => {
  const ordeneredArr = [];
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    let low = findLow(arr);
    ordeneredArr.push(arr.splice(low, 1)[0]);
  }

  return ordeneredArr;
};

const ordeneredArr = sort([1, 5, 3, 0, 55, 11]);
console.log(ordeneredArr);
