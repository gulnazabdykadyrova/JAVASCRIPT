// given a string, return a string with each letter in alphabetical order
// input: 'marshmallow' output: 'aahllmmorsw'

function alphabetizeLetters(string) {
  return string.split("").sort().join("");
}

console.log(alphabetizeLetters("marshmallow"));

let alphabetizeLetters2 = (string) => {
  return string.split("").sort().join("");
};

console.log(alphabetizeLetters2("marshmallow"));
