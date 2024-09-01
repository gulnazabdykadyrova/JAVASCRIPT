// task: given an array of words, determine which one is the longest and returns it input:
// ['great','days','hi'] output: 'great'

let findLongestWordInArray = (arr) => {
  let longest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};

console.log(findLongestWordInArray(["great", "days", "hi"]));
