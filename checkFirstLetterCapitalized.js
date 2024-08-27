// make a function that, given a string, determines if the 1st letter is capitalized or not

function checkFirstLetterCapitalised (string) {
for (let i = 0; i<string.length;i++) {
    if(string[0] === string[0].toUpperCase()) {
        return true
    }
    else return false
}
}

console.log(checkFirstLetterCapitalised("Fruit"))
console.log(checkFirstLetterCapitalised("fruit"))

function capitalizeFirstLetter (string){
    
  return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capitalizeFirstLetter("hello"))