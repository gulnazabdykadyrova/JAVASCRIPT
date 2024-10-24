//make a function that determines if the first and last letter of a string are the same letter

function checkOutsideLetters(string) {
  return string[0] === string[string.length - 1];
}

console.log(checkOutsideLetters("sisters"));
console.log(checkOutsideLetters("mister"));
