// Create a function, add_arrays(), that does the following:

// Input: 2 arrays of equal size
// first_array, an array of numbers
// needle array, an array of numbers
// Output:
// output array, which has all values from the first array added to the values from the second array
// Example:
// var first_array = [3,-5,15,4]; var second_array = [3,18,-5,-4]

// output = add_arrays(first_array,second_array); console.log(output); outputs [6,13,10,0];

function add_arrays(arr1, arr2) {
  let sum = arr1.map(function (num, index) {
    return num + arr2[index];
  });
  return sum;
}

console.log(add_arrays([3, -5, 15, 4], [3, 18, -5, -4]));

function add_arrays2(arr1, arr2) {
  let sumArr = [];

  for (let i = 0; i < arr1.length; i++) {
    sumArr.push(arr1[i] + arr2[i]);
  }
  return sumArr;
}

console.log(add_arrays2([3, -5, 15, 4], [3, 18, -5, -4]));
