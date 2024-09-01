// input an array of integers, write a function that outputs an array of integers of the same length as the input
// with the value of the product of all the number that is not the number at that position

function prodArray(arr) {
  let prod = 1;
  let zeroCount = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      prod = prod * arr[i];
    } else {
      zeroCount++;
    }
  }
  console.log(zeroCount);
  let output = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      if (zeroCount > 0) {
        output.push(0);
      } else output.push(prod / arr[i]);
    } else {
      if (zeroCount > 1) {
        output.push(0);
      } else output.push(prod);
    }
  }
  return output;
}

console.log(prodArray([1, 4, 6, 8, 0]));
console.log(prodArray([1, 4, 6, 8]));
