// make a function that, given a string, determines if the 1st letter is capitalized or not

function checkFirstLetterCapitalised(string) {
  return string[0] === string[0].toUpperCase();
}

console.log(checkFirstLetterCapitalised("Fruit"));
console.log(checkFirstLetterCapitalised("fruit"));
