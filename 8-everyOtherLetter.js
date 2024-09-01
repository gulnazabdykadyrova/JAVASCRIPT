// given a string, return a string with every other letter
function getEveryOtherLetter(string) {
  let str = "";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 1) {
      str = str.concat(string[i]);
    }
  }

  return str;
}

console.log(getEveryOtherLetter("mistermister"));
console.log(getEveryOtherLetter("silliness"));
console.log(getEveryOtherLetter("sillines"));
