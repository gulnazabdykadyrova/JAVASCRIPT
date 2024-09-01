// Build a function that takes one array and finds all other elements of the array that are factors of its an element

// Write a function that takes one parameter
// Parameter 1 - an array of numbers
// The function should return an object with multiple arrays in it, one for each non-repeating number in the input array
// repeated numbers should not be added twice
// Example:
// arrayFactors([4,2,8,6,3,9]);
// Output - { 4: [2], 2: [], 8: [4,2], 6: [2,3], 3: [], 9: [3] }

function arrayFactors(arr) {
  const outObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in outObj)) {
      outObj[arr[i]] = [];

      for (let j = 0; j < arr.length; j++) {
        if (i != j && arr[i] % arr[j] === 0) {
          if (!outObj[arr[i]].includes(arr[j])) {
            outObj[arr[i]].push(arr[j]);
          }
        }
      }
    }
  }
  return outObj;
}
console.log(arrayFactors([4, 2, 8, 6, 3, 9]));
