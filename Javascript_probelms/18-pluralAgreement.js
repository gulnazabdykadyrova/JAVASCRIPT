// given 2 arrays, 1 of numbers, and one of words
// return an array of true and false values
// true if the number and the word singular agree
// false if they do not agree
// for example:
// input:
//   [1,3,2]
//   ['dogs','planes','tree']
// output:
//   [false, true, false]

// This function only handles the basic case
function pluralAgreement(num, words) {
  let output = [];

  for (let i = 0; i < num.length; i++) {
    console.log(words[i][words[i].length - 1]);
    if (
      ((num[i] > 1 || num[i] === 0) && words[i][words[i].length - 1] === "s") ||
      (num[i] === 1 && words[i][words[i].length - 1] !== "s")
    ) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
}
console.log(pluralAgreement([1, 3, 2], ["dogs", "planes", "tree"]));
console.log(pluralAgreement([2, 3, 0], ["dogs", "planes", "tree"]));
