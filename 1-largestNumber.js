function findLargestNumber(arr) {
  let largestNum = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (largestNum < arr[i]) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
console.log(findLargestNumber([4, 12, 2, -1, 0]));

// the maximum can be also found using array.max()
