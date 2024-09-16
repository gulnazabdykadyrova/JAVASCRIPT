/*
write a function, given a word, that returns an object
with the count of vowels and consonants in it
input:
    'stupify'
output:
    {
       vowels: 2,
       consonants: 5
    }
*/

function countLetters(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let output = {
    vowels: 0,
    consonants: 0,
  };
  for (let i = 0; i < word.length; i++) {
    // checking if it is a letter (it might be a number or a symbol)
    if (word[i].toLowerCase() != word[i].toUpperCase())
      if (vowels.includes(word[i].toLowerCase())) {
        output.vowels += 1;
      } else {
        output.consonants += 1;
      }
  }
  return output;
}

console.log(countLetters("stupify"));
