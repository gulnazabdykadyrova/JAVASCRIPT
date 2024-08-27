//make a function that determines if the first and last letter of a string are the same letter

function checkOutsideLetters (string) {
    for(let i = 0; i < string.length; i++) {
        if(string[0]===string.charAt(string.length-1)) {
            return true
        }else {
           return false
        }
    }


}

console.log(checkOutsideLetters("sisters"))
console.log(checkOutsideLetters("mister"))
